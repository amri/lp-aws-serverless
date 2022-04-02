const AWS = require('aws-sdk')

module.exports.CreateTemplates = async (event) => {
  // Make sure body exist otherwise throw error
  if (!event.body) throw new Error("Missing Parameter");
  const data = event.body;
  var documentClient = new AWS.DynamoDB.DocumentClient();

  const templateQueryResults = await documentClient.query({
    TableName: 'templates',
    Limit: 1,
    KeyConditionExpression: "user_id = :user_id",
    FilterExpression: "idempotent_key = :idempotent_key",
    ExpressionAttributeValues: {
      ":user_id": data.user_id,
      ":idempotent_key": data.idempotent_key,
    },
  });

  await documentClient.put( {
    TableName : 'templates',
    Item: {
       user_id: "1",
       template_id: "1",
       idempotent_key : "asd"
    }
  }).promise();

  const response = {
    "statusCode": 200,
    "body": JSON.stringify(templateQueryResults),
    "isBase64Encoded": false
  };

  return response;

};
