const axios = require('axios');
var handler = async (m, { conn, args, usedPrefix, command }) => {
    m.reply(wait);
    let url = `https://api.xyroinee.xyz/api/asupan/video/random?apikey=2pTTdQZvVR`;
    conn.sendFile(m.chat, url, "", "", m);
}
handler.help = ['asupanvideo']
handler.tags = ['image']
handler.command = /^(asupanvideo)$/i
handler.limit = true;
handler.premium = true;
module.exports = handler;