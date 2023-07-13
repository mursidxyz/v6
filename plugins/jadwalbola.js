let fetch = require('node-fetch')
let handler = async (m, { conn, command }) => {
  let res = await fetch('https://api.lolhuman.xyz/api/jadwalbola?apikey=sgwn')
  if (res.status != 200) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
m.reply(` *⚽JADWAL BOLA⚽*

_*${json.data.match}*_
⏲️Waktu: _${json.data[0].time}_
📺Channel tv: ${json.data[0].tv}

_*${json.data[1].kickoff}*_
⏲️Waktu: _${json.data[1].time}_
📺Channel tv: ${json.data[1].tv}

_*${json.data[2].match}*_
⏲️Waktu: _${json.data[2].time}_
📺Channel tv: ${json.data[2].tv}

_*${json.data[3].match}*_
⏲️Waktu: _${json.data[3].time}_
📺Channel tv: ${json.data[3].tv}

_*${json.data[4].match}*_
⏲️Waktu: _${json.data[4].time}_
📺Channel tv: ${json.data[4].tv}
`)

}
handler.help = ['jadwalbola']
handler.tags = ['internet']
handler.command = /^jadwalbola$/i
handler.limit = true


module.exports = handler