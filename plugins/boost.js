let { performance } = require('perf_hooks')

let handler = async (m, { conn }) => {

 let start = `tunggu sedang dipercepat...`
 let boost = `${pickRandom(['[▒▒▒▒▒▒▒▒▒▒]'])}`
 let boost2 = `${pickRandom(['[█▒▒▒▒▒▒▒▒▒]','[██▒▒▒▒▒▒▒▒]'])}`
 let boost3 = `${pickRandom(['[██▒▒▒▒▒▒▒▒]','[███▒▒▒▒▒▒▒▒]','[████▒▒▒▒▒▒▒]'])}`
 let boost4 = `${pickRandom(['[█████▒▒▒▒▒▒▒]','[██████▒▒▒▒▒▒]','[███████▒▒▒▒]'])}`
 let boost5 = `${pickRandom(['[██████████▒▒▒]','[████████████▒]'])}`
 let boost6 = `${pickRandom(['*Conection Lost...*','[████████████▒]','[█▒▒▒▒▒▒▒▒▒]'])}`
 let boost7 = `${pickRandom(['[██████████▒▒▒]','[████████████▒]','[████████████]'])}`

 let { key } = await conn.sendMessage(m.chat, {text: `${start}`})
await conn.sendMessage(m.chat, {text: `${boost}`, edit: key})
 await conn.sendMessage(m.chat, {text: `${boost2}`, edit: key})
await conn.sendMessage(m.chat, {text: `${boost3}`, edit: key})
await conn.sendMessage(m.chat, {text: `${boost4}`, edit: key})
await conn.sendMessage(m.chat, {text: `${boost5}`, edit: key})
await conn.sendMessage(m.chat, {text: `${boost6}`, edit: key})
await conn.sendMessage(m.chat, {text: `${boost7}`, edit: key})
   let old = performance.now()
   let neww = performance.now()
   let speed = `${neww - old}`
   let finish = `*${conn.user.name} berhasil dipercepat dengan kecepatan ${speed} detik*`
await conn.sendMessage(m.chat, {text: `${finish}`, edit: key})
}
handler.help = ['boost', 'refresh']
handler.tags = ['info']
handler.command = /^boost|refresh/i

handler.rowner = true 


handler.fail = null
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
