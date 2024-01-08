const fetch = require("node-fetch");

const handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `Masukkan link\n\nContoh :\n${usedPrefix + command} https://vt.tiktok.com/ZSNv4wgXN/`;
  if (!args[0].match(/tiktok/gi)) throw `link tidak ditemukan!`;
    const arr = [
    { text: "[0%▒▒▒▒▒▒▒▒▒▒▒▒]", timeout: 10 },
    { text: "[█10%▒▒▒▒▒▒▒▒▒▒]", timeout: 10 },
    { text: "[██20%▒▒▒▒▒▒▒▒▒]", timeout: 10 },
    { text: "[███30%▒▒▒▒▒▒▒▒]", timeout: 10 },
    { text: "[████40%▒▒▒▒▒▒▒]", timeout: 10 },
    { text: "[█████50%▒▒▒▒▒▒]", timeout: 10 },
    { text: "[██████60%▒▒▒▒▒]", timeout: 10 },
    { text: "[███████70%▒▒▒▒]", timeout: 10 },
    { text: "[████████80%▒▒▒]", timeout: 10 },
    { text: "[█████████90%▒▒]", timeout: 10 },
    { text: "[██████████100%]", timeout: 10 },
    { text: `*berhasil mendapatkan media*\n*video/media akan segara di kirim, mohon tunggu beberapa detik*`, timeout: 10 }
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
await conn.sendFile(m.chat, play, 'tiktok.mp4', `*Deskripsi* : ${title}\n*Username* : ${region}\n*Durasi* : ${duration} detik\n*powered* : ${conn.user.name}`, m)
await conn.sendFile(m.chat, music, 'error.mp3', null, m, true)
await conn.sendFile(m.chat, wmplay, 'error.mp4', `ig : @mursid.st\nini video yang pakai watermark`, m)
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
