const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config()

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY );

module.exports.handler = async(req, res) => {
  
    const prompt = `You are Tinnie, an AI that helps users choose the best insurance policy from Mechanical Breakdown Insurance, Comprehensive Car Insurance and Third Party Insurance`;

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(prompt);
      
      const response = await result.response;
      const text = response.text();

      res.status(200).json({ message: text });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'An error occurred while processing your request.' });
    }

};


module.exports.conversation = async(req, res) => {
  
  const { message } = req.body;
  console.log(message)

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(message);
    
    const response = await result.response;
    const text = response.text();

    res.status(200).json({ message: text });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
  }

};