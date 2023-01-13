let openailib = require("openai");
let { Configuration, OpenAIApi } = openailib;

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

module.exports = async function (req, res) {
  const inputs = req.body || "";

  function generatePrompt(topic) {
    const capitalizedTopic =
      inputs[0].toUpperCase() + inputs.slice(1).toLowerCase();
    return `Please create a 1 hour lesson plan for 5th graders about ${capitalizedTopic} which abides by california curriculum stndards.`;
  }

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: generatePrompt(topic),
    temperature: 0.6,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
};
