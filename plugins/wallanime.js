const axios = require('axios');
var handler = async (m, { conn, args, usedPrefix, command }) => {
    m.reply(wait);
    let url = `https://free.api-kyouka.my.id/api/randomimage/uniform`;
    conn.sendFile(m.chat, url, "", "Random wallpaper anime", m);
}
handler.help = ['wallanime']
handler.tags = ['anime']
handler.command = /^(wallanime)$/i
handler.limit = true;
module.exports = handler;