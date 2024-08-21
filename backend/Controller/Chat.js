const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config()

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY );

module.exports.conversation = async(req, res) => {
  
  const { message } = req.body;
  console.log(message)

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
             text: `I’m Tinnie.  I help you to choose an insurance policy.  
                    May I ask you a few personal questions to make sure I 
                    recommend the best policy for you?`
            }
          ],
        }
      ]
    })

    const result = await chat.sendMessage(message);
    
    const response = await result.response;
    const text = response.text();

    res.status(200).json({ message: text });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }

};
