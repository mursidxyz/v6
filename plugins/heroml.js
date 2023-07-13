let fetch = require('node-fetch')

let handler = async(m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, 'Harap Masukan nama hero', m)

  await m.reply('Searching...')
    let dann = await fetch(`https://api.betabotz.org/api/search/heroml?hero=${text}&apikey=AkiraabotzE`)
    let res = await dann.json()
    let thumb = `https://api.lolhuman.xyz/api/gimage?apikey=sgwn&query=hero%20${text}`
    let hasil = `*── 「 HERO ML 」 ──*

▢ *Name*: ${hero_name}
▢ *Role*: ${role}
▢ *Lane*: ${.laning_recommendation}
▢ *Relate Date*: ${.release_date}
▢ *Quotes*: ${entrance_quotes}
▢ *Features*: ${hero_feature}
▢ *Info*: 
${.character.chara[0]}
${res.result.character.chara[1]}
▢ *Atribut*: ${res.result.attributes.movement_speed}
${res.result.attributes.physical_attack}
${res.result.attributes.magic_power}
${res.result.attributes.attack_speed}
${res.result.attributes.physical_defense}
${res.result.attributes.magic_defense}
${res.result.attributes.basic_atk_crit_rate}
${res.result.attributes.hp}
${res.result.attributes.mana}
${res.result.attributes.ability_crit_rate}
${res.result.attributes.hp_regen}
${res.result.attributes.hp}
${res.result.attributes.mana_regen}
▢ *Price*: 
*BP*: ${res.result.price.battle_point}
*DIAMOND*: ${res.result.price.diamond}
▢ *Skill*: 
*Durability*: ${res.result.skill.durability}
*Offense*: ${res.result.skill.offense}
*Skill Effect*: ${res.result.skill.skill_effects}
*Difficulty*: ${res.result.skill.difficulty}
▢ *Spesiality*: ${res.result.speciality}
▢ *Background Story*: 
${background_story}
`

    conn.sendFile(m.chat, thumb, 'heroml.jpg', `${hasil}`, m)
}
handler.help = ['heroml'].map(v => v + ' <nama hero>')
handler.tags = ['internet']
handler.command = /^(heroml)$/i

module.exports = handler