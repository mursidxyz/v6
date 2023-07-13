let fs = require('fs')
let handler = async (m, { conn }) => {
//FAKEREPLY KONTAK
 const fcon = {
	 key:
	 { fromMe: true,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "contactMessage": { "title":"sri","h": `haloo`, 'jpegThumbnail': 'https://pixiv.lolhuman.xyz/c/600x1200_90/img-master/img/2023/07/10/21/11/08/109801594_p0_master1200.jpg'}}
	}
conn.reply(m.chat, 'tes fcon:v', fcon) 
}
handler.help = ['ytowner']
handler.tags = ['main']
handler.command = /^(ytowner)$/i

module.exports = handler