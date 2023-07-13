let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
let total = `📮TOTAL FITUR SAAT INI  *${totalf}*`
conn.relayMessage(m.chat, {
  extendedTextMessage:{
                text: total, 
                contextInfo: {
                     externalAdReply: {
                        title: 'Akiraabotz multi device',
                        mediaType: 1,
                        previewType: 1,
                        renderLargerThumbnail: true,
                        thumbnailUrl: 'https://telegra.ph/file/6e520b0b699d7068c8974.jpg',
                        sourceUrl: 'https://chat.whatsapp.com/FmhN8kxZf9f9qjkCZCBF97'
                    }
                }, mentions: [m.sender]
}}, {})
}

handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = ['totalfitur']
module.exports = handler