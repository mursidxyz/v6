const axios = require('axios');
var handler = async (m, { conn, args, usedPrefix, command }) => {
    m.reply(wait);
    let url = `https://free.api-kyouka.my.id/api/randomimage/marin-kitagawa`;
    conn.sendFile(m.chat, url, "", "", m);
}
handler.help = ['marin']
handler.tags = ['anime']
handler.command = /^(marin)$/i
handler.limit = true;
module.exports = handler;