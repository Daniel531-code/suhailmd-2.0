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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347076227414";




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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_23_07_12_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMixcbiAgICAgICAgMTUyLFxuICAgICAgICA1MyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjE3LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDEsXG4gICAgICAgIDgwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTksXG4gICAgICAgIDI1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjIsXG4gICAgICAgIDQzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDksXG4gICAgICAgIDcwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAzNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDYwLFxuICAgICAgICA0MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ3LFxuICAgICAgICA3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDAsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzksXG4gICAgICAgIDYyLFxuICAgICAgICAyMixcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTA0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDksXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDk1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwMixcbiAgICAgICAgODEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc0LFxuICAgICAgICAxMixcbiAgICAgICAgMzQsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNyxcbiAgICAgICAgNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTgwLFxuICAgICAgICA2MixcbiAgICAgICAgOTgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjI2LFxuICAgICAgICAxODYsXG4gICAgICAgIDYsXG4gICAgICAgIDE5LFxuICAgICAgICA1MyxcbiAgICAgICAgODgsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDkwLFxuICAgICAgICAxODUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjksXG4gICAgICAgIDI2LFxuICAgICAgICAxODksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTMyLFxuICAgICAgICA5OCxcbiAgICAgICAgOTksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTYsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk1LFxuICBcImFkdlNlY3JldEtleVwiOiBcImQzMm9tK2M2Q1RYTjJyK3dBQW1zdlVDRy9oZ1N5T2FwTG5HSnRhRTFMbTA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA3NjIyNzQxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQUY0NUFDREE3OTNBODIzOUFGMjlFRjREQ0JCNzIxQUZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM0OTA4ODczXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk1EWVkzS00yU2hDNkJmVF85amozV0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmM1ZWE0MjgtNTAwOS00YjM0LWI1ZTYtMTA3OTA0OTEyYWQ1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NSxcbiAgICAgIDE5MyxcbiAgICAgIDE0MixcbiAgICAgIDEyNSxcbiAgICAgIDE0MSxcbiAgICAgIDEwNCxcbiAgICAgIDMwLFxuICAgICAgNDAsXG4gICAgICAxMDIsXG4gICAgICAyMDIsXG4gICAgICA3NixcbiAgICAgIDE0LFxuICAgICAgNzEsXG4gICAgICA2MCxcbiAgICAgIDE1MCxcbiAgICAgIDIwMixcbiAgICAgIDE5NyxcbiAgICAgIDIzNSxcbiAgICAgIDIwMyxcbiAgICAgIDU3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExMSxcbiAgICAgIDIyNixcbiAgICAgIDE5OSxcbiAgICAgIDE3NixcbiAgICAgIDM5LFxuICAgICAgMjA2LFxuICAgICAgMjcsXG4gICAgICAyNDIsXG4gICAgICAxNCxcbiAgICAgIDI1MCxcbiAgICAgIDEyLFxuICAgICAgNjgsXG4gICAgICAxNjEsXG4gICAgICA5NCxcbiAgICAgIDEzNyxcbiAgICAgIDE4NCxcbiAgICAgIDEsXG4gICAgICA3NCxcbiAgICAgIDI1NCxcbiAgICAgIDUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjU4UVFUQksxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDc2MjI3NDE0OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiREBOIcKjTFwiLFxuICAgIFwibGlkXCI6IFwiMTY5OTUyMzQyNDY2NzQ0OjExQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xiazlNTUNFTDIzb3JzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRXY5aU9qTk5pTGsydzhQeDlXTTFReGY5Kzl4NlI0UGNTQ283MnprdzZUYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ3dnpoamZJOHZMVktQMGtMNEloT1V0WDN5MU0zV1VmOC9FMk9tbmJFS1QvbERYQmIrd3VRLzFGTWFPL2FMVjhUMEsvM05vOUFsZVdUR1VMM1h0NmRDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJlUjlPVzQzRlpTVEdqeVpSOHNRenlMM1pLNm1LL0VUOGI4MG0xUTZtelgxV2FiM0RaK2k1bGxNWUw4R1A0VkFwdC9lMzBMOFZ2VUoxZCtDT2ptN0ZBZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDc2MjI3NDE0OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDkwODg2NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpqNFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSmo0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiVXJsMytsOTRuTU9HVncrUmswcDVqUk9LZU1qVUpZeit0dGVYWUNSOTN6bz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NzkyOTM0OTMsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzQ5MDg3NDEzNzNcIn0iCn0="  // PUT your SESSION_ID 


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
