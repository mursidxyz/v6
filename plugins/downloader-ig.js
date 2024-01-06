var fetch = require("node-fetch");
var handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `Masukan URL!\n\ncontoh:\n${usedPrefix + command} https://www.instagram.com/reel/C031H2VhbFF/?igsh=Zjg5dGIxa3YwYTBq`;
  try {
    m.reply('*tunggu sebentar..*');
const url = args[0];
const get = await fetch(`https://api.lolhuman.xyz/api/Instagram?apikey=sgwn&url=${url}`);
var js = await get.json()   
conn.sendFile(m.chat, js.result[0], 'fb.mp4', '', m);
  } catch (e) {
    console.log(e);
    if (m.sender) {
      conn.reply(m.chat, `*terjadi kesalahan!*`, m);
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
