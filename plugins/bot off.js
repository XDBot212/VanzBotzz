let handler = async (m, { participants }) => {
    // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply(' *Oke! Bot akan mati sampai bot dinyalakan kembali!* ')
    // } else m.reply('Ada nomor Ownerku disini...')
}
handler.help = ['Vanzz (on/off)']
handler.tags = ['main']
handler.command = /^(vanzzoff)$/i

handler.admin = true

export default handler