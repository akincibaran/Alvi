const Discord = require('discord.js');
const fs = require('fs');
let küfürEngel = JSON.parse(fs.readFileSync("./jsonlar/kufurEngelle.json", "utf8"));

var ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(new Discord.MessageEmbed().setDescription(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`));
            if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;

 let args = message.content.split(' ').slice(1);
 const secenekler = args.slice(0).join(' ');

 var errembed = new Discord.MessageEmbed()
 .setColor("RANDOM")
 .setDescription(`Yanlış Kullanım!`)
 .addField(`Doğru Kullanım:`, `${ayarlar.prefix}küfür-engelle aç veya kapat`)
 //if(secenekler === "aç" || "kapat") return message.channel.send(errembed);
   if(secenekler.length < 1) return message.reply(new Discord.MessageEmbed().setDescription("Küfür Engelleme Açmak İçin `a!küfür-engelle aç` kapatmak için `a!küfür-engelle kapat`")).then(m => m.delete(10000));

    message.delete();

   if (secenekler === "aç") {
  message.channel.send(new Discord.MessageEmbed().setDescription(`Küfür Engelleme Sistemi: **açık**!`))
  küfürEngel[message.guild.id] = {
   küfürEngel: "acik"
    };

    fs.writeFile("./jsonlar/kufurEngelle.json", JSON.stringify(küfürEngel), (err) => {
   if (err) console.log(err)
    });
 };

 if (secenekler === "kapat") {
  message.channel.send(new Discord.MessageEmbed().setDescription(`Küfür Engelleme Sistemi: **kapalı**!`))
   küfürEngel: "kapali"
    };

  fs.writeFile("./jsonlar/kufurEngelle.json", JSON.stringify(küfürEngel), (err) => {
   if (err) console.log(err)
    });
 };

 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['küfürengel','küfür-engelle','küfür-engel'],
  permLevel: 3
   };

   exports.help = {
  name: 'küfürengelle',
  description: 'Küfür engelleme sistemini açıp kapatmanızı sağlar.',
  usage: 's$küfür-engelle aç veya kapat'
   };