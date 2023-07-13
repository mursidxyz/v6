let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text\nContoh: 083842839555|Akiraa-MD|Pacitan, 02-07-2023|Laki-Laki|Kalimantan|02/02|Samarinda|Balikpapan|Islam|Belum Kawin|Nonton Anime|Jepang|Seumur Hidup|Jawa barat|Sukabumi'
  m.reply('Tunggu Sebentar...')
  let res = `https://api.lolhuman.xyz/api/ktpmaker?apikey=sgwn&nik=${response[0]}&prov=${response[1]}&kabu=${response[2]}&name=${response[3]}&ttl=abc&jk=${response[4]}&jl=${response[5]}&rtrw=${response[6]}&camat=${response[7]}&agama=${response[8]}& nikah=${response[9]}&kerja=${response[10]}&warga=${response[11]}&until=${response[12]}&img=https://telegra.ph/file/13d20b5f39f5e4cf1aaf2.jpg`
    conn.sendFile(m.chat, res, 'ktp.jpg', `Nih kak\n${global.wm}`, m, false)
}
handler.help = ['ktp'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(ktp)$/i
handler.limit = true

module.exports = handler