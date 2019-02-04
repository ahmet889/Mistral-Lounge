const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`[BOT] ${client.user.tag} ADI İLE GİRİŞ YAPTI!`);
});

client.on('message', msg => {
  if (msg.content === 'lag var') {
    msg.reply('f8 filtera hemen göz atıyoruz.');
  }
  
   if (msg.content === 'sw gitti') {
    msg.reply('hemen yetkili arkadaşlarıma bildirim yolluyorum.');
  }
  
   if (msg.content === 'sw gg') {
    msg.reply('Komple kapanma sorunu yoktur. Hemen Prosedur Yetkilisine bildiriyorum.');
  }
  
   if (msg.content === 'Selamın Aleyküm') {
    msg.reply('Aleyküm Selam. Hoşgeldin iyi oyunlar.');
  }
  
   if (msg.content === 'sa') {
    msg.reply('Aleyküm Selam. Hoşgeldin iyi oyunlar.');
  }
  
   if (msg.content === 's.a') {
    msg.reply('Aleyküm Selam. Hoşgeldin iyi oyunlar.');
  }
  
   if (msg.content === 'lag var') {
    msg.reply('f8 filtera hemen göz atıyoruz.');
  }
  
  if (msg.content === 'bi yetkili yazabilir mi') {
    msg.reply('Hygge Size geri dönüş sağlaması için bildirim yolladım.');
  }
  
  if (msg.content === 'GM bakarmısın') {
    msg.reply('Hygge Adlı Yetkiliye Mesaj yazabilirsiniz.');
  }
  
  if (msg.content === 'selam') {
    msg.reply('Selam :) İYİ OYUNLAR');
  }
});

client.login('NTQxMzExOTI5MzkwNDY1MDM4.DznsQg.3ChvxfxxvFpl0yCjC7_Z2ZGKHpM');
