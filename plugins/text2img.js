var fetch = require("node-fetch");
let handler = async (m, { 
conn, 
args 
}) => {
   response = args.join(',  ').split(',')
  if (!args[0]) throw 'Masukkan Text\nContoh : .text2img Loli hijab'
  m.reply('_Proses..._')
  var tio = `https://xzn.wtf/api/text-to-image?text=${response[0]}&apikey=akiraa`
  conn.sendFile(m.chat, tio, 'loliiiii.jpg', wm, m, false)
};
handler.command = handler.help = ['text2img'];
handler.tags = ['maker'];
module.exports = handler;