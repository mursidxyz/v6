let handler = async m => {

let krtu = `web`
let reply = `
┌─「 *BIG THANKS TO* 」
│⬡ Allah SWT
│⬡ Adiwajshing
│⬡ Nurutomo 
│⬡ Istikmal
│⬡ Ariffb 
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
└───────────•
`
conn.relayMessage(m.chat, {
  extendedTextMessage:{
                text: reply, 
                contextInfo: {
                     externalAdReply: {
                        title: 'мυʀѕι∂ вσт-χмℓ',
                        mediaType: 1,
                        previewType: 0,
                        renderLargerThumbnail: true,
                        thumbnailUrl: 'https://telegra.ph/file/b6b96cc2bd31e3481f6f2.png',
                        sourceUrl: 'https://chat.whatsapp.com/K4k4vkiENh11HMBMCZ8eox'
                    }
                }, mentions: [m.sender]
}}, {})
}
handler.command = /^(tqto)/i

module.exports = handler
