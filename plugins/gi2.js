let fetch = require('node-fetch');
let handler = async (m, { 
conn, 
args 
}) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'masukkan text\ncontoh : .pixiv vtuber'
  m.reply('_proses..._')
  let res = await fetch(`https://api.lolhuman.xyz/api/genshin/${response[0]}?apikey=sgwn`)
let _result
try{
_result = await res.json()
} catch(e){console.log(e)}

let { status, result } = _result
if(status !=200) { m.reply('eror'); return }

let random = math.floor(math.random() * result.length)
let file = result[random]
  conn.sendfile(m.chat, file.cover1 'pixiv.jpg', file.title, m)
};
handler.command = handler.help = ['gi2'];
handler.tags = ['internet'];
module.exports = handler;