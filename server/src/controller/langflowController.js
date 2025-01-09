import fetch from "node-fetch";
const { BASE_URL, APPLICATION_TOKEN } = process.env;

class LangflowClient {
  constructor() {
    this.baseURL = BASE_URL;
    this.applicationToken = APPLICATION_TOKEN;
  }

  async post(endpoint, body) {
    console.log(this.baseURL)
    const url = `https://api.langflow.astra.datastax.com/${endpoint}`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer AstraCS:RqcQXLwXieXneaENfcgZEsqp:4b831f9db589b9bf22bcc2a1421674ad6c1707ceb341a7e3d033660315582bd9`,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      });

      const responseMessage = await response.json();
      if (!response.ok) {
        throw new Error(
          `${response.status} ${response.statusText} - ${JSON.stringify(
            responseMessage
          )}`
        );
      }
      return responseMessage;
    } catch (error) {
      console.error("Request Error:", error.message);
      throw error;
    }
  }

  async runFlow(
    flowIdOrName,
    langflowId,
    inputValue,
    inputType,
    outputType,
    tweaks,
    stream
  ) {
    const endpoint = `/lf/${langflowId}/api/v1/run/${flowIdOrName}?stream=${stream}`;
    return this.post(endpoint, {
      input_value: inputValue,
      input_type: inputType,
      output_type: outputType,
      tweaks,
    });
  }
}

export default new LangflowClient();