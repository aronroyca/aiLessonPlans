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
  let {topic, grade, length, stateCurr} = inputs;
  console.log(topic, grade, length, stateCurr);

  function generatePrompt(topic, grade, length, stateCurr) {
    return `Please create a ${length} hour lesson plan for ${grade} about ${topic}, which abides by ${stateCurr} curriculum standards. Use Madeline Hunter's template. Utilize motivational interviewing in the lesson plan.  Format the response as html`;
  }

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: generatePrompt(topic, grade, length, stateCurr),
    max_tokens: 4000,
    temperature: 0.5,
  });
    res.status(200).json({ result: completion.data.choices[0].text });
};

exports.openaiCall = openaiCall;
