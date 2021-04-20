const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

let kanal = db.fetch(`kayıtkanal_${message.guild.id}`)
let alınacakrol = db.fetch(`alınacakrol_${message.guild.id}`)
let erkekrol = db.fetch(`erkekrol_${message.guild.id}`)
let kayıtçı = db.fetch(`kayıtçırol_${message.guild.id}`)
let kayıtsayı = db.fetch(`kayıtsayı_${message.author.id}`)

let modlog = message.guild.channels.find('name', 'kayıtlog');
if (!modlog) return message.reply('`kayıtlog` kanalını bulamıyorum. Ayarlamak için `a!kayıtlog #kayıtlog`');
if(!message.member.roles.cache.has(kayıtçı)) return message.channel.send(new discord.MessageEmbed().setDescription(`Bu Komudu Kullanabilmen İçin <@&${kayıtçı}> Adlı Role Sahip olman Lazım ! `).setColor("RANDOM"))
if(message.channel.id !== kanal) return message.channel.send(new discord.MessageEmbed().setDescirpion(`Bu Komudu Sadece <#${kanal}> Adlı Kanalda Kullanabilirsin ! `).setColor("RANDOM"))
if (!erkekrol) return message.channel.send(new discord.MessageEmbed().setDescription(`Sunucuda Erkek Rolü Ayarlanmadığı İçin Komut Kullanılamaz ! `).setColor("RANDOM"))

let member = message.mentions.members.first();
if (!member) return message.channel.send(new discord.MessageEmbed().setDescripiton(`Erkek Olarak Kayıt Edeceğin Kullanıcıyı Belirtmelisin ! `).setColor("RANDOM"))
let isim = args[1]
if (!isim) return message.channel.send(new discord.MessageEmbed().setDescription(`İsim Belirtmelisin!`).setColor("RANDOM"))
let yaş = args[2]
if (!yaş) return message.channel.send(new discord.MessageEmbed().setDescription(`Yaş Belirtmelisin!`).setColor("RANDOM"))
member.setNickname(`${isim} | ${yaş}`)
member.roles.remove(alınacakrol)
member.roles.add(erkekrol)

const darkcode = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL)  
.setTitle(`${client.user.username} - Erkek `)
.setColor('BLACK')
.setDescription(`Erkek Olarak Kayıt Edilen Kullanıcı: ${member} \n Erkek Olarak Kayıt Eden Yetkili: <@!${message.author.id}> \n Erkek Olarak Kayıt Eden Kullanıcının Kayıt Sayısı: **${kayıtsayı ? `${kayıtsayı}` : "0"}**`)
.addField(`Kayıt Edilenin İsmi;`, `${isim}`, true)
.addField(`Kayıt Edilenin Yaşı;`, `${yaş}`, true)
return message.guild.channels.get(modlog.id).sendEmbed(darkcode);
db.add(`kayıtsayı_${message.author.id}`, 1)
}
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['e'],
  permlevel: 0
}
exports.help = {
  name: 'erkek',
  description: 'erkek olarak kayıt eder',
  usage: '!erkek @kullanıcı isim yaş'
}