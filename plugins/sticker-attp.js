var { 
sticker5 
} = require('../lib/sticker')
var fs = require('fs')
var handler = async (m, {
 conn, 
 args, 
 text, 
 usedPrefix, 
 command
 }) => {
    text = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.quoted && m.quoted.caption ? m.quoted.caption : m.quoted && m.quoted.description ? m.quoted.description : ''
    if (!text) throw `Example : ${usedPrefix + command} Lagi Ruwet`
    const res = `https://api.lolhuman.xyz/api/attp?apikey=sgwn&text=${encodeURIComponent(text.substring(0, 151))}`
    var error = (`https://telegra.ph/file/12141dd462ecabeed1347.png`)
    try {
        if (command == 'attp' || command == 'attp') {
            var stiker = await sticker5(res, { packname })
            await conn.sendFile(m.chat, stiker, 'emror.webp', '', m)
        }
    } catch (e) {
        console.log(e)
        await conn.sendFile(m.chat, error, 'error.webp', '', m)
    }
}

handler.command = handler.help = ['attp']
handler.tags = ['sticker']
handler.limit = true
module.exports = handler