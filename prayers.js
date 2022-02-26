// Setup our environment variables via dotenv
require('dotenv').config()
// Import relevant classes from discord.js
const { Client, Intents } = require('discord.js');
// Instantiate a new client with some necessary parameters.
const client = new Client(
    { intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }
);
// Notify progress
client.on('ready', function(e){
    console.log(`Logged in as ${client.user.tag}!`)
})
// Authenticate
client.login(process.env.TOKEN);

//Example Functionality
client.on('message',
    function(msg){
        if(msg.content.includes('+signofthecross')) {
            msg.reply(process.env.SIGNOFTHECROSS);
        }
        if(msg.content.includes('+signofcross')) {
            msg.reply(process.env.SIGNOFTHECROSS);
        }
        if(msg.content.includes('+signcross')) {
            msg.reply(process.env.SIGNOFTHECROSS);
        }
        if(msg.content.includes('+cross')) {
            msg.reply(process.env.SIGNOFTHECROSS);
        }
        if(msg.content.includes('+crosssign')) {
            msg.reply(process.env.SIGNOFTHECROSS);
        }
        if(msg.content.includes('+ourfather')) {
            msg.reply(process.env.OURFATHER);
        }
        if(msg.content.includes('+hailmary')) {
            msg.reply(process.env.HAILMARY);
        }
        if(msg.content.includes('+glorybe')) {
            msg.reply(process.env.GLORYBE);
        }
        if(msg.content.includes('+fatima')) {
            msg.reply(process.env.OHMYJESUS);
        }
        if(msg.content.includes('+ohmyjesus')) {
            msg.reply(process.env.OHMYJESUS);
        }
        if(msg.content.includes('+omyjesus')) {
            msg.reply(process.env.OHMYJESUS);
        }
        if(msg.content.includes('+ohmyJesus')) {
            msg.reply(process.env.OHMYJESUS);
        }
        if(msg.content.includes('+omyJesus')) {
            msg.reply(process.env.OHMYJESUS);
        }
        if(msg.content.includes('+hailholyqueen')) {
            msg.reply(process.env.HAILHOLYQUEEN);
        }
        if(msg.content.includes('+hhh')) {
            msg.reply(process.env.HAILHOLYQUEEN);
        }
        if(msg.content.includes('+letuspray')) {
            msg.reply(process.env.LETUSPRAY);
        }
        if(msg.content.includes('+rosaryfinalprayer')) {
            msg.reply(process.env.LETUSPRAY);
        }
        if(msg.content.includes('+rosarynovenaprayer')) {
            msg.reply(process.env.ROSARYNOVENA);
        }
        if(msg.content.includes('+rosarynovena')) {
            msg.reply(process.env.ROSARYNOVENA);
        }
        if(msg.content.includes('+rosaryend')) {
            msg.reply(process.env.LETUSPRAY);
        }
        if(msg.content.includes('+saintmichael')) {
            msg.reply(process.env.STMICHAEL);
        }
        if(msg.content.includes('+stmichael')) {
            msg.reply(process.env.STMICHAEL);
        }
        if(msg.content.includes('+holyspirit')) {
            msg.reply(process.env.HOLYSPIRIT);
        }
        if(msg.content.includes('+holyghost')) {
            msg.reply(process.env.HOLYSPIRIT);
        }
        if(msg.content.includes('+sacredheart')) {
            msg.reply(process.env.SACREDHEART);
        }
        if(msg.content.includes('+sacredheartofjesus')) {
            msg.reply(process.env.SACREDHEART);
        }
        if(msg.content.includes('+sacredheartofJesus')) {
            msg.reply(process.env.SACREDHEART);
        }
        if(msg.content.includes('+memorare')) {
            msg.reply(process.env.MEMORARE);
        }
        if(msg.content.includes('+memorareofsaintbernard')) {
            msg.reply(process.env.MEMORARE);
        }
        if(msg.content.includes('+thememorareofsaintbernard')) {
            msg.reply(process.env.MEMORARE);
        }
        if(msg.content.includes('+memorareofstbernard')) {
            msg.reply(process.env.MEMORARE);
        }
        if(msg.content.includes('+thememorareofstbernard')) {
            msg.reply(process.env.MEMORARE);
        }
        if(msg.content.includes('+crucifix')) {
            msg.reply(process.env.PRAYERBEFOREACRUCIFIX);
        }
        if(msg.content.includes('+beforecrucifix')) {
            msg.reply(process.env.PRAYERBEFOREACRUCIFIX);
        }
        if(msg.content.includes('+beforeacrucifix')) {
            msg.reply(process.env.PRAYERBEFOREACRUCIFIX);
        }
        if(msg.content.includes('+prayerbeforeacrucifix')) {
            msg.reply(process.env.PRAYERBEFOREACRUCIFIX);
        }
        if(msg.content.includes('+soulofchrist')) {
            msg.reply(process.env.SOULOFCHRIST);
        }
        if(msg.content.includes('+holyfamily')) {
            msg.reply(process.env.HOLYFAMILY);
        }
        if(msg.content.includes('+queenofheaven')) {
            msg.reply(process.env.QUEENOFHEAVEN);
        }
        if(msg.content.includes('+oqueenofheaven')) {
            msg.reply(process.env.QUEENOFHEAVEN);
        }
        if(msg.content.includes('+ohqueenofheaven')) {
            msg.reply(process.env.QUEENOFHEAVEN);
        }
        if(msg.content.includes('+queenheaven')) {
            msg.reply(process.env.QUEENOFHEAVEN);
        }
        if(msg.content.includes('+mysoulmagnifiesthelord')) {
            msg.reply(process.env.MYSOULMAGNIFIESTHELORD);
        }
        if(msg.content.includes('+magnify')) {
            msg.reply(process.env.MYSOULMAGNIFIESTHELORD);
        }
        if(msg.content.includes('+magnifies')) {
            msg.reply(process.env.MYSOULMAGNIFIESTHELORD);
        }
        if(msg.content.includes('+saintjoseph')) {
            msg.reply(process.env.STJOSEPH);
        }
        if(msg.content.includes('+stjoseph')) {
            msg.reply(process.env.STJOSEPH);
        }
        if(msg.content.includes('+saintjude')) {
            msg.reply(process.env.STJUDE);
        }
        if(msg.content.includes('+stjude')) {
            msg.reply(process.env.STJUDE);
        }
        if(msg.content.includes('+sainttanthony')) {
            msg.reply(process.env.STANTHONY);
        }
        if(msg.content.includes('+stanthony')) {
            msg.reply(process.env.STANTHONY);
        }
        if(msg.content.includes('+stanthonyshort')) {
            msg.reply(process.env.STANTHONYSHORT);
        }
        if(msg.content.includes('+saintanthonyshort')) {
            msg.reply(process.env.STANTHONYSHORT);
        }
        if(msg.content.includes('+morningoffering')) {
            msg.reply(process.env.MORNINGOFFERING);
        }
        if(msg.content.includes('+morning')) {
            msg.reply(process.env.MORNINGOFFERING);
        }
        if(msg.content.includes('+night')) {
            msg.reply(process.env.NIGHT);
        }
        if(msg.content.includes('+goodnight')) {
            msg.reply(process.env.NIGHT);
        }
        if(msg.content.includes('+gn')) {
            msg.reply(process.env.NIGHT);
        }
        if(msg.content.includes('+meals')) {
            msg.reply(process.env.BEFOREMEAL);
        }
        if(msg.content.includes('+meals')) {
            msg.reply(process.env.AFTERMEAL);
        }
        if(msg.content.includes('+actofcharity')) {
            msg.reply(process.env.ACTOFCHARITY);
        }
        if(msg.content.includes('+actofhope')) {
            msg.reply(process.env.ACTOFHOPE);
        }
        if(msg.content.includes('+actofcontrition')) {
            msg.reply(process.env.ACTOFCONTRITION);
        }
        if(msg.content.includes('+actoffaith')) {
            msg.reply(process.env.ACTOFFAITH);
        }
        if(msg.content.includes('+aoch')) {
            msg.reply(process.env.ACTOFCHARITY);
        }
        if(msg.content.includes('+aoho')) {
            msg.reply(process.env.ACTOFHOPE);
        }
        if(msg.content.includes('+aoco')) {
            msg.reply(process.env.ACTOFCONTRITION);
        }
        if(msg.content.includes('+aofa')) {
            msg.reply(process.env.ACTOFFAITH);
        }
        if(msg.content.includes('+spiritualcommunion')) {
            msg.reply(process.env.SPIRITUALCOMMUNION);
        }
        if(msg.content.includes('+apostlescreed')) {
            msg.reply(process.env.APOSTLESCREED);
        }
        if(msg.content.includes('+nicenecreed')) {
            msg.reply(process.env.NICENECREED);
        }
        if(msg.content.includes('+athanasiancreed')) {
            msg.reply(process.env.ATHANASIANCREED);
        }
    })
