import { SendMessageBatchRequestEntry } from "@aws-sdk/client-sqs";

export const mock_records = [
  {
    key: "1233456789",
    headers: [],
    offset: 1,
    partition: 1,
    timestamp: 1682546272938,
    topic: "kafkaTopic",
    timestampType: "CREATE_TIME",
    value: {
      eventType: "FormDataProcessed",
      payload: {
        id: 1234567,
        lid: "1234567-1",
        data: {
          formId: "KM_HomeEdition_Short_155",
          firstName: "Jane",
          lastName: "Connor",
          emailAddress: "example@email.com",
          userType: "admin",
        },
      },
    },
  },
  {
    key: "1233456788",
    headers: [],
    offset: 2,
    partition: 1,
    timestamp: 1682546272938,
    topic: "kafkaTopic",
    timestampType: "CREATE_TIME",
    value: {
      eventType: "FormDataProcessed",
      payload: {
        id: 12345678,
        lid: "12345678-1",
        data: {
          formId: "KM_HomeEdition_Short_155",
          firstName: "John",
          lastName: "Connor",
          emailAddress: "example@email2.com",
          userType: "user",
        },
      },
    },
  },
];

export const second_mock_records = [
  {
    key: "1233456780",
    headers: [],
    offset: 2,
    partition: 1,
    timestamp: 1682546272938,
    topic: "kafkaTopic",
    timestampType: "CREATE_TIME",
    value: {
      eventType: "FormDataProcessed",
      payload: {
        id: 12345678,
        lid: "12345678-1",
        data: {
          formId: "KM_HomeEdition_Short_155",
          firstName: "John",
          lastName: "Connor",
          emailAddress: "example@email2.com",
          userType: "user",
        },
      },
    },
  },
  {
    key: "1233456781",
    headers: [],
    offset: 2,
    partition: 1,
    timestamp: 1682546272938,
    topic: "kafkaTopic",
    timestampType: "CREATE_TIME",
    value: {
      eventType: "FormDataProcessed",
      payload: {
        id: 12345678,
        lid: "12345678-1",
        data: {
          formId: "KM_HomeEdition_Short_155",
          firstName: "John",
          lastName: "Connor",
          emailAddress: "example@email2.com",
          userType: "user",
        },
      },
    },
  },
  {
    key: "1233456782",
    headers: [],
    offset: 2,
    partition: 1,
    timestamp: 1682546272938,
    topic: "kafkaTopic",
    timestampType: "CREATE_TIME",
    value: {
      eventType: "FormDataProcessed",
      payload: {
        id: 12345678,
        lid: "12345678-1",
        data: {
          formId: "KM_HomeEdition_Short_155",
          firstName: "John",
          lastName: "Connor",
          emailAddress: "example@email2.com",
          userType: "user",
        },
      },
    },
  },
  {
    key: "1233456783",
    headers: [],
    offset: 2,
    partition: 1,
    timestamp: 1682546272938,
    topic: "kafkaTopic",
    timestampType: "CREATE_TIME",
    value: {
      eventType: "FormDataProcessed",
      payload: {
        id: 12345678,
        lid: "12345678-1",
        data: {
          formId: "KM_HomeEdition_Short_155",
          firstName: "John",
          lastName: "Connor",
          emailAddress: "example@email2.com",
          userType: "user",
        },
      },
    },
  },
  {
    key: "1233456784",
    headers: [],
    offset: 2,
    partition: 1,
    timestamp: 1682546272938,
    topic: "kafkaTopic",
    timestampType: "CREATE_TIME",
    value: {
      eventType: "FormDataProcessed",
      payload: {
        id: 12345678,
        lid: "12345678-1",
        data: {
          formId: "KM_HomeEdition_Short_155",
          firstName: "John",
          lastName: "Connor",
          emailAddress: "example@email2.com",
          userType: "user",
        },
      },
    },
  },
  {
    key: "1233456785",
    headers: [],
    offset: 2,
    partition: 1,
    timestamp: 1682546272938,
    topic: "kafkaTopic",
    timestampType: "CREATE_TIME",
    value: {
      eventType: "FormDataProcessed",
      payload: {
        id: 12345678,
        lid: "12345678-1",
        data: {
          formId: "KM_HomeEdition_Short_155",
          firstName: "John",
          lastName: "Connor",
          emailAddress: "example@email2.com",
          userType: "user",
        },
      },
    },
  },
  {
    key: "1233456786",
    headers: [],
    offset: 2,
    partition: 1,
    timestamp: 1682546272938,
    topic: "kafkaTopic",
    timestampType: "CREATE_TIME",
    value: {
      eventType: "FormDataProcessed",
      payload: {
        id: 12345678,
        lid: "12345678-1",
        data: {
          formId: "KM_HomeEdition_Short_155",
          firstName: "John",
          lastName: "Connor",
          emailAddress: "example@email2.com",
          userType: "user",
        },
      },
    },
  },
  {
    key: "1233456787",
    headers: [],
    offset: 2,
    partition: 1,
    timestamp: 1682546272938,
    topic: "kafkaTopic",
    timestampType: "CREATE_TIME",
    value: {
      eventType: "FormDataProcessed",
      payload: {
        id: 12345678,
        lid: "12345678-1",
        data: {
          formId: "KM_HomeEdition_Short_155",
          firstName: "John",
          lastName: "Connor",
          emailAddress: "example@email2.com",
          userType: "user",
        },
      },
    },
  },
  {
    key: "1233456788",
    headers: [],
    offset: 2,
    partition: 1,
    timestamp: 1682546272938,
    topic: "kafkaTopic",
    timestampType: "CREATE_TIME",
    value: {
      eventType: "FormDataProcessed",
      payload: {
        id: 12345678,
        lid: "12345678-1",
        data: {
          formId: "KM_HomeEdition_Short_155",
          firstName: "John",
          lastName: "Connor",
          emailAddress: "example@email2.com",
          userType: "user",
        },
      },
    },
  },
  {
    key: "1233456789",
    headers: [],
    offset: 2,
    partition: 1,
    timestamp: 1682546272938,
    topic: "kafkaTopic",
    timestampType: "CREATE_TIME",
    value: {
      eventType: "FormDataProcessed",
      payload: {
        id: 12345678,
        lid: "12345678-1",
        data: {
          formId: "KM_HomeEdition_Short_155",
          firstName: "John",
          lastName: "Connor",
          emailAddress: "example@email2.com",
          userType: "user",
        },
      },
    },
  },
  {
    key: "1233456790",
    headers: [],
    offset: 2,
    partition: 1,
    timestamp: 1682546272938,
    topic: "kafkaTopic",
    timestampType: "CREATE_TIME",
    value: {
      eventType: "FormDataProcessed",
      payload: {
        id: 12345678,
        lid: "12345678-1",
        data: {
          formId: "KM_HomeEdition_Short_155",
          firstName: "John",
          lastName: "Connor",
          emailAddress: "example@email2.com",
          userType: "user",
        },
      },
    },
  },
];

export const mock_entries_messages: SendMessageBatchRequestEntry[] = [
  {
    Id: mock_records[1].key,
    MessageBody: JSON.stringify(mock_records[1]),
  },
];

export const second_mock_entries_messages_first_call: SendMessageBatchRequestEntry[] =
  second_mock_records.slice(0, 10).map((record) => ({
    Id: record.key,
    MessageBody: JSON.stringify(record),
  }));

export const second_mock_entries_messages_second_call: SendMessageBatchRequestEntry[] =
  second_mock_records.slice(10).map((record) => ({
    Id: record.key,
    MessageBody: JSON.stringify(record),
  }));
