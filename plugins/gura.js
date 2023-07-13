const axios = require('axios');
var handler = async (m, { conn, args, usedPrefix, command }) => {
    m.reply(wait);
    let url = `https://api.betabotz.org/api/sticker/gura?apikey=Akiraabotz`;
    conn.sendFile(m.chat, url, "", "", m);
}
handler.help = ['gura']
handler.tags = ['image']
handler.command = /^(gura)$/i
handler.limit = true;
module.exports = handler;