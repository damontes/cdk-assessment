# CDK Typescript Assessment

You should explore the contents of this project. This is a simple CDK
initialized application which contains an Amazon SQS queue that is subscribed to an Amazon SNS topic.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

# Problem

Your task is to develop a small lambda function that will receive an stream of
events over a Kafka connection (AWS MSK), you will need to process a specific stream of
events, filter and store them sending them to a DynamoDB table.

Make sure you process, filter and store with the following requirements and data
structure.

# Data structure

```
  const event = {
      records: {
          ['offset.1']: [{
              key: '1233456789',
              headers: [],
              offset: 1,
              partition: 1,
              timestamp: new Date().getTime(),
              topic: 'kafkaTopic',
              timestampType: 'CREATE_TIME',
              value: Buffer.from(JSON.stringify({
                  eventType: 'FormDataProcessed',
                  payload: {
                      id,
                      lid,
                      data: {
                          formId: 'KM_HomeEdition_Short_155',
                          firstName: 'Jane',
                          lastName: 'Connor',
                          emailAddress: 'example@email.com',
                          userType: 'admin'
                      }
                  }
              })).toString('base64')
          }],
          ['offset.2']: [{
              key: '1233456788'),
              headers: [],
              offset: 2,
              partition: 1,
              timestamp: new Date().getTime(),
              topic: 'kafkaTopic',
              timestampType: 'CREATE_TIME',
              value: Buffer.from(JSON.stringify({
                  eventType: 'FormDataProcessed',
                  payload: {
                      id,
                      lid,
                      data: {
                          formId: 'KM_HomeEdition_Short_155',
                          firstName: 'John',
                          lastName: 'Connor',
                          emailAddress: 'example@email2.com'
                          userType: 'user'
                      }
                  }
              })).toString('base64')
          }]
      },
      eventSource: 'aws:kafka',
      eventSourceArn: ''
  }
```

# Notes
* Fork the Repo and make a Pull Request to this with your solution
* No need to configure an aws account
* Just mocking the aws calls in your specs is enough

# Requirements:

- Parse the MSK Event with the records inside your lambda function
- Filter out any record that is not a userType of 'admin'
- Every record that is of type admin, you need to attach a new attribute called
  'passcode' to the record with an 8-integer random generated code value
- Submit  the record into a dynamoDB table called 'userTable' using
  a PutItem command to store it
  ```
      process.env.TABLE_NAME = 'userTable';
  ```

- For all the records that are NOT of userType 'admin', parse the record and
  send it over an AWS SQS Queue using a SendMessageBatchCommand

  You can use the following SQS URL in your tests:
  ```
      process.env.IDENTITY_LOOKUP_QUEUE = 'https://sqs.us-east-1.amazonaws.com/123456789012/userQueue';
  ```

- Use RxJS in your lambda function (bonus points)
- Make sure you create the pertaining spec scenarios for your function with Jest
- Update the cdk-assessment-stack.ts to register your DynamoDBTable, an SQSQueue and
  your Lambda Function for deployment
