const fetch = require("node-fetch");

const handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `Masukkan Link\n\nContoh :\n${usedPrefix + command} https://vt.tiktok.com/ZSNv4wgXN/`;
  if (!args[0].match(/tiktok/gi)) throw `link tidak ditemukan!`;
    const arr = [
    { text: "[▒▒▒▒▒▒▒▒▒▒]", timeout: 10 },
    { text: "[█▒▒▒▒▒▒▒▒▒]", timeout: 10 },
    { text: "[██▒▒▒▒▒▒▒▒]", timeout: 10 },
    { text: "[███▒▒▒▒▒▒▒]", timeout: 10 },
    { text: "[████▒▒▒▒▒▒]", timeout: 10 },
    { text: "[█████▒▒▒▒▒]", timeout: 10 },
    { text: "[██████▒▒▒▒]", timeout: 10 },
    { text: "[███████▒▒▒]", timeout: 10 },
    { text: "[████████▒▒]", timeout: 10 },
    { text: "[█████████▒]", timeout: 10 },
    { text: "[██████████]", timeout: 10 },
    { text: `*berhasil mendapatkan media*\n*video akan segara di kirim*`, timeout: 10 }
  ];

  const lll = await conn.sendMessage(m.chat, { text: wait }, { quoted: m });

  for (let i = 0; i < arr.length; i++) {
    await new Promise(resolve => setTimeout(resolve, arr[i].timeout));
    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key: lll,
        type: 14,
        editedMessage: {
          conversation: arr[i].text
        }
      }
    }, {});
  };  
		const url = args[0];
		const apis = await fetch(`https://skizo.tech/api/tiktok?url=${args[0]}&apikey=${xznkey}`);
		
var json = await apis.json()
if(json.msg != "success") throw "error"
var { 
play, 
wmplay, 
region,
title,
duration,
music
} = json.data
await conn.sendFile(m.chat, play, 'tiktok.mp4', `*Deskripsi Video* : ${title}\n*Username Creator* : ${region}\n*Durasi Video* : ${duration} detik\n*Powered* : ${conn.user.name}`, m)
await conn.sendFile(m.chat, music, 'error.mp3', null, m, true)
await conn.sendFile(m.chat, wmplay, 'error.mp4', `*ini video yang pakai watermark tiktok*`, m)
};
handler.help = ['tiktok']
handler.command = /^(tiktok|tt|tiktokdl|tiktoknowm|dlttwm)$/i
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
