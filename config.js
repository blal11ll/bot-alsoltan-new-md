import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.botnumber = ""
global.confirmCode = ""

global.owner = [
  ['967781974099', 'YoUsSeF Al SoLtAn', true],
  ['967781974099','YoUsSeF Al SoLtAn', true]
];

global.ownername = 'YoUsSeF Al SoLtAn';
global.ownernumber = '967781974099';

global.suittag = ['967781974099', '967781974099'];
global.prems = ['967781974099', '967781974099'];

global.packname = '© BOT AL SOLTAN';
global.author = 'Bot By YoUsSeF Al SoLtAn';
global.wm = 'Bot By YoUsSeF Al SoLtAn';
global.titulowm = 'Bot By YoUsSeF Al SoLtAn';
global.titulowm2 = `Bot By YoUsSeF Al SoLtAn`
global.igfg = 'Bot Al SoLtAn';
global.wait = '*[ ⏳ ] انتظر جاري التحميل*...\n\n*https://whatsapp.com/channel/0029VaL2bnW0rGiPZq8B5S2M*';
global.styel1 = '┌─ 〘 ';
global.styel2 = ' 〙 ─ ⳹';
global.styel3 = '│✑ 「 ';
global.styel4 = ' 」';
global.styel5 = '└┬ ✑ 「 ';
global.styel6 = '│✑ ';
global.styel7 = '└───────────────┈ ⳹';

global.imagen1 = fs.readFileSync('./Menu2.png');
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png');
global.imagen4 = fs.readFileSync('./Menu.png');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen6 = fs.readFileSync('./Menu3.png');
global.imagen7 = fs.readFileSync('./Menu.png');
global.imagen8 = fs.readFileSync('./Menu.png')
global.imagen9 = fs.readFileSync('./Menu.png')
global.imagen10 = fs.readFileSync('./Menu.png')

global.img1 = 'https://telegra.ph/file/ba984d78fa802662438ee.jpg';
global.img2 = 'https://telegra.ph/file/0e22282b399e105776618.jpg';
global.img3 = 'https://telegra.ph/file/5e6456d22a8264b08a2bc.jpg';
global.img4 = 'https://telegra.ph/file/996f53288a1e2f4f35812.jpg';
global.img5 = 'https://telegra.ph/file/07cd1c2a9d2fe455e3b77.jpg';
global.img6 = 'https://telegra.ph/file/fbac075550b8622a94b8e.jpg';


global.mods = [];


global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('ar', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('ar', {month: 'long'});
global.año = d.toLocaleDateString('ar', {year: 'numeric'});
global.tiempo = d.toLocaleString('ar-EG', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});

global.wm2 = `${dia} ${fecha}\n© BOT AL SOLTAN`;
global.gt = '© BOT AL SOLTAN';
global.mysticbot = '© BOT AL SOLTAN';
global.channel = '*https://whatsapp.com/channel/0029VaL2bnW0rGiPZq8B5S2M*';
global.md = 'https://github.com/BrunoSobrino/TheMystic-Bot-MD';
global.mysticbot = 'https://github.com/BrunoSobrino/TheMystic-Bot-MD';

global.waitt = '*━────── •●• ──────━*\n> [ ⏳ ] جاري التحميل ...\n*━────── •●• ──────━*';
global.waittt = '*━────── •●• ──────━*\n> [ ⏳ ] جاري التحميل ...\n*━────── •●• ──────━*';
global.waitttt = '*[*━────── •●• ──────━*\n> [ ⏳ ] جاري التحميل ...\n*━────── •●• ──────━*';

global.nomorown = '967781974099';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];

global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';

global.ht1 = '*⋄━───═══⌬≼≽⌬═══───━⋄*';
global.ht2 = '*━────── • • ──────━*';
global.ht3 = '*━─────𖦹𖧷𖦹─────━*';

global.botdate = `*[ 📅 ] التاريخ :*  ${moment.tz('Egypt/Cairo_City').format('DD/MM/YY')}`;
global.bottime = `*[ ⏳ ] الوقت :* ${moment.tz('Egypt/Cairo_City').format('HH:mm:ss')}`;

global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];


const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
