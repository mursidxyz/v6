let handler = async (m, { conn }) => {

    let wm = global.wm

    let _uptime = process.uptime() * 1000

    let uptimex = clockString(_uptime)

    let tio = `

tag : ${m.sender.replace(/@.+/, '')}\nowner : mrsd\nmode : ${global.opts['self'] ? 'private' : 'publik'}\naktif : ${uptimex}\npengguna : ${Object.keys(global.db.data.users).length}\npengguna terbanned : ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}\nfitur digunakan : ${Object.entries(db.data.stats).length}\nnama bot : ${conn.user.name}\ntotal fitur : jumlah fitur 605

    `.trim()

conn.sendFile(m.chat, `https://telegra.ph/file/de816f625ae21e7702b06.png`, null, tio, m)

}

handler.help = ['mode']

handler.tags = ['main']

handler.customPrefix = /^(mode)$/i 

handler.command = new RegExp

handler.limit = false

module.exports = handler

function clockString(ms) {

    let days = Math.floor(ms / (24 * 60 * 60 * 1000));

    let daysms = ms % (24 * 60 * 60 * 1000);

    let hours = Math.floor((daysms) / (60 * 60 * 1000));

    let hoursms = ms % (60 * 60 * 1000);

    let minutes = Math.floor((hoursms) / (60 * 1000));

    let minutesms = ms % (60 * 1000);

    let sec = Math.floor((minutesms) / (1000));

    return days + " hari " + hours + " jam " + minutes + " menit " + sec + " detik";

    
