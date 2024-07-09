const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_24_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDMwLFxuICAgICAgICA0NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0LFxuICAgICAgICA1LFxuICAgICAgICA4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDg5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg2LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMixcbiAgICAgICAgMTc1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTY1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgNixcbiAgICAgICAgMjExLFxuICAgICAgICAyMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjksXG4gICAgICAgIDExMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICA0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDMxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTUzLFxuICAgICAgICA1MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDUxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMixcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA0LFxuICAgICAgICAxODQsXG4gICAgICAgIDU2LFxuICAgICAgICA1NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI2LFxuICAgICAgICA0MixcbiAgICAgICAgMzksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTEwLFxuICAgICAgICA0NixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM4LFxuICAgICAgICA0MyxcbiAgICAgICAgMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDczLFxuICAgICAgICA1MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc3LFxuICAgICAgICA2NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDY2LFxuICAgICAgICAyMixcbiAgICAgICAgNTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQ0RPQ0tWbi9lZXUvZjRyT2ZRSDlmR242Z2lXakJYeko0UFhtNnZoUjF0bz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidk1Qc2JzLWxSNTZ1aVpGQTNoR2JwQVwiLFxuICBcInBob25lSWRcIjogXCIzN2UyNGM0ZS1iMzUzLTRkOTQtYTcwMi0yNjZlZjI3YjMwNTRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzEsXG4gICAgICAxMzAsXG4gICAgICA1MyxcbiAgICAgIDU3LFxuICAgICAgMSxcbiAgICAgIDE1MyxcbiAgICAgIDE3NixcbiAgICAgIDI0MixcbiAgICAgIDIxNixcbiAgICAgIDE5LFxuICAgICAgMTM3LFxuICAgICAgMTM4LFxuICAgICAgMTcwLFxuICAgICAgMjEyLFxuICAgICAgMTY3LFxuICAgICAgMjUsXG4gICAgICAyNDEsXG4gICAgICAyMTgsXG4gICAgICAyNixcbiAgICAgIDc0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MyxcbiAgICAgIDI0NyxcbiAgICAgIDI1NCxcbiAgICAgIDEyNixcbiAgICAgIDEwOCxcbiAgICAgIDYxLFxuICAgICAgNzgsXG4gICAgICA0LFxuICAgICAgMzIsXG4gICAgICAxMTgsXG4gICAgICAxNzQsXG4gICAgICAyMzEsXG4gICAgICAyMzcsXG4gICAgICA2NCxcbiAgICAgIDEyNyxcbiAgICAgIDE3NixcbiAgICAgIDIzMixcbiAgICAgIDIzMixcbiAgICAgIDIzMyxcbiAgICAgIDQyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldKWFBHNVc4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTIzNTE2OTcwOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0Mzg2ODcwNDEwODc0NzoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01Md3dLOE9FTGVpc3JRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicEYvWlZQcTl0VldnaXpzSGd6dVp5WWFZTmhRMGFYR1RmY0ZacFNwTFRUdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIyTEFMdTVObG1YazAxVDRvWXRyS3R1WVJZS3V5cW1nd0RiS0RxWnZabjhzVUY0bnpzNG0ySjFNY0JVTUtkL2x5S0N6ZDRtZFkrbTI4aFZRRmRTNGpoQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXZWN2dk9EaENwbU1HOTc1ejgxdzk5ZDkzVysrYjFoUmtKOEhKRkhIQVdlbFBYY1FWcjlrZ2IrZW1idGJuL2lhYS9EZWlnOTR4cndQTTE3c2NnUWZpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTIzNTE2OTcwOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDYwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDQ4ODI1MFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
