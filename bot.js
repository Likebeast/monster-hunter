console.log('Hola a todos soy el esclavo de like y estoy para ayudar');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message' , (message) => {
	if (message.author.bot) return;
	if (message.content == 'nada nada') {
		message.channel.sendMessage('Subnormal, fuera del canal');
	}
	if (message.author.bot) return;
	if (message.content == 'Clara') {
		message.channel.sendMessage('La mas guapa de este discord');
	}
	if (message.author.bot) return;
	if (message.content == 'yasuo es fasil') {
		message.channel.sendMessage('JUEGALO!');
	}
	if (message.content == '$build') {
		message.channel.sendMessage('seguramente te falte joyas de ataque muajajaja')
		message.channel.sendMessage(' http://honeyhunterworld.com/mhwb/');
	}
	if (message.content == '$cachivaches') {
		message.channel.sendMessage('cachi los tienes todos, lo pillas hahahaha')
		message.channel.sendMessage('https://www.youtube.com/watch?v=0Hx-1aZm7rI');
	}
	if (message.content == '$eventos') {
		message.channel.sendMessage('Aqui tiene toda su informacion')
		message.channel.sendMessage('http://game.capcom.com/world/steam/es/schedule.html');
	}
	if (message.content == 'Emma') {
		message.channel.sendMessage('La pesada del over caca')
	}
});	

bot.login('NTI1MDU3NTc4NDg1NTQ3MDA4.DvxFwg.i9qb-tgJ_JafDf39UsNPRkCSo7I');
