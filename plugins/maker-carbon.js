var fetch = require("node-fetch");
let handler = async (m, { 
conn, 
args 
}) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text\nContoh : .carbon ah ah ah'
  m.reply('_Proses..._')
  var tio = `https://api.lolhuman.xyz/api/carbon?apikey=sgwn&code=${response[0]}&language=python`
  conn.sendFile(m.chat, tio, 'loliiiii.jpg', wm, m, false)
};
handler.command = handler.help = ['carbon'];
handler.tags = ['maker'];
module.exports = handler;