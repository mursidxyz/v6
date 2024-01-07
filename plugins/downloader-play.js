const util = require('util')
const fetch = require('node-fetch')
const { youtubeSearch } = require('@bochilteam/scraper')

const playing = {}
const handler = async (m, { conn, text }) => {
	if (!text) throw '*Masukkan judul*\nContoh : #play hurts so good'
	let vid = (await youtubeSearch(text)).video[0]
	if (!vid) throw '*Maaf audio/video tidak ditemukan*'
	
	let {
		title,
		description, 
		thumbnail, 
		videoId, 
		durationH, 
		durationS,
		viewH,
		publishedTime 
	} = vid
	let isLimit = durationS > 18000
	let url = 'https://www.youtube.com/watch?v=' + videoId
	
	let json = !isLimit && await (await fetch(`https://skizo.tech/api/yt1s?url=${url}&apikey=mrsd`)).json()
	if (json.err) throw json.err
	
	let arr = json ? [...Object.values(json.video), ...Object.values(json.audio)] : []
	
	let txt = `
*Judul : ${title}*
*Publik : ${publishedTime}*
*Durasi Video : ${durationH}*
*Views : ${viewH}* 
*Link : ${url}*
*Deskripsi : ${description}*${isLimit ? '' : `

*silahkan pilih angka 1-${arr.length}:*
${arr.map(({ quality: q, fileSizeH }, idx) =>
	`${idx + 1}. ${/p$/.test(q) ? 'Video' : 'Audio'} ${q} (${fileSizeH})`
).join('\n')}

balas pesan ini dengan *angka* diatas\njika ingin mengubah audio, reply media yang terkirim tersebut dengan teks #tomp3`}
`
	let msg = await conn.sendMessage(m.chat, {
		text: txt,
		contextInfo: {
			externalAdReply: {
				body: conn.user.name,
				thumbnailUrl: thumbnail,
				sourceUrl: url,
				mediaType: 1,
				showAdAttribution: true,
				renderLargerThumbnail: true
			}
		}
	}, { quoted: m })
	
	if (isLimit) return conn.sendMessage(m.chat, { text: `_Durasi terlalu panjang..._\n*Duration Limit!*` }, { quoted: msg })
	playing[msg.key.id] = arr
}

handler.before = async (m, { conn }) => {
	if (!(m.quoted && m.quoted.fromMe)) return
	
	let idx
	if (idx = Object.keys(playing).find(id => id === m.quoted.id)) {
		let data = playing[idx][m.text - 1]
		if (!data) return
		let res = await fetch(data.url, { headers: { referer: 'https://y2mate.com/' }})
		if (!res.ok || res.status !== 200) return m.reply(res.statusText)
		
		let type = res.headers.get('content-type')
		if (/json|text/.test(type)) return m.reply(util.format(await res.text()))
		
		let name = res.headers.get('content-disposition')
		let buffer = Buffer.from(await res.arrayBuffer())
		if (/mp3/.test(name)) return conn.sendMessage(m.chat, {
			audio: buffer,
			mimetype: 'audio/mpeg'
		}, { quoted: m })
		await conn.sendMessage(m.chat, { video: buffer }, { quoted: m })
	}
}

handler.command = handler.help = ['play']
handler.tags = ['downloader']
handler.exp = 0
handler.limit = true
handler.premium = false

module.exports = handler
