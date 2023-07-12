let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *Sukses Menghidupkan ! AkiraaBot 🤖* ')
}


handler.tags = ['owner']
handler.command = /^(boton)$/i

handler.group = true
handler.admin = true

module.exports = handler