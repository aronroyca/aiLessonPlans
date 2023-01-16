let openailib = require("openai");
let { Configuration, OpenAIApi } = openailib;
let apiKey = require("../.env");

const configuration = new Configuration({
  apiKey: apiKey.apiKey,
});
const openai = new OpenAIApi(configuration);

const openaiCall = async function (req, res) {
  const inputs = req.body || "";
  console.log("post openaiCall", inputs);

  function generatePrompt(inputs) {
    return `Please create a 1 hour lesson plan for 5th graders about ${inputs} which abides by california curriculum standards. Insert examples of code, diagrams, or pictures when possible. Use Madeline Hunter's template.`;
  }

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: generatePrompt(inputs[0]),
    max_tokens: 2048,
    temperature: 0.5,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
};

exports.openaiCall = openaiCall;
