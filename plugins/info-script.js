import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*Ga ada SC bang*

Mau sewa bot? Hubungi Owner ketik #owner
Atau klik link di bawah

wa.me/6285798048936`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'Thankyou','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/ramdan_we",
    mediaType: "VIDEO",
    description: "https://www.instagram.com/p/Cb91yKIr9K5/?igshid=YmMyMTA2M2Y=", 
    title: 'FR-BOT-MD-V2 MultiDevice',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) 
          }
handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

export default handler
