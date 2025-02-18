const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'VAJIRA-MD=lbdWSaya#CL_UYK4SJR2sxpY4GozhUXO7uTmqdDCXKFFT_V4Tpgs' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '+94 72 140 0708' : process.env.OWNER_NUMBER,
N_JID: process.env.N_JID=== undefined ? '‌': process.env.N_JID,    
PREFIX: process.env.PREFIX || '.' ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? '' : process.env.POSTGRESQL_URL,   
MAX_SIZE: 500,
STATUS_REPLY_MESSAGE: '𝐘𝐎𝐔𝐑 𝐒𝐓𝐀𝐓𝐔𝐒 𝐒𝐄𝐄𝐍 𝐉𝐔𝐒𝐓 𝐍𝐎𝐖 𝐁𝐘 SAMANTHA✅',    
ALIVE:  process.env.ALIVE  || '> VAJIRA MD'  ,    
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO        
};
