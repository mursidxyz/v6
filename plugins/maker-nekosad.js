var fetch = require("node-fetch");
let handler = async (m, { 
conn, 
args 
}) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text\nContoh : .nekosad BANGSYAII|SAD'
  m.reply('_Proses..._')
  var tio = `https://web.api-kyouka.my.id/api/other/maker/logo1?apikey=ddM4Eb4UeJ&text1=${response[0]}&text2=${response[1]}`
  conn.sendFile(m.chat, tio, 'loliiiii.jpg', wm, m, false)
};
handler.command = handler.help = ['nekosad'];
handler.tags = ['maker'];
module.exports = handler;