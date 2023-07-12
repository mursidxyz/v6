const axios = require('axios');
var handler = async (m, { conn, args, usedPrefix, command }) => {
    m.reply(wait);
    let url = `https://api.zahwazein.xyz/api/morensfw/ahegao?apikey=zenzkey_669bfd8d39`;
    conn.sendFile(m.chat, url, "", "", m);
}
handler.help = ['ahegao']
handler.tags = ['premium']
handler.command = /^(ahegao)$/i
handler.limit = true;
handler.premium = true;
module.exports = handler;