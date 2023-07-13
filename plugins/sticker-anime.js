var { 
sticker5 
} = require('../lib/sticker')
var handler = async (m, {
 conn, 
 command
 }) => {
    var error = (`https://telegra.ph/file/12141dd462ecabeed1347.png`)
    try {
        if (command == 'gura' || command == 'sgura') {
        const res = `https://api.betabotz.org/api/sticker/gura?apikey=Akiraabotz}`
            var stiker = await sticker5(res, { packname })
            await conn.sendFile(m.chat, stiker, 'emror.webp', '', m)
        }
        else if (command == 'anime' || command == 'sanime') {
        const res = `https://api.betabotz.org/api/sticker/anime?apikey=Akiraabotz}`
            var stiker = await sticker5(res, { packname })
            await conn.sendFile(m.chat, stiker, 'emror.webp', '', m)
        }
        else if (command == 'gojosatoru' || command ==
 'sgojo') {      
  const res = `https://api.betabotz.org/api/sticker/gojosatoru?apikey=Akiraabotz}`
            var stiker = await sticker5(res, { packname })
            await conn.sendFile(m.chat, stiker, 'emror.webp', '', m)
        }
        else if (command == 'doge' || command == 'sdoge') {
        const res = `https://api.botcahx.live/api/sticker/doge?apikey=${btc}`
            var stiker = await sticker5(res, { packname })
            await conn.sendFile(m.chat, stiker, 'emror.webp', '', m)
        }
        else if (command == 'manusialidi' || command == 'smanusialidi') {
        const res = `https://api.botcahx.live/api/sticker/manusialidi?apikey=${btc}`
            var stiker = await sticker5(res, { packname })
            await conn.sendFile(m.chat, stiker, 'emror.webp', '', m)
        }
    } catch (e) {
        console.log(e)
        await conn.sendFile(m.chat, error, 'error.webp', '', m)
    }
}

handler.command = handler.help = ['sgura',sanime',sgojo']
handler.tags = ['sticker']
handler.limit = true
module.exports = handler