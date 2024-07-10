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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349127791184";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/dadd72f206d09da61e8fe.jpg" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_48_07_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgODUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTksXG4gICAgICAgIDUyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwNixcbiAgICAgICAgNTIsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjA2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTgzLFxuICAgICAgICA3NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwLFxuICAgICAgICAxODAsXG4gICAgICAgIDU0LFxuICAgICAgICAxODIsXG4gICAgICAgIDY1LFxuICAgICAgICA0NSxcbiAgICAgICAgOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTI3LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDAsXG4gICAgICAgIDM1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjEzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDk2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI3LFxuICAgICAgICA0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDksXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTA1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDY1LFxuICAgICAgICA4NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTUwLFxuICAgICAgICAxNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTU4LFxuICAgICAgICAyNyxcbiAgICAgICAgNixcbiAgICAgICAgMjUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY3LFxuICAgICAgICA0MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAzMixcbiAgICAgICAgOTQsXG4gICAgICAgIDU1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMCxcbiAgICAgICAgNzksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTkzLFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NixcbiAgICAgICAgOTAsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjAwLFxuICAgICAgICA2MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjksXG4gICAgICAgIDc4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDU5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTExLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjM0LFxuICAgICAgICA3MixcbiAgICAgICAgOTAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDksXG4gICAgICAgIDQxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwLFxuICAgICAgICA3MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0LFxuICAgICAgICAxODIsXG4gICAgICAgIDYzLFxuICAgICAgICA1OCxcbiAgICAgICAgMzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTU1LFxuICAgICAgICA1MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc0LFxuICAgICAgICA2MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY4LFxuICBcImFkdlNlY3JldEtleVwiOiBcImhNajhYMnJmUnZURzRmS3JwRmUwUngvY2VqNnNhTDFtWlQ5SUxqdldKdjA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkFDWEtKNzR0UnBpb1g5Um92RXlxSndcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTQ4ZmVmZTktOGE0Mi00ZmUwLWExNmQtNDg1Mjc3OGRjYTkzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUyLFxuICAgICAgOTQsXG4gICAgICAyMjYsXG4gICAgICAyMDcsXG4gICAgICAxMDksXG4gICAgICAxMzQsXG4gICAgICAxNTYsXG4gICAgICAxNzgsXG4gICAgICA3MSxcbiAgICAgIDIyOSxcbiAgICAgIDE0MSxcbiAgICAgIDI0NCxcbiAgICAgIDE1MCxcbiAgICAgIDE5MCxcbiAgICAgIDE0MyxcbiAgICAgIDE1NixcbiAgICAgIDE3NSxcbiAgICAgIDExMCxcbiAgICAgIDExOSxcbiAgICAgIDY4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI5LFxuICAgICAgMjM3LFxuICAgICAgNTEsXG4gICAgICAxODgsXG4gICAgICAxMzMsXG4gICAgICAxMTksXG4gICAgICAyNCxcbiAgICAgIDE3LFxuICAgICAgMTczLFxuICAgICAgMTUwLFxuICAgICAgOTUsXG4gICAgICAzNSxcbiAgICAgIDQ0LFxuICAgICAgNjcsXG4gICAgICAxNjcsXG4gICAgICA5NixcbiAgICAgIDIxOCxcbiAgICAgIDU1LFxuICAgICAgMTU4LFxuICAgICAgMTQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZWRU5BRjZEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTI3NzkxMTg0OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMjA4MzA0MDc1OTQwNTI6MTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT3Z6L04wRUVNVGR1TFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJCSkF1OStyOHZHVy9BbDBWNGxqdHFURG4vVW81dEpEQ0FGcjZDZW5MNjNjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIi83eGVmbEMzS1NtMEdhdTh1RElMckttNkNqWnVqdHg5WjBCakJNdDVpNnRIbVd3YXJsVmo3Qmw0OWdNOW1QWU5Fcno5Y1Y0TytremhBUnZYV01xakJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjVjU0lCWXYyQlNNQ3Jlc09CQ1NIN1cxclB4TFh6dWtURzM0ZHhlYTJUMmhFTXk3ODJCY2l5KzZkNGlLR3gyaER4VkhoMUtJKzljWGxtVTkxTTdjaGpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMjc3OTExODQ6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDU5NDExOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNyUVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ3JRLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTGZvaWdpNGZwTGowT2ZWUkdHcis1QzNKTWJxV0dmOXpSWENaR0xyRWxXUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjcwODIzNDAyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "VEE",


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
