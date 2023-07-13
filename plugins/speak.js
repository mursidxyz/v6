let handler = async (m, { conn, command }) => {
let audio = `https://api.shinoa.xyz/api/ai/voicevox?text=konichiwa%20sensei&speaker=2&pitch=0&scale=1&speed=1&apikey=f7bb5f42`
await conn.sendFile(m.chat, audio, 'error.mp3', null, m, true)
}

handler.help = ['speak']
handler.tags = ['internet']
handler.command = /^(speak)$/i
handler.limit = 10
module.exports = handler