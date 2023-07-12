const axios = require('axios');
var handler = async (m, { conn, args, usedPrefix, command }) => {
    m.reply(wait);
    let url = `https://api.zahwazein.xyz/randomanime/v2/ana?apikey=zenzkey_ab72cdd5af82`;
    conn.sendFile(m.chat, url, "", "", m);
}
handler.help = ['anna']
handler.tags = ['anime']
handler.command = /^(anna)$/i
handler.limit = true;
module.exports = handler;