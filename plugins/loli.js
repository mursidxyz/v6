const axios = require('axios');
var handler = async (m, { conn, args, usedPrefix, command }) => {
    m.reply(wait);
    let url = `https://free.api-kyouka.my.id/api/randomimage/loli`;
    conn.sendFile(m.chat, url, "", "", m);
}
handler.help = ['loli']
handler.tags = ['anime']
handler.command = /^(loli)$/i
handler.limit = true;
module.exports = handler;