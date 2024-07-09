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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_50_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQyLFxuICAgICAgICA1MSxcbiAgICAgICAgODEsXG4gICAgICAgIDIxLFxuICAgICAgICAxMixcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDYsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTE0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjI0LFxuICAgICAgICA0NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwLFxuICAgICAgICA5OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNixcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDYyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA2LFxuICAgICAgICA0NCxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICA0OSxcbiAgICAgICAgNDksXG4gICAgICAgIDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDc1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTQsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDk1LFxuICAgICAgICA1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDMwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDYyLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExLFxuICAgICAgICAzMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEsXG4gICAgICAgIDkxLFxuICAgICAgICAzOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDk2LFxuICAgICAgICA3MixcbiAgICAgICAgMTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODAsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY5LFxuICAgICAgICA1NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTMwLFxuICAgICAgICA0OSxcbiAgICAgICAgNixcbiAgICAgICAgMjE3LFxuICAgICAgICAzNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE2LFxuICAgICAgICA4LFxuICAgICAgICA4NyxcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOCxcbiAgICAgICAgMzksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMixcbiAgICAgICAgODIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2LFxuICAgICAgICAwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDcwLFxuICAgICAgICA5NCxcbiAgICAgICAgODIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTgwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk4LFxuICAgICAgICAzLFxuICAgICAgICA1MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDk3LFxuICAgICAgICA0NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDM1LFxuICAgICAgICA0MixcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOE8wN0YvOW13cFZ6eitYQmpvdlJQSC9yQVVOQldsQTFjV1NWM0lLTEUzOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMzLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMzLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibU93dk82OEZTQzYtbHpCdWRaMHpGQVwiLFxuICBcInBob25lSWRcIjogXCI1NzU2NzYyZi1lZGJkLTRkMWEtODllZS05ODUxMDgzMGQ4OGVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTUsXG4gICAgICAyMTcsXG4gICAgICAxMDcsXG4gICAgICAyMTIsXG4gICAgICAyMzIsXG4gICAgICAxOTUsXG4gICAgICAyMjMsXG4gICAgICA2NixcbiAgICAgIDYsXG4gICAgICAxMjcsXG4gICAgICAyMDYsXG4gICAgICAxMDcsXG4gICAgICA3NyxcbiAgICAgIDk5LFxuICAgICAgMTAwLFxuICAgICAgMjQ2LFxuICAgICAgMzMsXG4gICAgICAyMzUsXG4gICAgICAxMzksXG4gICAgICAyNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYwLFxuICAgICAgMTMsXG4gICAgICAxMDMsXG4gICAgICAyMjEsXG4gICAgICAxODksXG4gICAgICA0MyxcbiAgICAgIDIwOCxcbiAgICAgIDI1LFxuICAgICAgMTE0LFxuICAgICAgMTAsXG4gICAgICAxNjAsXG4gICAgICAyMTUsXG4gICAgICAyMzYsXG4gICAgICAxMDcsXG4gICAgICAxMSxcbiAgICAgIDIxMSxcbiAgICAgIDIzMSxcbiAgICAgIDg1LFxuICAgICAgMTU1LFxuICAgICAgMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPS09qZ01RMHJHd3RBWVlDU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImhvdmtvZ1V5UE8vS3AyWFpuT0dGcU1IZFJwY2dNSE1EVWxuR1JMYWlFa1U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicUlRTnhSbzBEd0lFbmRuN1VNMk9RZmZINWhtNUVpcVZFa1lBOGZPa1NRT2huNTNJWlIzdkRxYjVwdnYxSE5uOGdqdVNDTzJxY3pieE9sSFRUWDRZRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiV01aK045UU1VYTB2Z2MvNTE1eUw0alZxRzBweXhxTGxvUmkrUUlGcUdUQnJSeG45aERlbFRJMzNuMXZRd3lxaHZQUE9vQ0RtODVjUFRGRkF4N1ZhQmc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDUzMTkyNTE3OjM5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTc3Mjk1OTIyMDUzNTQ6MzlAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDUzMTkyNTE3OjM5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDQ1NzQyOVxufSIKfQ=="  // PUT your SESSION_ID 


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
