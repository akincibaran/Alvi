const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
  const db = require('quick.db')
  let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
let embed = new Discord.MessageEmbed()
.setTitle(`Alvi - BanSistemi`)
.setColor("RANDOM")
.setDescription(`
\`${prefix}bansay | ${prefi` Banlananları sayar. 
\`${prefix}ban-yetkili @Yetkili\` Banlayacak rolü ayarlar. 
\`${prefix}ban-log\` Banlananların logunu tutar.`)
message.channel.send(embed)
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ["yardım-ban"],
 permLevel: 0

};
exports.help = {
    name: "ban-sistemi"
};