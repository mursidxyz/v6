let fetch = require('node-fetch');
let handler = async (m, { 
conn, 
args 
}) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text\nContoh : .pixiv Vtuber'
  m.reply('_Proses..._')
  let res = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=sgwn&query=${response[0]}`)
let _result
try{
_result = await res.json()
} catch(e){console.log(e)}

let { status, result } = _result
if(status !=200) { m.reply('eror'); return }

let random = Math.floor(Math.random() * result.length)
let file = result[random]
  conn.sendFile(m.chat, file.preview_url, 'lagu.mp3', '', m, 0, { mimetype,: 'audio/mp4})
};
handler.command = handler.help = ['sp'];
handler.tags = ['internet'];
module.exports = handler;