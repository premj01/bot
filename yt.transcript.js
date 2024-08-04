const  { YoutubeTranscript } = require('youtube-transcript');

require('dotenv').config()
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.AI_API_KEY);

async function f(){

    try {
        YoutubeTranscript.fetchTranscript('https://youtu.be/woY8kGVqQR0?si=Ih826ujC8VqAuQKw').then(async(res)=>{

       
        let data = "language english .summarize a given youtube video content with emoji in it and it should as short as possible with title and topic encoded in HTML H2 tag and other content in suitable HTML tags \n ";
        res.forEach((ele)=>{
            data += ele.text + " "
        })

        // Choose a model that's appropriate for your use case.
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        // console.log(res);
        const prompt =  data;

        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = await response.text();
        console.log(text);
        // await refMSG.reply(text + "\n\t\tAssistant Nebula...")

    });

    } catch (error) {
        console.log("error");
    }



}
f();

