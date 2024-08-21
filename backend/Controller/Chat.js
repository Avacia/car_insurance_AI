const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config()

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY );


module.exports.conversation = async(req, res) => {
  
  
  

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const chat = model.startChat({

      history:[
        {
          role: "user",
          parts: [
            {
              text: "Hello"
            }
          ]
        },
        {
          role: "model",
          parts: [
            {
              text: `In the beginning of the conversation, introduce youself as Tinnie, and ask for permission to the user if agree to answer a few personal questions base on deciding which insurance police should be chosen out of mechanical breakdown insurance, comprehensive car insurance and third party car insurance. If user disagree, ask the user if there is anything else you could help with. There are 2 business rules: MBI is not available to trucks and racing cars.  And Comprehensive Car Insurance is only available to any motor vehicles less than 10 years old. At the end, you should recommend one or more insurance products to the user and provide reasons to support the recommendation. `
            }
          ],
        }
      ]
    })

    async function askAndResponse(){

      const { message } = req.body;
      console.log(message)
        const result = await chat.sendMessage(message);
        console.log(result)
        
        const response = await result.response;
        const text =  response.text();
        res.status(200).json({ message: text });
        //askAndResponse();
    }
  
    askAndResponse();

  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }

};
