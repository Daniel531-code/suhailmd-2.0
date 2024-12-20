const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_59_12_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA4LFxuICAgICAgICA2MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3LFxuICAgICAgICAxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDM0LFxuICAgICAgICAxMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMixcbiAgICAgICAgMTU1LFxuICAgICAgICAxODUsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgNixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDcxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDg4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTI5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ2LFxuICAgICAgICA4MixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI3LFxuICAgICAgICA0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDkwLFxuICAgICAgICAxODQsXG4gICAgICAgIDg0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2NixcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTk2LFxuICAgICAgICA5MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDExLFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODcsXG4gICAgICAgIDI2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3LFxuICAgICAgICA0NSxcbiAgICAgICAgODEsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDM4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTcsXG4gICAgICAgIDczLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk1LFxuICAgICAgICA0MSxcbiAgICAgICAgNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTA5LFxuICAgICAgICA1LFxuICAgICAgICA2OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDQzLFxuICAgICAgICAxODIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMixcbiAgICAgICAgNTksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTU3LFxuICAgICAgICA0NixcbiAgICAgICAgNzcsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlo3MFQvNFZYbzR2blRQMm83MjlKS0V3bWt1ZnRrV1NpcXVDVEdnOXhRZHM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA3NjIyNzQxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQzhBQ0M1QzNFQ0IwRDREMTlDODczMjZGMDk4MjI4OEVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM0Njk5NTU1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInQ5eF9iSDdhUk02OXV0Y1U3eHZfRmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZmQyMmNiZDctMjQzMS00MDgzLTk0ODctNmE5ODllZmQ1Nzc5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NSxcbiAgICAgIDIzMixcbiAgICAgIDkzLFxuICAgICAgMTMsXG4gICAgICAyMjksXG4gICAgICA5NyxcbiAgICAgIDE1MixcbiAgICAgIDI1MSxcbiAgICAgIDUwLFxuICAgICAgMjUyLFxuICAgICAgMTUsXG4gICAgICAxNSxcbiAgICAgIDIwNixcbiAgICAgIDE4MCxcbiAgICAgIDMsXG4gICAgICA2NixcbiAgICAgIDkyLFxuICAgICAgMTQxLFxuICAgICAgMjEsXG4gICAgICAxMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQxLFxuICAgICAgMTU3LFxuICAgICAgNzYsXG4gICAgICA4NSxcbiAgICAgIDIxOSxcbiAgICAgIDgwLFxuICAgICAgMjQsXG4gICAgICAyMzksXG4gICAgICAxMjQsXG4gICAgICAxNzMsXG4gICAgICAxNjQsXG4gICAgICAxNDksXG4gICAgICAxMCxcbiAgICAgIDIyOSxcbiAgICAgIDEyOSxcbiAgICAgIDIwMCxcbiAgICAgIDE4NCxcbiAgICAgIDQsXG4gICAgICAxNzYsXG4gICAgICAyMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNDNLQ1M5VEpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNzYyMjc0MTQ6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkRATiHCo0xcIixcbiAgICBcImxpZFwiOiBcIjE2OTk1MjM0MjQ2Njc0NDo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BqTmxhc0RFSnZVbGJzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMit0VHBOcTVMMHhjeENuVnFNU1FQb0hONFRJeXEwRGxhYlRrMjByYjV6VT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJjdEdaUElMWjlJY083NXQ1RnNyUTFqaWt4cmhLSXczVS9jVWRQNng2YU9IRDJZdFFqUlVZNFNMZ2VRMk91RUNHcnFkNWJNQldYcXNDQmU0Q2lWcHRDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJWY1hIeUY4a1dtTisybWxxZS9INHlPckRwNXVFU3hrbmhXVHhtdmlMQmZpYitCWGtUN3lkQjc0ZGxCOS9nZVR0VW5QcEk5bC95YW9ucGpEdUVPS0NEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDc2MjI3NDE0OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA1M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0Njk5NTUwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRllpXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGWWkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJPZ29iTEVxaTNFYmNjTExqUXBUSGJaVksrZmQwM0FCWC9IcHM4dnkxR2lnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg5NTgzNzk0MSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
