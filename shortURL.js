const axios = require('axios')

const shortURL = async (input_MSG, refMSG) => {

    let url = input_MSG.trim();

    const parts = url.split(" ")
    url = parts[1]
    let YOUR_CUSTOM_NAME = parts[2] + Math.round((Math.random() * 100000)) || ""
    console.log(YOUR_CUSTOM_NAME);
    refMSG.reply("*Shortning URL...*\nPlease bear with me for a moment...")
    axios
        .get(`https://ulvis.net/api.php?url=${url}&custom=${YOUR_CUSTOM_NAME}&private=1`)
        .then(res=>res.data)
        .then(res => {
            refMSG.reply("YoUr URL: " + res)
        }).catch((err) => {
            refMSG.reply("Sorry due to some issue you still have to use :\n" + url)
        })
}

// shortURL("short.url https://gpnashik.ac.in/" , 12345 )
module.exports = shortURL;