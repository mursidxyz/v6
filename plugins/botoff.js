let handler = async (m, { participants }) => {
    // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isbanned = true
    m.reply(' *sukses mematikan bot 📴* ')
    // } else m.reply('ada nomor ownerku disini...')
}
handler.help = ['bptmode (on/off)']
handler.tags = ['owner']
handler.command = /^(botoff)$/i

handler.admin = true
handler.group = true

module.exports = handler