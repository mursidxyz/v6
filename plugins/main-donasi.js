let handler = async (m, { conn }) => {

let anu = `┌─「 *Donasi* 」─⬣
│ • Dana : 088233832771
│ • Gopay : 088233832771
│ • Ovo : 085962893638
└──⬣
┌─「 *NOTE* 」─⬣
│ > Ingin donasi? wa.me/6288233832771
│ _Untuk donasi qris bisa chat owner_
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa ada kendala sama sekali_
└──⬣`
  await conn.sendFile(m.chat, 'https://telegra.ph/file/b97155835b672935b7339.jpg', 'media.jpg', anu, m)
}
handler.help = ['donasi', 'donate']
handler.tags = ['xp', 'info']
handler.command = /^(donasi|donate)$/i

module.exports = handler
