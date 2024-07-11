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
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/003b05d53e10be04ffa56.jpg" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_26_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA4OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg3LFxuICAgICAgICA5LFxuICAgICAgICAxODYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU2LFxuICAgICAgICAxODcsXG4gICAgICAgIDUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzksXG4gICAgICAgIDgyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjEzLFxuICAgICAgICA1NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE4LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTk4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTY4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTMxLFxuICAgICAgICA3OSxcbiAgICAgICAgODgsXG4gICAgICAgIDExNixcbiAgICAgICAgODUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjksXG4gICAgICAgIDI4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExLFxuICAgICAgICA2MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI5LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI0LFxuICAgICAgICA0MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTA4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTYzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTQzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNCxcbiAgICAgICAgMTAxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTEyLFxuICAgICAgICA1MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA5MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDU1LFxuICAgICAgICA2OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODQsXG4gICAgICAgIDM1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTgsXG4gICAgICAgIDcsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMixcbiAgICAgICAgMTE5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAzNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTc0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkRnWGdrZW1TbURrakt5bGpQbmtRcUJ2TFR2eVdMVFp2VlhxYmZnaEJ4bzg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTE2MjMxNTM3NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQzAyOEExNTA5NjU0MEM1OEI2ODgwQ0Y1Q0M4MDlGOEFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNzM2Nzc4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMixcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMixcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlNUeG1ERVhMU2dxZjdGeDlEWU9XRlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGRlZmUwZWUtMGY5My00ODc5LWI3OGQtODE4ZjYxYWVkMjk5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY2LFxuICAgICAgMTYsXG4gICAgICA5OCxcbiAgICAgIDUzLFxuICAgICAgNDcsXG4gICAgICA1NSxcbiAgICAgIDU4LFxuICAgICAgMTA3LFxuICAgICAgMTQ3LFxuICAgICAgMTU2LFxuICAgICAgMTU5LFxuICAgICAgMTE0LFxuICAgICAgNTIsXG4gICAgICA1MixcbiAgICAgIDI1MixcbiAgICAgIDE4OCxcbiAgICAgIDIxLFxuICAgICAgNjQsXG4gICAgICAxNDMsXG4gICAgICAxNjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMzLFxuICAgICAgODEsXG4gICAgICAyMzMsXG4gICAgICAxMTQsXG4gICAgICA3NyxcbiAgICAgIDg4LFxuICAgICAgMjAsXG4gICAgICAyMzIsXG4gICAgICA5MixcbiAgICAgIDExMCxcbiAgICAgIDMxLFxuICAgICAgMTAzLFxuICAgICAgMTgxLFxuICAgICAgMTc3LFxuICAgICAgMTEyLFxuICAgICAgMjI0LFxuICAgICAgMTUwLFxuICAgICAgMjQ1LFxuICAgICAgMTU2LFxuICAgICAgMjExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlE4SzFBRlhWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTYyMzE1Mzc2OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTc5MzEyNTQzNzQ0Nzc6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEs4eURjUS9yZkJ0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ3b1JlYXVPdGpLbzlleUVjbVNpTmwyL255VTZ1NkdjS29vS0cwVlhrTFhVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjJlZHUrSThXTWJJSElWOXptUHMwdzU5ZWVmeE03WjVuTEJVbE5CZmo1eEhnNjFES09pbDJsZUliSmk4ZjZaUEs3UFVjeFc3b1hyeGFlNWY3M2h4L0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk51SERLQno1M3EzOFZSdmxONkxReEc1WjRSd0ZBUGNFK2o3cURjQnBZaVJwQlZLYXJBRFhCbG9yNjBaS2ZWSXYxTUx1c2dkQlMxR2FlQXdURHl6Q0N3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxNjIzMTUzNzY6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTE3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA3MzY3NzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIQm5cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhCbi5qc29uIjogIntcImtleURhdGFcIjpcIlYzQTJTa2pUTEk5d0R6aWlYV1JmNkM2WEhyNDMwR1VoaUErMnVGT1Fadlk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE2NTMwODAxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIwNzM2NTE0NTY4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "NATHANIEL,


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
