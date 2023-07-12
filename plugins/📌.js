let handler = async (m, { teks, conn, isOwner, isAdmin, args }) => {
	if (!(isAdmin || isOwner)) {
                global.dfail('admin', m, conn)
                throw false
                }
  let ownerGroup = m.chat.split`-`[0] + "@s.whatsapp.net";
  if(m.quoted){
if(m.sender === ownerGroup || m.sender === conn.user.jid) return;
let usr = m.sender;
let nenen = await conn.groupParticipantsUpdate(m.chat, [usr], "promote"); return;
if (nenen) m.reply(`sukses promote @${user.split('@')[0]}!`);
}
  if (!m.mentionedJid[0]) throw `tag yang mau dinaikan jabatannya`;
  let users = m.mentionedJid.filter(
    (u) => !(u == ownerGroup || u.includes(conn.user.jid))
  );
  for (let user of users)
    if (user.endsWith("@s.whatsapp.net"))
      await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote");
};

handler.help = ['📌']
handler.tags = ['group', 'owner']
handler.command = /^(📌)$/i

handler.group = true
handler.botAdmin = false
handler.admin = false
handler.owner = true
handler.fail = null

module.exports = handler