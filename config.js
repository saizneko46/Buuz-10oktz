require("./database/module")

//GLOBAL PAYMENT
global.storename = "dqr"
global.dana = "08395"
global.qris = "-"


// GLOBAL SETTING
global.owner = "6283870771598"
global.namabot = "dqr"
global.nomorbot = "6283870771598"
global.namaCreator = "dqr"
global.linkyt = "https://youtube.com/@errr"
global.autoJoin = false
global.antilink = false
global.versisc = '4.7.0'

// DELAY JPM
global.delayjpm = 5500



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://g.top4top.io/p_3194i70l0.jpg'
global.isLink = 'https://whatsapp.com/channel/008a7EawdvrnMrxC2B'
global.packname = "dwrx"
global.author = "dqr"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
