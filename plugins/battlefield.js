var fetch = require("node-fetch");
let handler = async (m, { 
conn, 
args 
}) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text\nContoh : .battlefield AkiraaBot'
  m.reply('_Proses..._')
  var tio = `https://api.lolhuman.xyz/api/photooxy/battlefield4?apikey=sgwn&text=${response[0]}`
  conn.sendFile(m.chat, tio, 'loliiiii.jpg', wm, m, false)
};
handler.command = handler.help = ['battlefield'];
handler.tags = ['maker'];
module.exports = handler;