const axios = require('axios');
var handler = async (m, { conn, args, usedPrefix, command }) => {
    m.reply(wait);
    let url = `https://api.zahwazein.xyz/api/morensfw/cum?apikey=zenzkey_669bfd8d39`;
    conn.sendFile(m.chat, url, "", "", m);
}
handler.help = ['cum']
handler.tags = ['premium']
handler.command = /^(cum)$/i
handler.limit = true;
handler.premium = true;
module.exports = handler;