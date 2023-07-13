let handler = async (m, { conn, args, usedPrefix }) => {
    if (args.length > 0) {
        let mention = args[0].replace(/[@.+-]/g, '').replace(' ', '')
        let ban = m.mentionedJid[0] || m.quoted.sender || conn.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || ''
        let warning = global.db.data.users[ban].warn
        if (warning < 5) {
            global.db.data.users[ban].warn+= 1
            m.reply(`*berhasil Warn!*`)
            conn.reply(ban, '*Kamu di warn oleh moderator, dan sekarang kamu punya ' + (warning + 1) + ' warn. Ingat Jika kamu mendapat warn 5 kali kamu akan otomatis ke banned*', null)
        } else if (warning == 5) {
            global.db.data.users[ban].banned = true
            global.db.data.users[ban].warn = 0
            m.reply('*Dia sudah kebanned, karena mendapatkan 5 warn*')
            //conn.sendButton(ban, hiasan, '*Kamu ke banned karena telah mendapatkan 5 kali warning*', thumbBanned, [['Owner', usedPrefix + 'owner']], null)
        }
    } else conn.reply(m.chat, '*Siapa yang mau di Warn?\nTag orangnya*', m)
}
handler.help = ['warn @tag']
handler.tags = ['owner']
handler.command = /^warn$/i
handler.mods = true
handler.group = true

module.exports = handler