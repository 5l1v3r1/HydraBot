const Discord = require('discord.js');
const moment = require('moment');

module.exports = {
	name: 'serverinfo',
	description: 'Display the current servers information.',
	// eslint-disable-next-line no-unused-vars
	execute(message, args, user) {
		const servericon = message.guild.iconURL;
		const serverEmbed = new Discord.RichEmbed()
			.setColor('#0099ff')
			.setTitle('Server Information')
			.setURL('https://discord.gg/TWxeQGx')
			.setDescription('Hydra Multipurpose Bot')
			.addField('Owner', `${message.guild.owner}`, true)
			.addField('Total Users', `${message.guild.members.filter(m => m.presence.status !== 'offline').size} / ${message.guild.memberCount}`, true)
			.addField('Server Region', `${message.guild.region}`, true)
			.addField('Roles', `${message.guild.roles.size}`, true)
			.addField('Text Channels', `${message.guild.channels.filter(c => c.type === 'text').size}`, true)
			.addField('Voice Channels', `${message.guild.channels.filter(v => v.type === 'voice').size}`, true)
			.setThumbnail(servericon)
			.setFooter(`ID: ${message.guild.id} | Server Created - ${moment(message.guild.createdAt).format('DD/MM/YYYY')}`, (servericon));
		message.channel.send(serverEmbed);
	},
};