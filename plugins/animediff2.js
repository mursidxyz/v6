var fetch = require("node-fetch");
let handler = async (m, { 
conn, 
args 
}) => {
   response = args.join(',  ').split(',')
  if (!args[0]) throw 'Masukkan Text\nContoh : .animediff girl,white,hair'
  m.reply('_Proses..._')
  var tio = `https://api.xyroinee.xyz/api/ai/animediffusion?q=${response[0]}%20${response[1]},%20${response[2]}%20${response[3]},%20${response[4]}%20${response[5]},%20${response[6]},%20${response[7]},%20${response[8]}&apikey=2pTTdQZvVR`
  conn.sendFile(m.chat, tio, 'loliiiii.jpg', wm, m, false)
};
handler.command = handler.help = ['animediff2'];
handler.tags = ['maker'];
module.exports = handler;