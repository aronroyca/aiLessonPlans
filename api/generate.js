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
  console.log(userTopic, userClassLength, userState);

  function generatePrompt(userTopic, userGrade, userClassLength, userState) {
    return `Please create a ${userClassLength} hour lesson plan for ${userGrade} about ${userTopic}, which abides by ${userState} curriculum standards. Use Madeline Hunter's template. Please format the document using html5.`;
    // return `Create a lesson plan for chapter 5  in the book with the isbn 9780153121012. Format the lesson with html5. Utilize Madeline Hunter's lesson plan style`;
    //     `Please create a ${userClassLength} hour lesson plan for ${userGrade} about ${userTopic}, which abides by ${userState} curriculum standards. Use Madeline Hunter's template. Please format the document using html5.

    // userInput: userClassLength = 1, userGrade = 5, userTopic = "United States History", userState = "California"
    // lesson plan : United States History Lesson Plan
    // Objective
    // By the end of this lesson, students will be able to explain the major events that led to the formation of the United States of America.

    // Materials
    // Textbook, Whiteboard/chalkboard, Markers/chalk, Timeline chart, Notebook paper, Pencils

    // Anticipatory Set
    // Ask students to brainstorm a list of important events in United States history. Ask students to share their ideas with the class.

    // Teaching [input, modeling, and check for understanding]
    // Using the textbook, whiteboard, and timeline chart, explain the major events that led to the formation of the United States of America, including the American Revolution, the Declaration of Independence, the Constitution, and the Bill of Rights.

    // Modeling
    // Demonstrate how to use the timeline chart to create a timeline of the major events in United States history.

    // Check for Understanding
    // Ask students to answer questions about the major events in United States history.

    // Guided Practice
    // Have students use the timeline chart to create a timeline of the major events in United States history.

    // Independent Practice
    // Have students use their notebooks to write a brief summary of each of the major events in United States history.

    // Closure
    // Have students share their summaries with the class.

    // Assessment
    // Have students complete a quiz on the major events in United States history.`;
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
