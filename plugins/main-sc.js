let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, pickRandom(stikercute), m, { packname: "gbole", author: "ig : mursid.st" })
}

handler.tags = ['main']
handler.command = /^(script|sc)$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let stikercute = [
 "https://telegra.ph/file/e64f557d9bc4e09bd92b0.jpg",//panda1
 "https://telegra.ph/file/05df0dd83a15e04b95fdc.jpg",//panda2
 "https://telegra.ph/file/7dd6a557da4c3958db991.jpg",//panda3
