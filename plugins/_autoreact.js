let handler = async (m, { conn, text }) => {

    conn.sendmessage(m.chat, {
          react: {
            text: `${pickrandom(['😨','😅','😂','😳','😎', '🥵', '😱', '🐦', '🙄', '🐤','🗿','🐦','🤨','🥴','😐','👆','😔', '👀','👎'])}`,
            key: m.key,
          }})
  
  }
handler.customprefix = /(bile?k|ban?h|cum?|knt?l|y?|mmk|p|b(a|i)?c?(o|i)?(t|d)?|wibu|p(a)?nt(e)?k|pepe?k|owner)/i
handler.command = new regexp
  
handler.mods = false

module.exports = handler

  function pickrandom(list) {
     return list[math.floor(math.random() * list.length)]
  }