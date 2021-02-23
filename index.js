const {Telegraf} = require("telegraf")

const bot =  new Telegraf("1641273738:AAGMelgAdDTz2ForBwtEXeYNV126gBBEESI")

bot.start((ctx) => ctx.reply("Hi"))


setInterval(

()=>{console.log("help");}

,1000);


bot.launch()


console.log("server is running...");