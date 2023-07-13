let handler = async (m, { conn, participants, groupmetadata }) => {
m.reply(m.chat ,` *Nama Group:* ${await
conn.getName(m.chat)}`, m)
}
handler.help = ['ceknamegc']
handler.tags = ['group']
handler.command = /^(cekname(group|gc))$/i

module.exports = handler