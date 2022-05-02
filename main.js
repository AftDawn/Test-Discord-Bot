const discord = require('discord.js');
const dotenv = require('dotenv');

const client = new discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });

dotenv.config();

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		interaction.reply('pong');
	}
	else if (commandName === 'server') {
		interaction.reply(`Server name: ${interaction.guild.name}\nServer ID: ${interaction.guild.id}\nServer owner: ${interaction.guild.owner.user.tag}\nServer count: ${interaction.guild.memberCount}`);
	}
	else if (commandName === 'user') {
		interaction.reply(`User name: ${interaction.user.tag}\nUser ID: ${interaction.user.id}`);
	}
});

// Login to Discord with your client's token
client.login(process.env.TOKEN);