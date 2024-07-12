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
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/692c2ec0c8ddadfe7c05d.mp4" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_36_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNDksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDMsXG4gICAgICAgIDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTkxLFxuICAgICAgICA2NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTc1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTMsXG4gICAgICAgIDk1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYxLFxuICAgICAgICA4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDkxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTAxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTA0LFxuICAgICAgICA2MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTI1LFxuICAgICAgICA0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDkxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxODgsXG4gICAgICAgIDAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDY1LFxuICAgICAgICAxOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDQxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjQxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDMyLFxuICAgICAgICA4NixcbiAgICAgICAgNDUsXG4gICAgICAgIDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDg4LFxuICAgICAgICA2NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAzNixcbiAgICAgICAgMSxcbiAgICAgICAgMjI2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzksXG4gICAgICAgIDY0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODUsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDUzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg2LFxuICAgICAgICA4MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA4NixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQwLFxuICAgICAgICA5MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExMixcbiAgICAgICAgODAsXG4gICAgICAgIDk5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTU4LFxuICAgICAgICA2LFxuICAgICAgICAxODksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTY0LFxuICAgICAgICA5MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDM0LFxuICAgICAgICAxOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTUzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjMwLFxuICAgICAgICA3NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMCxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImI5NzJrZTZOc0xBTFUwbEtZbTV6YWlaNTY1OVlrbWJtMHdEa2p2Q2VZbUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA2OTMwNzg2NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNjI5OUFGOTJDNEM5MjFCRkMyMDBCQTAzRjNGMUY4NURcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNzc2OTYwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA2OTMwNzg2NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMzhDMTc0MzFENzE4QkRCQkZBQ0RCNjBERDRBODAxNkVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNzc2OTYyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjNXdE9DWUpLVGMtMzRWUC12OFF1NEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOWM2OTg5YmYtMTVkYS00YTZjLTg2MDctYzJkNTc1NTcwNTI2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDUyLFxuICAgICAgOCxcbiAgICAgIDIxNixcbiAgICAgIDExOSxcbiAgICAgIDIwNSxcbiAgICAgIDUyLFxuICAgICAgMTYxLFxuICAgICAgNzgsXG4gICAgICAxNDIsXG4gICAgICAyNDQsXG4gICAgICAxMTYsXG4gICAgICA1MyxcbiAgICAgIDEwOCxcbiAgICAgIDIzMSxcbiAgICAgIDUyLFxuICAgICAgMyxcbiAgICAgIDEzLFxuICAgICAgMTIsXG4gICAgICAxNzEsXG4gICAgICAxNjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTEsXG4gICAgICAyNTEsXG4gICAgICAxNzMsXG4gICAgICAxMCxcbiAgICAgIDIxMyxcbiAgICAgIDE1NSxcbiAgICAgIDE5NyxcbiAgICAgIDE4NixcbiAgICAgIDI0MSxcbiAgICAgIDI0MSxcbiAgICAgIDAsXG4gICAgICAyMzAsXG4gICAgICA2MCxcbiAgICAgIDEyOSxcbiAgICAgIDExOCxcbiAgICAgIDExMCxcbiAgICAgIDkwLFxuICAgICAgMTk5LFxuICAgICAgMTA3LFxuICAgICAgMTIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkE2SFpDM0NOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDY5MzA3ODY1OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJGZXN0dXNcIixcbiAgICBcImxpZFwiOiBcIjE1NzEyNzUzNjU4Njg3MDoxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lUaTJ2Y0dFUG54dzdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZ051UDkyUDA0eCswNDloeFBDZzhwL1piUkFjRWFrUEhKOGZNR0J0YzRSQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIza3M3NkVyOWNHa2FabHdFYWlWTDBneXROUzNYNzE2SUFnVHZkSUxpYldVOGloN2poUFZTNlh0RXZhSjdFMWdGOElSMi9ya1R6ZUZyT0hNME9YTkxBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ4V09TRDlMakNvdjEvY0g2VWR1MjYra0JVYi9WMzh0cWtkVXdTMW94U2FSNzJFN2YwdTR0eXZacmxyekwwQ0xIQTk0aklKWE85TC9hNHQ5cUdFWFpDZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDY5MzA3ODY1OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNzc2OTU4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSkVQXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKRVAuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJDT3RXZGpPQW9SMEh5SDJuWCthdC84ZnlYR0ZnMnBmNjBVY1d6MzZPSDR3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NjE2NjA5MzIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDc3Njk1OTQ1MVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "FESTUS",


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
