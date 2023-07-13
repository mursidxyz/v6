var fetch = require("node-fetch");
let handler = async (m, { 
conn, 
args 
}) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text\nContoh : .lolimaker BOTCAHX'
  m.reply('_Proses..._')
  var tio = `https://web.api-kyouka.my.id/api/other/maker/loli?apikey=ddM4Eb4UeJ&name=${response[0]}`
  conn.sendFile(m.chat, tio, 'loliiiii.jpg', wm, m, false)
};
handler.command = handler.help = ['lolimaker'];
handler.tags = ['maker'];
module.exports = handler;