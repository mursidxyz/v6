const axios = require('axios');
var handler = async (m, { conn, args, usedPrefix, command }) => {
    m.reply(wait);
    let url = `https://free.api-kyouka.my.id/api/randomimage/oppai`;
    conn.sendFile(m.chat, url, "", "", m);
}
handler.help = ['oppai']
handler.tags = ['anime']
handler.command = /^(oppai)$/i
handler.limit = true;
module.exports = handler;