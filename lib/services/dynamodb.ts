import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";

type NotArray<T extends object> = T extends Array<unknown> ? never : T;

interface Params {
  tableName: string;
}

interface PutParams<T> extends Params {
  item: T;
  conditionExpression?: string;
  keys?: string[];
}

const dynamoClient = new DynamoDBClient({
  region: "us-east-1",
});

const parseValuesToAttributeNames = <T extends object>(
  item: T,
  keys?: string[]
) => {
  const itemKeys = !keys?.length ? Object.keys(item) : keys;

  return itemKeys.reduce(
    (accumulator, fieldName) => ({
      ...accumulator,
      [`#${fieldName}`]: fieldName,
    }),
    {}
  );
};

export const putItem = async <T extends object>({
  tableName,
  item,
  keys = [],
  conditionExpression,
}: PutParams<NotArray<T>>) => {
  const putCommand = new PutItemCommand({
    TableName: tableName,
    Item: marshall(item),
    ExpressionAttributeNames: conditionExpression
      ? parseValuesToAttributeNames(item, keys)
      : undefined,
    ConditionExpression: conditionExpression,
    ReturnValues: "ALL_NEW",
  });

  const { Attributes } = await dynamoClient.send(putCommand);

  if (!Attributes) return null;

  return unmarshall(Attributes);
};
