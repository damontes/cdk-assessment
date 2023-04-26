export type EventType = typeof event;
export type RecordType = EventType["records"]["offset.1"][0];
export interface ParseRecordType extends Omit<RecordType, "value"> {
  value: {
    eventType: string;
    payload: {
      id: number;
      lid: string;
      data: {
        formId: string;
        firstName: string;
        lastName: string;
        emailAddress: string;
        userType: string;
      };
    };
  };
}

export const event = {
  records: {
    ["offset.1"]: [
      {
        key: "1233456789",
        headers: [],
        offset: 1,
        partition: 1,
        timestamp: 1682546272938,
        topic: "kafkaTopic",
        timestampType: "CREATE_TIME",
        value: Buffer.from(
          JSON.stringify({
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
          })
        ).toString("base64"),
      },
    ],
    ["offset.2"]: [
      {
        key: "1233456788",
        headers: [],
        offset: 2,
        partition: 1,
        timestamp: 1682546272938,
        topic: "kafkaTopic",
        timestampType: "CREATE_TIME",
        value: Buffer.from(
          JSON.stringify({
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
          })
        ).toString("base64"),
      },
    ],
  },
  eventSource: "aws:kafka",
  eventSourceArn: "",
};

export const second_event = {
  records: {
    ["offset.1"]: [
      {
        key: "1233456789",
        headers: [],
        offset: 1,
        partition: 1,
        timestamp: 1682546272938,
        topic: "kafkaTopic",
        timestampType: "CREATE_TIME",
        value: Buffer.from(
          JSON.stringify({
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
          })
        ).toString("base64"),
      },
      {
        key: "1233456780",
        headers: [],
        offset: 2,
        partition: 1,
        timestamp: 1682546272938,
        topic: "kafkaTopic",
        timestampType: "CREATE_TIME",
        value: Buffer.from(
          JSON.stringify({
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
          })
        ).toString("base64"),
      },
      {
        key: "1233456781",
        headers: [],
        offset: 2,
        partition: 1,
        timestamp: 1682546272938,
        topic: "kafkaTopic",
        timestampType: "CREATE_TIME",
        value: Buffer.from(
          JSON.stringify({
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
          })
        ).toString("base64"),
      },
    ],
    ["offset.2"]: [
      {
        key: "1233456782",
        headers: [],
        offset: 2,
        partition: 1,
        timestamp: 1682546272938,
        topic: "kafkaTopic",
        timestampType: "CREATE_TIME",
        value: Buffer.from(
          JSON.stringify({
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
          })
        ).toString("base64"),
      },
      {
        key: "1233456783",
        headers: [],
        offset: 2,
        partition: 1,
        timestamp: 1682546272938,
        topic: "kafkaTopic",
        timestampType: "CREATE_TIME",
        value: Buffer.from(
          JSON.stringify({
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
          })
        ).toString("base64"),
      },
      {
        key: "1233456784",
        headers: [],
        offset: 2,
        partition: 1,
        timestamp: 1682546272938,
        topic: "kafkaTopic",
        timestampType: "CREATE_TIME",
        value: Buffer.from(
          JSON.stringify({
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
          })
        ).toString("base64"),
      },
      {
        key: "1233456785",
        headers: [],
        offset: 2,
        partition: 1,
        timestamp: 1682546272938,
        topic: "kafkaTopic",
        timestampType: "CREATE_TIME",
        value: Buffer.from(
          JSON.stringify({
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
          })
        ).toString("base64"),
      },
      {
        key: "1233456786",
        headers: [],
        offset: 2,
        partition: 1,
        timestamp: 1682546272938,
        topic: "kafkaTopic",
        timestampType: "CREATE_TIME",
        value: Buffer.from(
          JSON.stringify({
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
          })
        ).toString("base64"),
      },
      {
        key: "1233456787",
        headers: [],
        offset: 2,
        partition: 1,
        timestamp: 1682546272938,
        topic: "kafkaTopic",
        timestampType: "CREATE_TIME",
        value: Buffer.from(
          JSON.stringify({
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
          })
        ).toString("base64"),
      },
      {
        key: "1233456788",
        headers: [],
        offset: 2,
        partition: 1,
        timestamp: 1682546272938,
        topic: "kafkaTopic",
        timestampType: "CREATE_TIME",
        value: Buffer.from(
          JSON.stringify({
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
          })
        ).toString("base64"),
      },
      {
        key: "1233456789",
        headers: [],
        offset: 2,
        partition: 1,
        timestamp: 1682546272938,
        topic: "kafkaTopic",
        timestampType: "CREATE_TIME",
        value: Buffer.from(
          JSON.stringify({
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
          })
        ).toString("base64"),
      },
      {
        key: "1233456790",
        headers: [],
        offset: 2,
        partition: 1,
        timestamp: 1682546272938,
        topic: "kafkaTopic",
        timestampType: "CREATE_TIME",
        value: Buffer.from(
          JSON.stringify({
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
          })
        ).toString("base64"),
      },
    ],
  },
  eventSource: "aws:kafka",
  eventSourceArn: "",
};
