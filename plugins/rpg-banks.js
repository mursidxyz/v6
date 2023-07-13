let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  let { key } = await conn.sendMessage(m.chat, {text: 'Sedang Memuat Bank...'})
  
  const caption = `
⛊「 *B A N K  U S E R* 」
│ 📛 *Name:* ${user.registered ? user.name : conn.getName(m.sender)}
│ 💳 *Atm:* ${user.atm > 0 ? 'Level ' + user.atm : '✖️'}
│ 🏛️ *Bank:* ${user.bank} 💲 / ${user.fullatm} 💲
│ 💹 *Money:* ${user.money} 💲
│ 🤖 *Robo:* ${user.robo > 0 ? 'Level ' + user.robo : '✖️'}
│ 🌟 *Status:* ${user.premiumTime > 0 ? 'Premium' : 'Free'}
│ 📑 *Registered:* ${user.registered ? 'Yes':'No'}
╰──┈┈⭑
${wm}
`.trim()
await conn.sendMessage(m.chat, {text: `${caption}`, edit: key})
}
handler.help = ['bank']
handler.tags = ['rpg']
handler.command = /^(bank((total)?|cek)|cekbank)$/i

handler.register = false
module.exports = handler