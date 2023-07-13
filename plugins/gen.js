let fetch = require('node-fetch');
let handler = async (m, { 
conn, 
args 
}) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text\nContoh : .pixiv Vtuber'
  m.reply('_Proses..._')
  let res = await fetch(`https://api.xyroinee.xyz/api/others/chargi?q=${response[0]}&apikey=2pTTdQZvVR`)
let _result
try{
_result = await res.json()
} catch(e){console.log(e)}

let { code, data } = _result
if(code !=200) { m.reply('eror'); return }

let random = Math.floor(Math.random() * result.length)
let file = data{random}
  conn.sendFile(m.chat, file.images{cover1}, 'pixiv.jpg', file.name, m)
};
handler.command = handler.help = ['gen'];
handler.tags = ['internet'];
module.exports = handler;