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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_47_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE1LFxuICAgICAgICA2NixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTg0LFxuICAgICAgICA2NixcbiAgICAgICAgMTEyLFxuICAgICAgICA2OSxcbiAgICAgICAgMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODksXG4gICAgICAgIDIwOSxcbiAgICAgICAgOSxcbiAgICAgICAgNixcbiAgICAgICAgMjI4LFxuICAgICAgICA2OCxcbiAgICAgICAgMSxcbiAgICAgICAgMjksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA0LFxuICAgICAgICA0NixcbiAgICAgICAgNDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTksXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDM1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTEyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTIwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjAzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTczLFxuICAgICAgICA5MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDM5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMixcbiAgICAgICAgMzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2LFxuICAgICAgICAxMixcbiAgICAgICAgNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU3LFxuICAgICAgICA1OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMSxcbiAgICAgICAgMjI0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzksXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDU0LFxuICAgICAgICA4NyxcbiAgICAgICAgNThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc4LFxuICAgICAgICA5NixcbiAgICAgICAgMjYsXG4gICAgICAgIDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDksXG4gICAgICAgIDI4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDg0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTcyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjM5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjIyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAzOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgODUsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTkxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI4LFxuICAgICAgICAxNCxcbiAgICAgICAgODgsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI1LFxuICBcImFkdlNlY3JldEtleVwiOiBcInpBeUZwZHdGSmlINlRJN3U2VDMxY3djaTJHcnd5ay9GREM3azVSSmRNNE09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkpwNHE5Smd3U2gyRGI2OENqRlRpbVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGZmMDc1NzYtMjM4OS00NzIxLWE5YzUtYjVkNzNlZTA4NTYyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQyLFxuICAgICAgMTI1LFxuICAgICAgMTYyLFxuICAgICAgNTksXG4gICAgICAxNDAsXG4gICAgICAyMzgsXG4gICAgICAyOCxcbiAgICAgIDEyNCxcbiAgICAgIDEyOCxcbiAgICAgIDE3MCxcbiAgICAgIDgsXG4gICAgICAxNDQsXG4gICAgICAyMzcsXG4gICAgICAxMjYsXG4gICAgICAxNjUsXG4gICAgICA1MyxcbiAgICAgIDU1LFxuICAgICAgMjQ4LFxuICAgICAgMTQ2LFxuICAgICAgODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAyLFxuICAgICAgODIsXG4gICAgICAxMTYsXG4gICAgICAzMCxcbiAgICAgIDE2MixcbiAgICAgIDE2NSxcbiAgICAgIDE1NyxcbiAgICAgIDIzOCxcbiAgICAgIDEwNixcbiAgICAgIDE5MyxcbiAgICAgIDExMCxcbiAgICAgIDI1MixcbiAgICAgIDIyMyxcbiAgICAgIDE4NCxcbiAgICAgIDI1NCxcbiAgICAgIDEwNyxcbiAgICAgIDE0NixcbiAgICAgIDMwLFxuICAgICAgMjgsXG4gICAgICAxMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMVEzRjhYNlZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMjM1MTY5NzA6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIllFUyBJVFMgSk9LRVJcIixcbiAgICBcImxpZFwiOiBcIjE0Mzg2ODcwNDEwODc0Nzo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01YMnA3VUtFTTZxdExRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWFkvamZvS0pSR1l5d3ZpM2RSeG00VkIvdWR4MSsrdklWSUs5Z3N4MTJqND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJtZFNVa3VSNTJUVWdrM20yZzRmcEZFNXNQa2NhS3FlVjk2OG5WTWNoeDRjUDlDVTFFWDJuQlRFUUx6a2h3QnpJcnpNU3IrSlQ1b0thekp2UGZyNjVqUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIyZ2I4b2NyVmF5bXdPMllkTDc2TlZLQjJLbC9sUFBTL2tjQkhiK0tFMVY3ZUxWMkpmU3ZTTzB6YTdYUmNkbG5EbCtMZzRRUlR6WUY5cTA4S1Y5NXhpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTIzNTE2OTcwOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDUyMjA2NlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "JOKER",


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
