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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348083095910";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/9e51db3151d2bec59659b.jpg" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_02_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ3LFxuICAgICAgICA5OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNSxcbiAgICAgICAgNzksXG4gICAgICAgIDI4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNyxcbiAgICAgICAgMjksXG4gICAgICAgIDIyMixcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTc5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDM0LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjI1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDksXG4gICAgICAgIDExMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQyLFxuICAgICAgICA1MixcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4NixcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAzNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM0LFxuICAgICAgICA3NixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDM2LFxuICAgICAgICA0MyxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjE3LFxuICAgICAgICA5NyxcbiAgICAgICAgODUsXG4gICAgICAgIDU0LFxuICAgICAgICA1NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDU3LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTQsXG4gICAgICAgIDY2LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY3LFxuICAgICAgICA5NixcbiAgICAgICAgMjA1LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNzksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDMyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDUyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDk5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQwLFxuICAgICAgICA0NSxcbiAgICAgICAgNixcbiAgICAgICAgMTQ5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDc5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDk4LFxuICAgICAgICAxNixcbiAgICAgICAgMTk3LFxuICAgICAgICA0MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTksXG4gICAgICAgIDI2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDYzLFxuICAgICAgICA4MixcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjEwLFxuICAgICAgICA3OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1OSxcbiAgICAgICAgODMsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjExLFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ3SGJnaGdKc2dDcFRTeEFZdjZIVndmVXR5anZWRmk3QWk0anRlS09ySThNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJOXzk0UmI1aVQzV05WSmQxSkthNGhRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjJkM2QyNTQ3LTcwNzctNDViOS04Mzg5LTU3N2E1ZTE5N2ViN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjMsXG4gICAgICAxMTAsXG4gICAgICA1NyxcbiAgICAgIDg2LFxuICAgICAgNSxcbiAgICAgIDU1LFxuICAgICAgMzUsXG4gICAgICA3MyxcbiAgICAgIDIzMixcbiAgICAgIDE4OCxcbiAgICAgIDIxMCxcbiAgICAgIDE5MyxcbiAgICAgIDE0NixcbiAgICAgIDc0LFxuICAgICAgMjA4LFxuICAgICAgMTg0LFxuICAgICAgMTYzLFxuICAgICAgMTYwLFxuICAgICAgODgsXG4gICAgICAxMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUyLFxuICAgICAgMTU4LFxuICAgICAgMTYsXG4gICAgICAxMzMsXG4gICAgICAxMTcsXG4gICAgICA2MyxcbiAgICAgIDg5LFxuICAgICAgNjIsXG4gICAgICA4OCxcbiAgICAgIDE5NSxcbiAgICAgIDIwMixcbiAgICAgIDE4LFxuICAgICAgOTAsXG4gICAgICAxMTcsXG4gICAgICAxMyxcbiAgICAgIDEwOCxcbiAgICAgIDE2OSxcbiAgICAgIDEzNixcbiAgICAgIDI0MCxcbiAgICAgIDIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIks5SldFS1RBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDgzMDk1OTEwOjY4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRnJlc2ggTWVkaWFcIixcbiAgICBcImxpZFwiOiBcIjI2MzYzODE5NTYzODMzNDo2OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOeVM3Y29FRU0vTnRMUUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk5TR0tOdmY2bjZBUDRhVmkwSW1FaGN2d2QyVFZMRnlKYU5tSU10dXRvVEU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTjYrc3BOVm1lNW5NNTRMMFZCNHlqWGFjbTNLSUpuMkU1UG9ySEtHVHkwRGdCb1pLY09OUHl5Ukd3N0FxbGRUc3pkWVo1SmlIbWFUc1c5bFJFc2VNQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYWdwbTY2akNZalVtRUFENEVRQWx0Q2xtaXkrdXBrZStDS0EvbFBjaGEwOG5PcldGV1A1aVg1UTBpUjI3dUFmR3lBQ0MwQ1o3YmszQXBTL0REWjN2Q3c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA4MzA5NTkxMDo2OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDUyNjU0NlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "FRESH MEDIA",


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
