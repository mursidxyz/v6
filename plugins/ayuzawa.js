const axios = require('axios');
var handler = async (m, { conn, args, usedPrefix, command }) => {
    m.reply(wait);
    let url = `https://api.zahwazein.xyz/randomanime/v2/ayuzawa?apikey=zenzkey_ab72cdd5af82`;
    conn.sendFile(m.chat, url, "", "", m);
}
handler.help = ['ayuzawa']
handler.tags = ['anime']
handler.command = /^(ayuzawa)$/i
handler.limit = true;
module.exports = handler;