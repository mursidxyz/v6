// - Ubah nomor owner dan wm di sini.
// + Daftar apikey terlebih dahulu sebelum menggunakan svript ini link
//https://api.betabotz.org
//https://api.botcahx.live
// - Jika sudah mendaftar salin key yang ada di profie dan paste di global.lann && global.btc
// - Contoh global.btc = 'ngaksk?'//register di https://api.botcahx.live
// - Contoh global.lann = 'Ntahla' //register key di https://api.betabotz.org
// - Jika sudah maka lanjutkan untuk mengubah nomor owner dan wm.


// List Key 
// Betabotz = digunakan hampir di semua fitur kecuali linkshort
// Botcahx  = digunakan untuk linkshort saja

global.xznkey = 'mrsd'
global.owner = ['6288233832771']  
global.mods = ['6288233832771'] 
global.prems = ['6288233832771']
global.nameowner = 'mrsd'
global.numberowner = '62882006999182' 
global.mail = 'mursidxml@gmail.com' 
global.dana = '088233832771'
global.pulsa = '083189913217'
global.gopay = '083189913217'
global.namebot = 'мυʀѕι∂ вσт-χмℓ'
global.gc = 'https://chat.whatsapp.com/GubWpcKeRnRAvLSBpP197W'
global.web = 'https://github.com/Botwa021'
global.instagram = 'https://instagram.com/mursid.st'
global.wm = 'мυʀѕι∂ вσт-χмℓ'
global.watermark = wm
global.wm2 = 'мυʀѕι∂ вσт-χмℓ'
global.wm3 = 'мυʀѕι∂ вσт-χмℓ'
global.wm4 = 'мυʀѕι∂ вσт-χмℓ'
global.wait = '_*𝐭𝐮𝐧𝐠𝐠𝐮 𝐬𝐞𝐝𝐚𝐧𝐠 𝐝𝐢 𝐩𝐫𝐨𝐬𝐞𝐬 ...*_'
global.eror = '_*мααƒ ѕᴇʀνᴇʀ ѕᴇ∂αɴg тι∂αк ѕтαвιℓ..*_'
global.benar = '*benar*'
global.salah = '*salah*'
global.thumb = 'https://telegra.ph/file/7be2d1e81e6b8092c24b2.jpg'
global.stiker_wait = '*ѕтɪᴄкєʀ ѕє∂αɴg ∂ι вυαт...*'
global.packname = '𝚠𝚑𝚊𝚝𝚜𝚊𝚙𝚙 𝚋𝚘𝚝 𝚖𝚞𝚕𝚝𝚒 𝚍𝚎𝚟𝚒𝚌𝚎'
global.author = 'мυʀѕι∂ вσт-χмℓ'
global.read = true//Untuk autoread kalau pengen autoread nyala true kalau pengen mati false 
//==> Apikey
global.lann = 'jLGiBWwj' //isi apikey mu https://api.betabotz.org
global.btc = 'NWvaNDcP'//Isi apikey di https://api.botcahx.live
global.APIs = {   
  lann: 'https://api.betabotz.org',
  btc: 'https://api.botcahx.live'
}
global.APIKeys = { 
  'https://api.betabotz.org': 'kasanLovetiara' //isi apikey mu https://api.betabotz.org
}

global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
