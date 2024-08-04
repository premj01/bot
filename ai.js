require('dotenv').config()
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable.
const genAI = new GoogleGenerativeAI(process.env.AI_API_KEY);

const AI_TEXT_GENERATION = async (input_Text, refMSG) => {
    try {

        // Choose a model that's appropriate for your use case.
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = input_Text;

        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = await response.text();
        await refMSG.reply(text + "\n\t\tAssistant Nebula...")

    } catch (error) {
        await refMSG.reply("I am facing little bit issue please call my doctor" + "\n\t\tAssistant Nebula...")

    }
}
module.exports = { AI_TEXT_GENERATION };