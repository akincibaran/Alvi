const Discord = require("discord.js");
const data = require("quick.db");
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
 const db = require("quick.db")
let premium = db.has(`premium.${message.guild.id}`) ? "Premium Aktif" : "Premium Aktif Değil!"
if(premium !== db.fetch(`premium.${message.guild.id}`)) {
if (premium == "Premium Aktif Değil!") {
let pre = new Discord.MessageEmbed()
.setDescription(`Sunucunuz **Premium** olmadığı için kullanamazsınız.`)
.setColor("RED")
 return message.channel.send(pre).then(msg=>msg.delete(5000));
}};
  
  
  /*
  
  if(message.author.id !== ayarlar.ownerID)
  if(message.author.id !== ayarlar.ownerİD)  {
    const embed = new Discord.MessageEmbed()
    .setDescription(`**:x: Bu Komut Yapımcıma Özeldir !**`)
    .setColor('BLUE')
    return message.channel.send(embed).then(msg=>msg.delete(5000));
    }
  
  */
  if (premium == "Premium Aktif") {

let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
  if (!args[0]) {
    message.delete();
    return message.channel
      .send(`Komutu düzgün kullanın: \`[Etiket/Rol] (kanal)\``)
      .then(c => c.delete(10000));
  }

  if (args[0]) {
    if (!args[1]) {
      const ad = await data.fetch(`numara.${message.channel.id}`);
      if (
        !message.channel.name === `ticket-${ad}` ||
        message.channel.name === `closed-${ad}`
      ) {
        const ann = await data.fetch(
          `asd.${message.guild.id}.${message.channel.id}.${message.author.id}`
        );
        if (!ann) return message.channel.send(`Bu bilet senin değil.`);
        message.delete();
        return message.channel
          .send(`Bu komutu bir bilet kanalında kullanın.`)
          .then(c => c.delete(5000));
      }
    }

    let mt = message.mentions.roles.first() || message.mentions.users.first();
    if (!mt) {
      message.delete();
      return message.channel.send(
        `Komutu düzgün kullanın: \`[Etiket/Rol] (kanal)\``
      );
    }
    let mention =
      message.guild.roles.get(mt.id) || message.guild.members.get(mt.id);
    if (!mention) {
      message.delete();
      return message.channel.send(
        `Komutu düzgün kullanın: \`[Etiket/Rol] (kanal)\``
      );
    }

    if (args[1]) {
      if (message.mentions.channels.first()) {
        let ch = message.mentions.channels.first();
        const ad = await data.fetch(`numara.${message.channel.id}`);
        if (!ch.name === `ticket-${ad}` || ch.name === `closed-${ad}`) {
          message.delete();
          return message.channel
            .send(`Bir bilet kanalı değil.`)
            .then(c => c.delete(5000));
        }
        const ann = await data.fetch(
          `asd.${message.guild.id}.${ch.id}.${message.author.id}`
        );
        if (!ann) return message.channel.send(`Bu bilet senin değil.`);
        ch.createOverwrite(mt, { SEND_MESSAGES: true, READ_MESSAGES: true });
        message.delete();
        const emb = new Discord.MessageEmbed()
          .setColor(`#00ff00`)
          .setDescription(`${mt}: ${ch} kanalına eklendi.`);
        return message.channel.send(emb);
      }
    }

    message.channel.createOverwrite(mt, {
      SEND_MESSAGES: true,
      READ_MESSAGES: true
    });
    message.delete();
    const emb = new Discord.MessageEmbed()
      .setColor(`#00ff00`)
      .setDescription(`${mt}: ${message.channel} kanalına eklendi.`);
    return message.channel.send(emb);
  }}
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["bilet-ekle"],
  permLevel: 0
};

exports.help = {
  name: "ticket-ekle"
};
