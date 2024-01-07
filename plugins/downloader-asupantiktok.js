const fetch = require('node-fetch');
let handler = async (m, { conn, args, usedPrefix, command }) => {
  const username = [
    'natajadeh',
    'aletaanovianda',
    'faisafch',
    '0rbby',
    'cindyanastt',
    'awaa.an',
    'nadineabgail',
    'ciloqciliq',
    'carluskiey',
    'wuxiaturuxia',
    'joomblo',
    'hxszys',
    'indomeysleramu',
    'anindthrc',
    'm1cel',
    'chrislin.chrislin',
    'brocolee__',
  ];
  const pickuser = username[Math.floor(Math.random() * username.length)];
  const query = args[0] ? args[0] : pickuser;
  try {
    const res = await fetch(`https://api.botcahx.eu.org/api/asupan/tiktok?query=${query}&apikey=${btc}`);
    const api = await res.json();
    let capt = ``;
    capt += `*Author* : ${api.result.data.author.nickname} (@${api.result.data.author.username})\n`;
    capt += `*Views* : ${api.result.data.stats.play_count}\n`;
    capt += `*Like* : ${api.result.data.stats.digg_count}\n`;
    capt += `*Share* : ${api.result.data.stats.share_count}\n`;
    capt += `*Komen* : ${api.result.data.stats.comment_count}\n`;
    capt += `*Durasi* : ${Math.floor(api.result.data.duration / 60)} menit ${Math.floor(api.result.data.duration % 60)} detik\n`;
    capt += `*Sound* : ${api.result.data.music.title} - ${api.result.data.music.author}\n`;
    capt += `*Caption* : ${api.result.data.caption || '-'}\n\n`;
    conn.sendFile(m.chat, api.result.data.video, null, capt, m);
  } catch (error) {
    throw `*username tidak valid*`
  }
}
handler.help = ['asupantiktok'].map(v => v + ' <username>');
handler.tags = ['downloader'];
handler.command = /^(asupantiktok)$/i;
handler.limit = true;

module.exports = handler;
