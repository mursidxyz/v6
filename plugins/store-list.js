let handler = async (m, { conn, usedPrefix, command }) => {
	let msgs = db.data.msgs
	let msg = (Object.entries(msgs).map(([nama, isi]) => { return { nama, ...isi } })).map(v => v.nama)
	let row = Object.keys(msg).map(v => ({
		title: msg[v],
		description: '',
		rowId: msg[v]
	}))
	let button = { 'LIST STORE\nberikut list Store yang tersedia'}
		if (msg[0]) return await conn.reply(m.chat, button, row, m)
	else throw `\nbelum ada Menu yg Ada di list store.\nketik *${usedPrefix + command} <teks>* untuk menambahkan daftar menu.\n`
}
handler.help = ['store'].map(v => 'list' + v)
handler.tags = ['database']
handler.command = /^list(store|shop)?$/i

module.exports = handler


/**
 * Jangan di hapus
 *
 * Buatan FokusDotId (Fokus ID)
 * https://github.com/fokusdotid
 *
 */