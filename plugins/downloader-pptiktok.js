let fetch = require ('node-fetch')
let handler = async (m, { conn, args, text }) => {
if (!text) throw '*[❗INFO❗] Masukan Nama User Tiktok Yang Ingin Diambil Fotonya*'
let res = `https://api.lolhuman.xyz/api/pptiktok/${text}?apikey=sgwn`
conn.sendFile(m.chat, res, 'error.jpg', `*[ ✔ ] Sukses Mengambil Foto User ${text}*`, m, false)
}
handler.help = ['pptiktok'].map(v => v + ' <user>')
handler.tags = ['downloader']
handler.command = /^(pptiktok)|ptik)|t(ik(tokp(rofile|p)|pp)|tp(rofile|p)))$/i
module.exports = handler