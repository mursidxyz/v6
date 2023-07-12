let fs = require ('fs')
let fetch = require ('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
let res = await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/random.txt')
let txt = await res.text()

let arr = txt.split('\n')
let cita = arr[Math.floor(Math.random() * arr.length)]
  await.connSendFile(m.chat, cita, 'nih kak', wm, m)
}
handler.tags = ['anime']
handler.help = ['randomanime']
handler.command = /^(randomanime|animerandom)$/i

handler.register = true
handler.limit = true

module.exports = handler