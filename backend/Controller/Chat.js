const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config()

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

let chatHistory = [
  {
    role: "user",
    parts: [{ text: "Hello, I am interested in purchasing a car insurance policy. Can you help me with that?" }]
  },
  {
    role: "model",
    parts: [{ text: `
                    - Introduce yourself as Tinnie, a car insurance assistance which help user to select 
                      the insurance products that suit them the most.  
                    - Ask for permission to the user if agree to answer a 
                      few personal questions base on deciding which insurance police should be chosen out 
                      of mechanical breakdown insurance, comprehensive car insurance and third party car insurance. 
                    - If user disagree, greeting to the user and say good bye. 
                    - If user agree, ask at least 6 questions and up to 10 question in total, one question per each time 
                      to help user to decide which of the three insurance products they should select with user answering 
                      the question related to the three products. 
                    - There are 2 business rules: 
                        MBI is not available to trucks and racing cars.  
                        Comprehensive Car Insurance is only available to any motor vehicles less than 10 years old. 
                    - At the end, you should recommend one or more insurance products to the user and 
                      provide reasons to support the recommendation.` }]
  },
]


module.exports.conversation = async(req, res) => {
  
  const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"});

  try{
    const { message } = req.body;

    chatHistory.push({
      role: "user",
      parts: [{ text: message }]
    });

    const chat = model.startChat({
      history: chatHistory
    });
  
    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text =  response.text();

    chatHistory.push({
      role: "model",
      parts: [{ text: text }]
    });

    res.status(200).json({ message: text });
  } 
  catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }

};
