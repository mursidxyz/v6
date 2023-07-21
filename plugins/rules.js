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
conn.reply(m.chat, 'Kebijakan privasi мυʀѕι∂ вσт-χмℓ\n1. Bot tidak akan merekam data riwayat chat user.
2. Bot tidak akan menyebarkan nomor users.
3. Bot tidak akan menyimpan media yang dikirimkan oleh users.
4. Bot tidak akan menyalah gunakan data data users.
5. Owner berhak melihat data riwayat chat users.
6. Owner berhak melihat status users.
7. Owner dapat melihat riwayat chat, dan media yang dikirimkan users.\n
Peraturan мυʀѕι∂ вσт-χмℓ 
1. Users dilarang menelpon maupun memvideo call nomor bot.
2. Users dilarang mengirimkan berbagai bug, virtex, dll ke nomor bot.
3. Users diharap tidak melakukan spam dalam penggunaan bot.
4. Users dilarang menambahkan nomor bot secara illegal, untuk menambahkan silahkan hubungi owner.
5. Users diharap untuk tidak menyalah gunakan fitur fitur bot.
6. Dilarang keras menggunakan fitur bot 18+\n
Syarat Ketentuan мυʀѕι∂ вσт-χмℓ 
1. Bot akan keluar dari group apabila sudah waktunya keluar.
2. Bot dapat mem-ban users secara sepihak terlepas dari users salah atau tidak.
3. Bot *tidak akan bertanggungjawab atas apapun yang users lakukan terhadap fitur bot.*
4. Bot akan memberlakukan hukuman: block atau ban terhadap users yang melanggar peraturan.
5. Bot bertanggung jawab atas kesalahan fatal dalam programing maupun owner.\n
*BIG THANKS TO*
• Allah SWT
• Nurutomo
• Ariffb
• Istikmal
• Aguz Familia
• Syahrul
• Amirul Dev
• Nayla Cans
• Ziv San
• BOTCAHX
• The.sad.boy01
• Bang Syaii
• Wulan Pedia
• Mursid S', fcon) 
}
handler.help = ['rules']
handler.tags = ['main']
handler.command = /^(rules)$/i

module.exports = handler
