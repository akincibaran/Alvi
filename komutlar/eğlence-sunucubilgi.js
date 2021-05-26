const Discord = require('discord.js');

exports.run = async(client, msg, message) => {
               const snekfetch = require("snekfetch");
snekfetch.get(`https://discordbots.org/api/bots/${client.user.id}/check?userId=${message.author.id}`)
.set("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgyODI2NzQ3NDE5MjU2NDI0NSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjIyMDQyNTMyfQ.912A76CIQeNWr9UIDD6ZLSkDZK_ZenMicw6KuombmhE")
.then(response => {
  var check = response.body.voted;
if(check == 1) {
function checkDays(date) {
            let now = new Date();
            let diff = now.getTime() - date.getTime();
            let days = Math.floor(diff / 86400000);
            return days + (days == 1 ? " gün" : " gün") + " önce";
        };
        let guild = msg.channel.guild
        let serverSize = msg.guild.memberCount;
        let botCount = msg.guild.members.cache.filter(m => m.user.bot).size;
        let humanCount = serverSize - botCount;
        let verifLevels = ["Yok","Düşük hesapta e-posta doğrulanmış olmalıdır", "Orta - Discord'a 5 dakikadan daha uzun süre kayıtlı olmalıdır", "Yüksek - (╯ ° □ °） ╯︵ ┻━┻ - sunucunun üyesi 10 dakikadan uzun olmalıdır", "Çok Yüksek - ┻━┻ ミ ヽ (ಠ 益 ಠ) ﾉ 彡 ┻━┻ - doğrulanmış bir telefon numarasına sahip olmalıdır"];
	let region = {
			"us-central": "Amerika :flag_us:",
			"us-east": "Doğu Amerika :flag_us:",
			"us-south": "Güney Amerika :flag_us:",
			"us-west": "Batı Amerika :flag_us:",
			"eu-west": "Batı Avrupa :flag_eu:",
			"eu-central": "Avrupa :flag_eu:",
			"singapore": "Singapur :flag_sg:",
			"london": "Londra :flag_gb:",
			"japan": "Japonya :flag_jp:",
			"russia": "Rusya :flag_ru:",
			"hongkong": "Hong Kong :flag_hk:",
			"brazil": "Brezilya :flag_br:",
			"singapore": "Singapur :flag_sg:",
			"sydney": "Sidney :flag_au:",
			"southafrica": "Güney Afrika :flag_za:",
    "amsterdam": "Hollanda :flag_nl:",
				"europe": "Avrupa :flag_eu:"

	}


			const yukleniyor = msg.channel.send(`Sunucu Bilgileri Araştırılıyor`);

let sunucu = new Discord.MessageEmbed()
.setAuthor('Sunucu Bilgi', msg.guild.iconURL())
.setThumbnail(msg.guild.iconURL())
.addField('Sunucu Bilgileri', `Sunucu İsmi: **${guild.name}** \nSunucu ID: **${msg.guild.id}** \nSunucu Sahibi: **${guild.owner}** \nBulunduğu Bölge: **${region[msg.guild.region]}** \nKuruluş Tarihi: **${checkDays(msg.guild.createdAt)}** 
`)
.addField(`Üye Bilgileri `, `Toplam Üye: **${humanCount}** \nToplam Bot: **${botCount}** \nRol Sayısı: **${guild.roles.cache.size}**`)
.addField(`Kanallar`, ` Yazı: **${msg.guild.channels.cache.filter(c => c.type === 'text').size}** \n Sesli: **${msg.guild.channels.cache.filter(c => c.type === 'voice').size}** \n Kategori: **${msg.guild.channels.cache.filter(c => c.type === 'category').size}**`)
.setTimestamp()
.setColor('#D2EE07')
.setFooter('Sunucu Bilgi', msg.guild.iconURL())
        return yukleniyor.edit('', sunucu);
     } else {
  const ayarlar = require('../ayarlar.json')
  let embed = new Discord.MessageEmbed()
        .setTitle('HATA')
        .setColor('RANDOM')
        .setDescription(`
${ayarlar.hata} Bu komutu kullanmak için **12 saat aralıkla** **[Tıkla](https://discordbots.org/bot/${client.user.id}/vote)**  botu oylamanız gerekmektedir. Onaylanması **1-2** dakikayı bulabilir, lütfen bekleyin. `)
      message.channel.send(embed)
        return }});
  
}; 

module.exports.conf = {
aliases: ['sunucubilgi','sb','sunucu'],
permLevel: 0, 
kategori: 'Sunucu'
};

module.exports.help = {
    name: 'sunucu-bilgi',
    description: 'Sunucu hakkında bilgi verir.',
    usage: 'sunucu-bilgi'
};