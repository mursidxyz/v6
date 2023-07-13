const axios = require('axios');
var handler = async (m, { conn, args, usedPrefix, command }) => {
    m.reply(wait);
    let url = `https://api.zahwazein.xyz/api/anime/sfw/fox_girl?apikey=zenzkey_669bfd8d39`;
    conn.sendFile(m.chat, url, "", "", m);
}
handler.help = ['foxgirl']
handler.tags = ['anime']
handler.command = /^(foxgirl)$/i
handler.limit = true;
module.exports = handler;