const Request = require("request")
const ReadLine = require("readline-sync")

let Channel = ReadLine.question("Insert the user ID of the channel you would like to mine lumine in\n")
let Token = ReadLine.question("Insert your Discord token (This is completely safe and will not be logged, check source code for proof)\n")

setInterval(() => {
    Request.post(`https://discord.com/api/v9/channels/${Channel}/messages`, {
        json: {
            "content" : "l!wish10", 
            "tts" : false
        }, 
        headers: {
            "content-type" : "application/json",
            "authorization" : Token
        }
    });
}, (60 * 1000));

setInterval(() => {
    Request.post(`https://discord.com/api/v9/channels/${Channel}/messages`, {
        json: {
            "content" : "l!wish", 
            "tts" : false
        }, 
        headers: {
            "content-type" : "application/json",
            "authorization" : Token
        }
    });
}, (10 * 1000));