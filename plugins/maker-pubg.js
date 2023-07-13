var fetch = require("node-fetch");
let handler = async (m, { 
conn, 
args 
}) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text\nContoh : .pubg Akiraabot|Multi battleground'
  m.reply('_Proses..._')
  var tio = `https://api.lolhuman.xyz/api/photooxy2/pubg?apikey=sgwn&text1=${response[0]}&text2=${response[1]}`
  conn.sendFile(m.chat, tio, 'loliiiii.jpg', wm, m, false)
};
handler.command = handler.help = ['pubg'];
handler.tags = ['maker'];
module.exports = handler;