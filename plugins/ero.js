const axios = require('axios');
var handler = async (m, { conn, args, usedPrefix, command }) => {
    m.reply(wait);
    let url = `https://api.zahwazein.xyz/api/morensfw/ero?apikey=zenzkey_669bfd8d39`;
    conn.sendFile(m.chat, url, "", "", m);
}
handler.help = ['ero']
handler.tags = ['premium']
handler.command = /^(ero)$/i
handler.limit = true;
handler.premium = true;
module.exports = handler;