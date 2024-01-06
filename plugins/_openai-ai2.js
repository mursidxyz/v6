var fetch = require('node-fetch');
var util = require('util');
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `masukkan pertanyaan!\n\n*Contoh :* siapa kamu? `
//Set Logic Disini 
let logic = 'hai saya мυʀѕι∂ вσт-χмℓ adalah bot whatsapp yang di bangun, menggunakan node-js dengan menggunakan server yang sangat kencang tapi tidak terlalu kencang banget.'
await m.reply(wait)
  var js = await fetch(API('lann', '/api/search/openai-logic', { text: `${text}`, logic: `${logic}`, apikey: lann }))
var json = await js.json()
try {
  await m.reply(json.message)
} catch (err ) {
m.reply(util.format(json))
}}
handler.command = handler.help = ['ai2','openai2','chatgpt2'];
handler.tags = ['info'];
handler.premium = false
module.exports = handler;
