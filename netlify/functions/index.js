const serverless = require("serverless-http");
const { app } = require("../../src/app");

exports.handler = async (event, context) => {
  const handler = serverless(app);
  return handler(event, context);
};