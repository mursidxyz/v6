let fetch = require('node-fetch')
let uploadImage = require('../lib/uploadImage.js')

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar dengan caption .greyscale'
m.reply('Tunggu Sebentar...')
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://api.zahwazein.xyz/photoeditor/greyscale?url=${url}&apikey=zenzkey_669bfd8d39`)).buffer()
await conn.sendFile(m.chat, hasil, '', '2023 © Akiraa-MD', m)
	
}
handler.help = ['greyscale']
handler.tags = ['maker']
handler.command = /^(greyscale|abuabu)$/i
handler.limit = true;

module.exports = handler