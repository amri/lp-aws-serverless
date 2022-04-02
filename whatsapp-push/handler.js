'use strict';

module.exports.CreateTemplates = async (event) => {
  // Make sure body exist otherwise throw error
  if (!event.body) throw new Error("Missing Parameter");
  JSON.stringify(event.body);
  const response = {
    "statusCode": 200,
    "headers": {
        "my_header": "my_value"
    },
    "body": event.body,
    "isBase64Encoded": false
};
  return response;
  // const templateQueryResults = await DynamoDBClient.query({
  //   TableName: templates,
  //   Limit: 1,
  //   KeyConditionExpression: "user_id = :user_id",
  //   FilterExpression: "idempotent_key = :idempotent_key",
  //   ExpressionAttributeValues: {
  //     ":user_id": value.user_id,
  //     ":idempotent_key": value.idempotent_key,
  //   },
  // });
};
