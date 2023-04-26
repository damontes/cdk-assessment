import * as path from "path";
import { Duration, Stack, StackProps } from "aws-cdk-lib";
import * as sns from "aws-cdk-lib/aws-sns";
import * as subs from "aws-cdk-lib/aws-sns-subscriptions";
import * as sqs from "aws-cdk-lib/aws-sqs";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";

import { Construct } from "constructs";
import { SqsEventSource } from "aws-cdk-lib/aws-lambda-event-sources";

export class CdkAssessmentStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const queue = new sqs.Queue(this, "CdkAssessmentQueue", {
      visibilityTimeout: Duration.seconds(300),
    });

    const topic = new sns.Topic(this, "CdkAssessmentTopic");

    topic.addSubscription(new subs.SqsSubscription(queue));

    const eventSource = new SqsEventSource(queue);

    const userTable = new dynamodb.Table(this, "userTable", {
      partitionKey: { name: "key", type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
    });

    const fnLambda = new lambda.Function(this, "CdkAssessmentLambda", {
      runtime: lambda.Runtime.NODEJS_16_X,
      handler: "handler.handler",
      code: lambda.Code.fromAsset(path.join(__dirname, "./functions")),
      memorySize: 512,
      timeout: Duration.seconds(10),
      environment: {
        TABLE_NAME: userTable.tableName,
        IDENTITY_LOOKUP_QUEUE:
          "https://sqs.us-east-1.amazonaws.com/123456789012/userQueue",
      },
    });

    userTable.grantWriteData(fnLambda);
    queue.grantSendMessages(fnLambda);
    fnLambda.addEventSource(eventSource);
  }
}
