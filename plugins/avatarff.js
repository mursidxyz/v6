var fetch = require("node-fetch");
let handler = async (m, { 
conn, 
args 
}) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text\nContoh : .avatarff DJ ALOK RIMEK'
  m.reply('_Proses..._')
  var tio = `https://api.lolhuman.xyz/api/ephoto1/freefire?apikey=sgwn&text=${response[0]}`
  conn.sendFile(m.chat, tio, 'loliiiii.jpg', wm, m, false)
};
handler.command = handler.help = ['avatarff'];
handler.tags = ['maker'];
module.exports = handler;