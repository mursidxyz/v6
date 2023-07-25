let fetch = require ("node-fetch")
let { generateWAMessageFromContent } = require ("@adiwajshing/baileys")

let handler  = async (m, { conn }) => {

 let pp = 'https://cdn.btch.bz/file/c17c83280569195749e96.jpg'
  try {
    pp = await conn.profilePictureUrl(m.sender, 'image')
  } catch (e) {
  }

let msg = await generateWAMessageFromContent(m.chat, { locationMessage: {
  degreesLatitude: 0,
  degreesLongitude: 0,
  name: 'мυʀѕι∂ вσт-χмℓ',
  address: wm,
  url: 'https://chat.whatsapp.com/K4k4vkiENh11HMBMCZ8eox',
  isLive: true,
  accuracyInMeters: 0,
  speedInMps: 0,
  degreesClockwiseFromMagneticNorth: 2,
  comment: '',
  jpegThumbnail: await( await fetch(pp)).buffer()
}}, { quoted: m })

return conn.relayMessage(m.chat, msg.message, {})
}

handler.command = /^(gcbot|grupbot|gc|grupwa)$/i
handler.owner = false
module.exports = handler
