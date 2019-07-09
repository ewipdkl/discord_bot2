const Discord = require('discord.js');
var cron = require('../Bot_Ewip/node_modules/node-cron/src/node-cron.js')
const bot = new Discord.Client();

bot.on('ready', () =>{
    console.log("Je suis connecté");
    
    var getDate = new Date()
    var date = getDate.getDay()
    var hour = getDate.getHours()
    var inc = 0

    console.log(date)
    console.log(hour)  
    
    cron.schedule('0 19 3 * * *', () => {
        
        console.log("Entrer dans le IF") 
        bot.channels.get("541659079756742696").send("everyone La réunion est prévus ce lundi à 20h indiquez votre présence sur ce message avec le check vert, merci.");
        console.log("Message envoyé")
    })
   
})



bot.login('NTk3OTE2OTQ3MDc3NjYwNjg1.XSPJHw.ShiWytiASzjnj3tArAuXD-ed2K0')
