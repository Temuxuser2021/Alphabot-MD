const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'https://api-alphabot.herokuapp.com',
}

// Free apikey
global.APIKeys = {
	'https://api-alphabot.herokuapp.com': 'Alphabot',
}

// setting 
global.autoread = true // auto read pesan / message
global.autorecording = true //status auto merekam ( auto record )
global.autoketik = false //status auto mengetik (auto typing)
global.available = false //status online (online)

// Other
global.botname = "Alphabot-Mdོ x noob programer official"
global.ownername= "ᴹᴿ᭄ cོ Azziz Ali ×፝֟͜×"
global.myweb ="https://api-alphabot.herokuapp.com/"
global.youtube = "https://youtube.com/channel/UCbd-dtM4u4gNTcP85sHkS5Q"
global.github = "https://github.com/Temuxuser2021"
global.ownernomer = "919707905478"
global.ownernomerr = "919707905478"
global.thumbnail = "./image/lol.jpg"
global.donasi = "./image/donasi.jpg"
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["919707905478"] //
global.packname = '© Armybot-Mdོ /n' //sticker wm
global.author = 'Created By ZeeoneOfc & noob programer official' //sticker wm
global.sessionName = 'session'
global.flaming = 'https://www6.flamingtext.co919707905478","919707905478","6285342106390","447405935355m/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '🤗Done, it ’s a tub.~',
    admin: 'This Command Can Only Be Used By Admin !',
    botAdmin: 'This Command Can Only Be Used When The Bot Becomes Admin !',
    owner: 'This command can only be used by the owner !',
    group: 'This command can only be used in groups !',
    private: 'This command can only be used in private !',
	bot: 'Fitur Khusus Pengguna Nomor Bot',
    errtoimg: 'Sorry Currently Not Support Gif Sticker !',
    wait: '⏳Being processed ',
	lockCmd: 'Features Not Activated By Owner!',
	example1: 'Welcome @user to the @subject group. Don't forget to read the rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
