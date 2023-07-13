const axios = require('axios');
var handler = async (m, { conn, args, usedPrefix, command }) => {
    m.reply(wait);
    let url = `https://api.zahwazein.xyz/randomasupan/notnot?apikey=zenzkey_669bfd8d39`;
    conn.sendFile(m.chat, url, "", "", m);
}
handler.help = ['notnot']
handler.tags = ['image']
handler.command = /^(notnot)$/i
handler.limit = true;
handler.premium = false;
module.exports = handler;