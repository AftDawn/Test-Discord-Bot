const discord = require('discord.js');
const dotenv = require('dotenv');

const client = new discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });

dotenv.config();

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

// Login to Discord with your client's token
client.login(process.env.TOKEN);