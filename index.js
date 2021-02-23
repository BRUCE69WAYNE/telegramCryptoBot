require('dotenv').config();
const axios = require('axios');
const jsdom = require("jsdom");

const { Telegraf } = require('telegraf')
const bot = new Telegraf("1641273738:AAGMelgAdDTz2ForBwtEXeYNV126gBBEESI")

bot.start((ctx) => {
  ctx.reply("Bot is active and running 🤖")
})


const { JSDOM } = jsdom;
let price = "";
let priceText="";
let prices =[];

const options = {
    token: "C34DA79902B5B84E7CB50B96E4607DEC",
    url: 'https://coinmarketcap.com/',
};

axios.post("https://api.scraperbox.com/scrape",options)
.then((response) => {

  // Create the JSDom object
  const { document } = (new JSDOM(response.data)).window;

  
  const bnbElement = document.querySelector("#__next > div > div.sc-57oli2-0.dEqHl.cmc-body-wrapper > div > div > div.tableWrapper___3utdq.cmc-table-homepage-wrapper___22rL4 > table > tbody > tr:nth-child(3) > td:nth-child(4) > div > a");
  const btcElement = document.querySelector("#__next > div > div.sc-57oli2-0.dEqHl.cmc-body-wrapper > div > div > div.tableWrapper___3utdq.cmc-table-homepage-wrapper___22rL4 > table > tbody > tr:nth-child(1) > td:nth-child(4) > div > a");
  const xrpElement = document.querySelector("#__next > div > div.sc-57oli2-0.dEqHl.cmc-body-wrapper > div > div > div.tableWrapper___3utdq.cmc-table-homepage-wrapper___22rL4 > table > tbody > tr:nth-child(7) > td:nth-child(4) > div > a");
  const ltcElement =document.querySelector("#__next > div > div.sc-57oli2-0.dEqHl.cmc-body-wrapper > div > div > div.tableWrapper___3utdq.cmc-table-homepage-wrapper___22rL4 > table > tbody > tr:nth-child(8) > td:nth-child(4) > div > a");
  const linkElement=document.querySelector("#__next > div > div.sc-57oli2-0.dEqHl.cmc-body-wrapper > div > div > div.tableWrapper___3utdq.cmc-table-homepage-wrapper___22rL4 > table > tbody > tr:nth-child(9) > td:nth-child(4) > div > a");
  const ethElement= document.querySelector("#__next > div > div.sc-57oli2-0.dEqHl.cmc-body-wrapper > div > div > div.tableWrapper___3utdq.cmc-table-homepage-wrapper___22rL4 > table > tbody > tr:nth-child(2) > td:nth-child(4) > div > a");
  const xlmElement=document.querySelector("#__next > div > div.sc-57oli2-0.dEqHl.cmc-body-wrapper > div > div > div.tableWrapper___3utdq.cmc-table-homepage-wrapper___22rL4 > table > tbody > tr:nth-child(12) > td:nth-child(4) > div > a");
  
  
  price = btcElement.textContent.trim();
  priceText = parseFloat(price.replace(",","").replace("$",""));
  prices.push(BTC : ₹${priceText * 72.549});
  // console.log(BTC: ₹${priceText});

  price = ethElement.textContent.trim();
  priceText = parseFloat(price.replace(",","").replace("$",""))
  prices.push(ETH : ₹${Math.round(priceText * 72.549)});
  // console.log(ETH : ${priceText });

  price = bnbElement.textContent.trim();
  priceText = parseFloat(price.replace(",","").replace("$",""))
  prices.push(*BNB : ₹${priceText * 72.549}*);
  // console.log(BNB : ₹${priceText});

  price = ltcElement.textContent.trim();
  priceText = parseFloat(price.replace(",","").replace("$",""))
  prices.push(LTC : ₹${priceText * 72.549});
  // console.log(LTC : ₹${priceText * 72.549});

  price = linkElement.textContent.trim();
  priceText = parseFloat(price.replace(",","").replace("$",""))
  prices.push(LINK : ₹${priceText * 72.549});
  // console.log(LINK : ₹${priceText});

  price = xrpElement.textContent.trim();
  priceText = parseFloat(price.replace(",","").replace("$",""))
  prices.push(XRP : ₹${priceText * 72.549});
  // console.log(XRP : ₹${priceText});

  // price = xlmElement.textContent.trim();
  // priceText = parseFloat(price.replace(",","").replace("$",""))
  // console.log(XLM : Rupee ${priceText});
  
  bot.use((ctx) => {
    prices.forEach(price => ctx.reply(price))
  })
bot.launch();
})