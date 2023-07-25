const https = require('https');

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) {
      throw `Masukan URL!\n\ncontoh :\n${usedPrefix + command} https://vm.tiktok.com/ZGJAmhSrp/`
    }
try {
    if (!args[0].match(/tiktok/gi)) {
      throw `URL tidak ditemukan!`
    }
    m.reply('*Loading...*')
    const api = await https.get(`https://api.betabotz.org/api/download/tiktok?url=${args[0]}&apikey=${kasan}`, response => {
      let data = '';
      response.on('data', chunk => {
        data += chunk;
      });
      response.on('end', async () => {
        const res = JSON.parse(data);
        var { 
          video, 
          video2, 
          username,
          description,
          audio
        } = res.result
        conn.sendFile(m.chat, video, null, `username : ${username}\ndeskripsi : ${description}\naudio : ${audio}`, m);
      });
    }).on('error', error => {
      console.log(error);
      throw error.message
    });
  } catch (e) {
    console.log(e)
    throw `terjadi kesalahan saat mengambil link`
  }
};

handler.help = ['tiktok'];
handler.command = /^(tiktok|tt|tiktokdl|tiktoknowm)$/i
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
