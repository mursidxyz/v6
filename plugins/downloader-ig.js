var fetch = require("node-fetch");
var handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `Masukan URL!\n\ncontoh:\n${usedPrefix + command} https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link`;
  try {
    m.reply('*Please wait..*');
const url = args[0];
const get = await fetch(`https://api.lolhuman.xyz/api/Instagram?apikey=sgwn&url=${url}`);
var js = await get.json()   
conn.sendFile(m.chat, js.result[0], 'fb.mp4', '', m);
  } catch (e) {
    console.log(e);
    if (m.sender) {
      conn.reply(m.chat, `_*Terjadi kesalahan!*_`, m);
    }
  }
};
handler.help = ['ig'];
handler.command = /^(ig|igdl|Instagramdl|Instagram)$/i;
handler.tags = ['downloader'];
handler.limit = true;
handler.group = false;
handler.premium = false;
handler.owner = false;
handler.admin = false;
handler.botAdmin = false;
handler.fail = null;
handler.private = false;
module.exports = handler;