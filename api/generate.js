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
  let [userTopic, userGrade, userClassLength, userState] = inputs;
  // console.log(userTopic, userClassLength, userState);

  function generatePrompt(userTopic, userGrade, userClassLength, userState) {
    return `Please create a ${userClassLength} lesson plan for ${userGrade} about ${userTopic} which abides by ${userState} curriculum standards. Insert examples of code, diagrams, or pictures when possible. Use Madeline Hunter's template.`;
  }

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: generatePrompt(userTopic, userGrade, userClassLength, userState),
    max_tokens: 2048,
    temperature: 0.5,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
};

exports.openaiCall = openaiCall;
