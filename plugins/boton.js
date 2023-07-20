let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply('*berhasil menghidupkan мυʀѕι∂ вσт-χмℓ*')
}


handler.tags = ['owner']
handler.command = /^(boton)$/i

handler.group = true
handler.admin = true

module.exports = handler
