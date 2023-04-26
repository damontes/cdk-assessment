import { EventType } from "../data";
import {
  chunk,
  getPassCode,
  getUserTypeByRecord,
  parseRecord,
  parseRecordToSQSPayload,
} from "../helpers/index";
import { putItem } from "../services/dynamodb";
import { sendMessageBatch } from "../services/sqs";

const USER_TYPES = {
  admin: "admin",
  user: "user",
};

const tableName = process.env.TABLE_NAME ?? "userTables";
const queueUrl =
  process.env.IDENTITY_LOOKUP_QUEUE ??
  "https://sqs.us-east-1.amazonaws.com/123456789012/userQueue";

const handler = async (event: EventType) => {
  const records = Object.values(event.records).reduce(parseRecord, []);
  const adminRecords = records
    .filter((record) => getUserTypeByRecord(record) === USER_TYPES.admin)
    .map((val) => ({
      ...val,
      passCode: getPassCode(),
    }));

  const restRecords = records.filter(
    (user) => getUserTypeByRecord(user) !== USER_TYPES.admin
  );

  const sqsMessages = chunk(restRecords.map(parseRecordToSQSPayload), 10);

  const processDynamoItems = Promise.all(
    adminRecords.map((item) =>
      putItem({
        tableName,
        item,
        conditionExpression: "attribute_not_exists(key)",
      })
    )
  );

  const processSQSItems = Promise.all(
    sqsMessages.map((entries) => sendMessageBatch({ queueUrl, entries }))
  );

  const result = await Promise.allSettled([
    processDynamoItems,
    processSQSItems,
  ]);

  return {
    statusCode: 200,
    headers: JSON.stringify(result),
    body: "Records Processed Successfully",
  };
};

export { handler };
