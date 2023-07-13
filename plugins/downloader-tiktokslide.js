let fetch = require ("node-fetch")

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) throw "Masukan URL TikTok!!"
  let res = await (await fetch(`http://api.arifzyn.com/api/download/tiktok?url=${text}&apikey=ArifzynXD`)).json()
  await m.reply(`Wait, sending ${res.result.photo.length} image`)
  for (let imgs of res.result.photo) {
    conn.sendFile(m.chat, imgs.url, "img.jpg", "Done ✓", m)
  }
}
handler.help = ["tiktokslice"]
handler.tags = ["downloader"]
handler.command = ["tiktokslice"]

module.exports = handler