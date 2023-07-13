var fetch = require("node-fetch");
let handler = async (m, { 
conn, 
args 
}) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Usrname dan Text\nContoh : .ytcomment botak kontl|bang syaii'
  m.reply('_Proses..._')
let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/320b066dc81928b782c7b.png')
  var tio = `https://api.zahwazein.xyz/creator/ytcomment?url=${pp}&text=${response[1]}&text2=${response[0]}&apikey=zenzkey_669bfd8d39`
  conn.sendFile(m.chat, tio, 'loliiiii.jpg', wm, m, false)
};
handler.command = handler.help = ['ytcomment'];
handler.tags = ['maker'];
module.exports = handler;