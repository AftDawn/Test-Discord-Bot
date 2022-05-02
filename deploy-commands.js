const djsbuilder = require('@discordjs/builders');
const djsrest = require('@discordjs/rest');
const djsapi = require('discord-api-types/v9');
const dotenv = require('dotenv');

dotenv.config();

const commands = [
	new djsbuilder.SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
	new djsbuilder.SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
	new djsbuilder.SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
]
	.map(command => command.toJSON());

const rest = new djsrest.REST({ version: '9' }).setToken(process.env.TOKEN);

rest.put(djsapi.Routes.applicationGuildCommands(process.env.CLIENTID, process.env.GUILDID), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);