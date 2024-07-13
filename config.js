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
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/d08bc36928646849b0db2.jpg" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_47_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTEsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTEyLFxuICAgICAgICA1OSxcbiAgICAgICAgOTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDYzLFxuICAgICAgICAyNCxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzUsXG4gICAgICAgIDIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDExMixcbiAgICAgICAgNSxcbiAgICAgICAgMTAyLFxuICAgICAgICA0MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTY2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDUyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI5LFxuICAgICAgICA5OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzksXG4gICAgICAgIDkzLFxuICAgICAgICAxODYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMyxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA3NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNixcbiAgICAgICAgOTEsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDgzLFxuICAgICAgICA0NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxODcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAzNyxcbiAgICAgICAgODAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk4LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjExLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTEzLFxuICAgICAgICA5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODAsXG4gICAgICAgIDExLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwLFxuICAgICAgICAxODcsXG4gICAgICAgIDk5LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYxLFxuICAgICAgICA2NixcbiAgICAgICAgMTgyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDY5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIsXG4gICAgICAgIDcsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTczLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjAyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAzNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDYsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxLFxuICAgICAgICA0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE4LFxuICAgICAgICA0MixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDk3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTY1LFxuICAgICAgICA2MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUwLFxuICBcImFkdlNlY3JldEtleVwiOiBcInBJM1JFNGhWK3JJV2c1ZGtkY3M1RXJiZTdLU0xjREI2K1l5OXZBaWJoVlk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkdTazhSdmtfVDNTV2Zwc0YyY0ZPSUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2ZmZGY1ZTktODMxZi00YWZjLWJmMjMtN2RlZTU1MDkxOGQxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc2LFxuICAgICAgMjQ2LFxuICAgICAgMSxcbiAgICAgIDIyNixcbiAgICAgIDE3MCxcbiAgICAgIDE2NyxcbiAgICAgIDI1NCxcbiAgICAgIDE3NixcbiAgICAgIDExLFxuICAgICAgMTUxLFxuICAgICAgMzMsXG4gICAgICAxMjQsXG4gICAgICAzLFxuICAgICAgMTExLFxuICAgICAgNCxcbiAgICAgIDExNSxcbiAgICAgIDIyLFxuICAgICAgMzUsXG4gICAgICAxNzksXG4gICAgICAxMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU2LFxuICAgICAgMjQ4LFxuICAgICAgNjcsXG4gICAgICA4MixcbiAgICAgIDk2LFxuICAgICAgMTk2LFxuICAgICAgMTM3LFxuICAgICAgMTEzLFxuICAgICAgMjE4LFxuICAgICAgMTMxLFxuICAgICAgOTYsXG4gICAgICAxMTksXG4gICAgICAyMyxcbiAgICAgIDE1LFxuICAgICAgMTQxLFxuICAgICAgMTA0LFxuICAgICAgNjIsXG4gICAgICAxNDEsXG4gICAgICAyNDEsXG4gICAgICAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWUvdUtzTEVQUGh5TFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJsb21LcndGazlHSjVCcDNjM3kzWnZNV0NOcW5wRVpXT05BNC9lbG5FMlYwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlJsRDc5OUhqV1Z6cjgwZjZBYXVYRHdZejRhNDlYWXpQZXgxaTR0SE9QWXk5aEpQejRtQ0Q0NVdPeTBKQ0R2bXJ0Z0lPNnRibGp6WE9FME85dWVuQkN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjREbmRPUTdzS0V6V2VvaDJvUmNvOW1HeTM0VXozWUc4RjhYYUZuY0dzNmwyWXpQaWl1OWNueDZBSUV0aS9GbEJxZXZodHMxMnhQRmV6ZENrYWdxeGp3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEzMjMzMzM3MDo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiVHJlbnQgRGlnaXRhbFwiLFxuICAgIFwibGlkXCI6IFwiNTYyNzI5NjM1NTk2MDU6OUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzIzMzMzNzA6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iaVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwODU2ODIzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRTJBXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFMkEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJjNG0ySWtoVEpWV3FRMDlDSDhyTytJTWNOaHFCYmRDb3REMlZ6UHl5UVNNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMwNDM4OTMxMjcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDg1NjgyODAzNlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "TRENT",


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
