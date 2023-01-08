let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *Bot On!* ')
}


handler.tags = ['main']
handler.command = /^(vanzzon)$/i

handler.admin = true

export default handler