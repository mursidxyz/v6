let handler = async m => {

let krtu = `web`
let reply = `
┌─「 *BIG THANKS TO* 」
│⬡ Allah SWT
│⬡ Adiwajshing
│⬡ Nurutomo 
│⬡ Istikmal
│⬡ Ariffb as stikerin
│⬡ TioXd 
│⬡ Aguz Familia 
│⬡ Ziv San 
│⬡ The.sad.boy01 
│⬡ Lann
│⬡ Dannlonely
│⬡ Mark 
│⬡ Fatur (Ftwrr)
│⬡ Bang Syaii
│⬡ Zxoo Store 
│⬡ Rasell Comel
│⬡ Haori
│⬡ Zeeone ofc
│⬡ Nayla Hanifah
│⬡ Rasel
│⬡ Aca Mirabel
│⬡ Elyas
│⬡ AlyaaXyz
│⬡ Amirul Dev
│⬡ Xzn Senpai
│⬡ Xyoorie
│⬡ Syahrul
│⬡ Xteam
│⬡ Zek
│⬡ Baka Botz
│⬡ Vanessa Desu
│⬡ ZIRO-MD
│⬡ Aniq12
│⬡ Krizyn_ofc
│⬡ Mursid S 
│⬡ PENYEDIA LAYANAN MODULE
│⬡ PENYEDIA  LAYANAN APi
│⬡ ALL CREATOR 
│⬡ PENGGUNA BOT
│⬡ PARA DONATUR
└───────────•
`
conn.relayMessage(m.chat, {
  extendedTextMessage:{
                text: reply, 
                contextInfo: {
                     externalAdReply: {
                        title: 'Akiraabotz multi device',
                        mediaType: 1,
                        previewType: 0,
                        renderLargerThumbnail: true,
                        thumbnailUrl: 'https://telegra.ph/file/d6202dfdc68e72b669631.jpg',
                        sourceUrl: 'https://chat.whatsapp.com/FmhN8kxZf9f9qjkCZCBF97'
                    }
                }, mentions: [m.sender]
}}, {})
}
handler.command = /^(tqto)/i

module.exports = handler