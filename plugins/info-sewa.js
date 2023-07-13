let handler = async m => {

let krtu = `web`
let sewa = `
*_[PRICE OPEN SEWA BOT BY AKIRAA BOT]_*

📮harga:
5.000 = 7hari
10.000 = 30hari
30.000 = Permanent
________________________________

⚡Keuntungan:
•Bisa buat jaga Grup
•Bisa buat Ramein grup
•Buat bahan Gabut
•Buat Bersenang senang

FITUR
•WELCOME✅
•GOODBYE✅
•ANTILINK✅
•GAME✅
•RPG GAME ✅
DLL
_______________________________

📮 Minat Hubungi Nomor Owner dibawah:
wa.me/6283842839555

•Payment:
OVO
`
conn.relayMessage(m.chat, {
  extendedTextMessage:{
                text: sewa, 
                contextInfo: {
                     externalAdReply: {
                        title: 'Akiraabotz multi device',
                        mediaType: 1,
                        previewType: 1,
                        renderLargerThumbnail: false,
                        thumbnailUrl: 'https://telegra.ph/file/d6202dfdc68e72b669631.jpg',
                        sourceUrl: 'https://chat.whatsapp.com/FmhN8kxZf9f9qjkCZCBF97'
                    }
                }, mentions: [m.sender]
}}, {})
}
handler.help = ['Sewabot']
handler.tags = ['main']
handler.command = /^(sewabot|sewa)$/i

module.exports = handler