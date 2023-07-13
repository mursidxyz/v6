const axios = require('axios');
var handler = async (m, { conn, args, usedPrefix, command }) => {
    m.reply(wait);
    let url = `https://free.api-kyouka.my.id/api/randomimage/raiden-shogun`;
    conn.sendFile(m.chat, url, "", "", m);
}
handler.help = ['raiden']
handler.tags = ['anime']
handler.command = /^(raiden)$/i
handler.limit = true;
module.exports = handler;