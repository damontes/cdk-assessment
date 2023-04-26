import {
  BatchResultErrorEntry,
  SQSClient,
  SendMessageBatchCommand,
  SendMessageBatchRequestEntry,
  SendMessageBatchResultEntry,
} from "@aws-sdk/client-sqs";
import { Subject } from "rxjs";

const subject = new Subject<BatchResultErrorEntry[]>();

const sqsClient = new SQSClient({
  region: "us-east-1",
});

export type SendMessageBatchResponse = {
  queueUrl: string;
  entries: SendMessageBatchRequestEntry[];
};

subject.subscribe({
  next: (v) =>
    console.log(
      `Do something with message that could not be sent to SQS: ${v}`
    ),
});

export const sendMessageBatch = async ({
  queueUrl,
  entries,
}: {
  queueUrl: string;
  entries: SendMessageBatchRequestEntry[];
}) => {
  try {
    const params = {
      QueueUrl: queueUrl,
      Entries: entries,
    };
    const command = new SendMessageBatchCommand(params);
    const { Failed, Successful } = await sqsClient.send(command);

    if (Failed?.length) {
      subject.next(Failed);
    }

    return { Failed, Successful };
  } catch (error: any) {
    throw new Error(error);
  }
};
