const Discord = require('discord.js');
const data = require('quick.db')
const ayarlar = require('../ayarlar.json');
exports.run = async (client, message, args) => {
const prefix = ayarlar.prefix;
const ad = await data.fetch(`numara.${message.channel.id}`)
if(message.channel.name === `ticket-${ad}` || message.channel.name === `closed-${ad}`) {
const ann = await data.fetch(`asd.${message.guild.id}.${message.channel.id}.${message.author.id}`)
if(!ann) return message.channel.send(`Bu bilet senin değil.`)
message.delete()
message.channel.send(new Discord.RichEmbed()
.setColor('RED')
.setDescription(`Bilet 5 saniye sonra ebediyen silinecek.`))
setTimeout(async () => {
message.channel.delete()
data.delete(`asd.${message.guild.id}.${message.channel.id}.${message.author.id}`)
}, 5000)
} else { return message.channel.send(`Bu komutu bir bilet kanalında kullanın.`) }

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ticket-sil"],
  permLevel: 0
}

exports.help = {
  name: 'bilet-sil'
};