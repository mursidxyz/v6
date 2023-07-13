const axios = require('axios');
var handler = async (m, { conn, args, usedPrefix, command }) => {
    m.reply(wait);
    let url = `https://free.api-kyouka.my.id/api/randomimage/selfies`;
    conn.sendFile(m.chat, url, "", "", m);
}
handler.help = ['animerandom']
handler.tags = ['anime']
handler.command = /^(animerandom)$/i
handler.limit = true;
module.exports = handler;