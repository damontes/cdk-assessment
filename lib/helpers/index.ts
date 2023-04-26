import { SqsSendMessageProps } from "aws-cdk-lib/aws-stepfunctions-tasks";
import { EventType, ParseRecordType, RecordType } from "../data";
import { SendMessageBatchRequestEntry } from "@aws-sdk/client-sqs";

type JustArray<T> = T extends Array<unknown> ? T : never;

export const decodeBase64String = <T>(base64String: string): T => {
  return JSON.parse(Buffer.from(base64String, "base64").toString("utf-8"));
};

export const parseRecord = (acc: ParseRecordType[], records: RecordType[]) => {
  const newItems: ParseRecordType[] = records.map((event) => ({
    ...event,
    value: decodeBase64String(event.value),
  }));
  return [...acc, ...newItems];
};

export const getPassCode = () => {
  return Math.floor(Math.random() * 100000000);
};

export const parseRecordToSQSPayload = (
  record: ParseRecordType
): SendMessageBatchRequestEntry => {
  return {
    Id: record.key,
    MessageBody: JSON.stringify(record),
  };
};

export const chunk = <T extends Array<any>>(items: T, size: number): T[] => {
  return items.reduce((acc, item, index) => {
    const chunkIndex = Math.floor(index / size);

    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }

    acc[chunkIndex].push(item);

    return acc;
  }, []);
};

export const getUserTypeByRecord = (record: ParseRecordType) => {
  return record.value.payload.data.userType;
};
