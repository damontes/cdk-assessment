import { event, second_event } from "../lib/data";
import { handler } from "../lib/functions/handler";
import * as helpers from "../lib/helpers";
import {
  mock_entries_messages,
  mock_records,
  second_mock_entries_messages_first_call,
  second_mock_entries_messages_second_call,
} from "../lib/mock_data";
import * as dynamodbServices from "../lib/services/dynamodb";
import * as sqsServices from "../lib/services/sqs";

describe("handle", () => {
  let result = {} as {
    statusCode: number;
    headers: string;
    body: string;
  };
  let passCode = helpers.getPassCode();

  beforeEach(async () => {
    jest.clearAllMocks();
    jest
      .spyOn(dynamodbServices, "putItem")
      .mockReturnValue(Promise.resolve({}));
    jest
      .spyOn(sqsServices, "sendMessageBatch")
      .mockReturnValue(Promise.resolve({ Failed: [], Successful: [] }));
    jest.spyOn(helpers, "getPassCode").mockReturnValue(passCode);
  });

  it("handler is called correclty", async () => {
    const result = await handler(event);

    expect(result.statusCode).toBe(200);
  });

  it("should have saved correctly dynamodb data", async () => {
    const result = await handler(event);

    expect(dynamodbServices.putItem).toBeCalledTimes(1);
    expect(dynamodbServices.putItem).toHaveBeenCalledWith({
      tableName: "userTables",
      item: { ...mock_records[0], passCode },
      conditionExpression: "attribute_not_exists(key)",
    });

    expect(result.statusCode).toBe(200);
  });

  it("should have send sqs message", async () => {
    const result = await handler(event);

    expect(sqsServices.sendMessageBatch).toBeCalledTimes(1);
    expect(sqsServices.sendMessageBatch).toHaveBeenCalledWith({
      queueUrl: "https://sqs.us-east-1.amazonaws.com/123456789012/userQueue",
      entries: mock_entries_messages,
    });

    expect(result.statusCode).toBe(200);
  });

  it("should have send chunk of 10 messages", async () => {
    const result = await handler(second_event);

    expect(sqsServices.sendMessageBatch).toBeCalledTimes(2);

    expect(sqsServices.sendMessageBatch).toHaveBeenNthCalledWith(1, {
      queueUrl: "https://sqs.us-east-1.amazonaws.com/123456789012/userQueue",
      entries: second_mock_entries_messages_first_call,
    });

    expect(sqsServices.sendMessageBatch).toHaveBeenNthCalledWith(2, {
      queueUrl: "https://sqs.us-east-1.amazonaws.com/123456789012/userQueue",
      entries: second_mock_entries_messages_second_call,
    });

    expect(result.statusCode).toBe(200);
  });
});
