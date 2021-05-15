const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
const db = require('quick.db')
let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
let embed = new Discord.MessageEmbed()
.setTitle(`Alvi - Moderasyon3`)
.setColor("RANDOM")
.setDescription(`
\`${prefix}prefix ayarla/sıfırla\` Botun prefixini ayarlar,sıfırlar.
\`${prefix}ban-sistemi\` Ban komutlarını açar.
\`${prefix}ayarlar\` Sunucudaki ayarlanan herşeyi gösterir.
\`${prefix}mute-sistemi\` Mute komutlarını açar.
\`${prefix}reklam-engel aç/kapat\` Reklam engel açar,kapatır.
~~\`${prefix}botlist-sistemi\` Botlist komutlarını açar.~~

`)
message.channel.send(embed)
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["yardım-mod3"],
 permlevel: 0
};

exports.help = {
    name: "yardım-moderasyon3"
};