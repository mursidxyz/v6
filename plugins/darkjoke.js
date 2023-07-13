const axios = require('axios');
var handler = async (m, { conn, args, usedPrefix, command }) => {
    m.reply(wait);
    let url = `https://api.zahwazein.xyz/randomimage/darkjoke?apikey=zenzkey_669bfd8d39`;
    conn.sendFile(m.chat, url, "", "", m);
}
handler.help = ['darkjoke']
handler.tags = ['image','internet']
handler.command = /^(darkjoke)$/i
handler.limit = true;
module.exports = handler;