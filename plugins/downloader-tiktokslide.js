const fetch = require('node-fetch');
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) {
    throw `Masukkan URL!\n\ncontoh:\n${usedPrefix + command} https://vt.tiktok.com/ZSNbrfcGw/`;
  }
    if (!args[0].match(/tiktok/gi)) {
      throw `URL tidak ditemukan!`;
    }
    m.reply('*tunggu sedang diproses...*');
    try {
    const api = await fetch(`https://api.botcahx.eu.org/api/download/tiktokslide?url=${args[0]}&apikey=${btc}`);
    const res = await api.json();
    var {
      id, 
      region, 
      title,
      play
    } = res.result.data
    for (let i of res.result.data.images) {
    await sleep(3000)
    conn.sendFile(m.chat, i, null, `*Deskripsi :* ${title}\n*Server Region* : ${region}\n*ID :* ${id}\n*Audio :* ${play}`, m);
    conn.sendFile(m.chat, i, null, `${play}`, m)
        }
  } catch (e) {
    console.log(e);
    throw `*mohon maaf terjadi kesalahan!*`
  }
};
handler.command = handler.help = ['tiktokslide','ttslide','slide'];
handler.tags = ['downloader'];
handler.limit = true;
handler.group = false;
handler.premium = false;
handler.owner = false;
handler.admin = false;
handler.botAdmin = false;
handler.fail = null;
handler.private = false;

module.exports = handler
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
