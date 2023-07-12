var fetch = require('node-fetch');
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Halo Simi `
  var apii = await fetch(`https://api.lolhuman.xyz/api/simi?apikey=sgwn&text=${text}&badword=true}`)
  var js = await apii.json()
  await m.reply(js.result)
}      
handler.command = handler.help = ['simi','chatbot'];
handler.tags = ['info'];
handler.premium = false
module.exports = handler;