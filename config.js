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
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ NATHANIEL ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "08139401729";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/5d7d11a6e0be49a1f0bec.jpg" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_43_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA5MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDU0LFxuICAgICAgICAzLFxuICAgICAgICA1MyxcbiAgICAgICAgODcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDc5LFxuICAgICAgICAxMyxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTgsXG4gICAgICAgIDkyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDQ1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDM3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDU2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyNDksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTU5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDMxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTI3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDU0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODQsXG4gICAgICAgIDcwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgODEsXG4gICAgICAgIDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTAwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0MixcbiAgICAgICAgNTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNixcbiAgICAgICAgMTIxLFxuICAgICAgICAyNDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDc2LFxuICAgICAgICA1NixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjksXG4gICAgICAgIDI5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDUyLFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjUzLFxuICAgICAgICA5MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDM1LFxuICAgICAgICAyNixcbiAgICAgICAgNDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDU5LFxuICAgICAgICA4NixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjI2LFxuICAgICAgICA1MixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjgsXG4gICAgICAgIDExLFxuICAgICAgICAxMDQsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJRUlF3TlVMeFJFUGZLaEorcUVRMXl1ZlJRY2NTelpOdlhKZXV5UmE3UUQ0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMzU5NjU1MDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjJBQjgzREFDNTVDMDc2NjNCNjg3MTQ5NThENUJGOEMxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDc1OTM3NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwMzU5NjU1MDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjYyMkMyQzJERTY3QTA1NjVCMTUxODQyMzA3RTNBMzI0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDc1OTM3NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI3SmVlWmQ2elRHbWczX3RqUUpCbW9nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjIxZWJjODU2LTI0YWQtNDQyNC1iNWYyLTllMzgyNDg2NzEwYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTAsXG4gICAgICA3MCxcbiAgICAgIDEwMSxcbiAgICAgIDE0MixcbiAgICAgIDg3LFxuICAgICAgMTk0LFxuICAgICAgMTA4LFxuICAgICAgMTIyLFxuICAgICAgMTAwLFxuICAgICAgMTg3LFxuICAgICAgODUsXG4gICAgICA0MyxcbiAgICAgIDIzMixcbiAgICAgIDE3MSxcbiAgICAgIDE2MixcbiAgICAgIDExMyxcbiAgICAgIDE3MSxcbiAgICAgIDIyNixcbiAgICAgIDI1MixcbiAgICAgIDM4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg1LFxuICAgICAgMTkwLFxuICAgICAgMTk0LFxuICAgICAgOSxcbiAgICAgIDY2LFxuICAgICAgMjE2LFxuICAgICAgMjUwLFxuICAgICAgNCxcbiAgICAgIDE3LFxuICAgICAgMTIsXG4gICAgICAxNTEsXG4gICAgICAzNixcbiAgICAgIDEsXG4gICAgICAyMDksXG4gICAgICA0MixcbiAgICAgIDU5LFxuICAgICAgMTQ1LFxuICAgICAgMTM5LFxuICAgICAgMTgsXG4gICAgICA5M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIyNVo4QkFFV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAzNTk2NTUwODozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTE2MDgxMDk3NDAwNjA6M0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCLinKggUm95Y2UgQW5kcmV3XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXVUNGJ3SEVNcm93clFHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJpZHRFY0J1MjIyMW9FVVE5MWxvOUVxNWY4aVBwRXVxbW4rTUJTanJlejJzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImF4VDRIUmNpVmtUMkI3NUs4WlBUUlJUK3VhOWg0eDdnL2RVSVhrT1lNaXFHU3d6bEFIS0xWRHltZnE4NFd6N2pLTDJDWXN3aHR5bEhOUERyZmhOMkF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkNZTGFSclRlOGw5NktiZ1BFQXVZMzFCSEhZM1hOcDAwbkdqaS9yQ0E5QjhrWE8xYTQvaGJIYURmVTcwZHhXWkd5UTd1Q1NyeDZkdTAvS0NOM0dXOWpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwMzU5NjU1MDg6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDc1OTM3MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhRTlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSFFOLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUEZmYzBMWXhaZmFFMFZoTE5UZG84WTJEb2VOVElPdTh4TFU3N3c3YldJZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDA2NDY5MDAzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA3Mzg1MjY2MTJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "NATHANIEL",


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
