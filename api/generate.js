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
    return `Please create a ${userClassLength} hour lesson plan for ${userGrade} about ${userTopic}, which abides by ${userState} curriculum standards. Use Madeline Hunter's template. Please format the document using html5.`;
    // return `Create a lesson plan for chapter 5  in the book with the isbn 9780153121012. Format the lesson with html5. Utilize Madeline Hunter's lesson plan style`;
  }

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: generatePrompt(userTopic, userGrade, userClassLength, userState),
    max_tokens: 4000,
    temperature: 0.5,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
};

exports.openaiCall = openaiCall;
