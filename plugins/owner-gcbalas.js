let fs = require ('fs')
let fetch = require ('node-fetch')

let handler = async(m, { conn, text, usedPrefix: _p }) => {
let [number, pesan, boddy] = text.split `|`

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

    if (!number) return conn.reply(m.chat, 'Silahkan masukan id grup yang akan dikirim', m)
    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya', m)
    if (text > 500) return conn.reply(m.chat, 'Teks Kepanjangan!', m)
    
    let user = global.db.data.users[m.sender]

    let korban = `${number}`
    var nomor = m.sender
    let spam1 = `「 EMIAL 」\n\nDari : Owner\nKe : ${korban}\nPesan : ${pesan}\n\n${global.wm}`

    conn.relayMessage(m.chat, {
  extendedTextMessage:{
                text: spam1, 
                contextInfo: {
                     externalAdReply: {
                        title: 'PESAN DARI OWNER',
                       body: '💌ada pesan nih dari owner',
                        mediaType: 1,
                        previewType: 1,
                        renderLargerThumbnail: true,
                        thumbnailUrl: 'https://telegra.ph/file/d6202dfdc68e72b669631.jpg',
                        sourceUrl: ''
                    }
                }, mentions: [${korban}]
}}, {})
{

    let logs = `[!] Berhasil mengirim pesan wa ke id grup ${korban}`
    conn.reply(m.chat, logs, m)
}}
handler.command = /^(gcpesan|gcbalas)$/i
handler.owner = true
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler