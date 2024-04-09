const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const dotenv = require('dotenv');

dotenv.config();

const menu = ["𝐭𝐨𝐝𝐚𝐲 𝐦𝐞𝐧𝐮 : Somtum 🌶","𝐭𝐨𝐝𝐚𝐲 𝐦𝐞𝐧𝐮 : Laab 🌶","𝐭𝐨𝐝𝐚𝐲 𝐦𝐞𝐧𝐮 : PadThai 🍝","𝐭𝐨𝐝𝐚𝐲 𝐦𝐞𝐧𝐮 : PadSeeEW 🍝","𝐭𝐨𝐝𝐚𝐲 𝐦𝐞𝐧𝐮 : Noodle 🍜","𝐭𝐨𝐝𝐚𝐲 𝐦𝐞𝐧𝐮 : PadKraPao 🌶🍚","𝐭𝐨𝐝𝐚𝐲 𝐦𝐞𝐧𝐮 : KhanaMooKrob 🥬🍚","𝐭𝐨𝐝𝐚𝐲 𝐦𝐞𝐧𝐮 : FriedRice 🍚","𝐭𝐨𝐝𝐚𝐲 𝐦𝐞𝐧𝐮 : TomYum 🍲","𝐭𝐨𝐝𝐚𝐲 𝐦𝐞𝐧𝐮 : TomKhaGai 🍲","𝐭𝐨𝐝𝐚𝐲 𝐦𝐞𝐧𝐮 : Kaengsom 🍲","𝐭𝐨𝐝𝐚𝐲 𝐦𝐞𝐧𝐮 : KhaoSoi 🍜","𝐭𝐨𝐝𝐚𝐲 𝐦𝐞𝐧𝐮 : LengSabb 🌶🥩","𝐭𝐨𝐝𝐚𝐲 𝐦𝐞𝐧𝐮 : Tacos 🌮","𝐭𝐨𝐝𝐚𝐲 𝐦𝐞𝐧𝐮 : Burrito 🌯","𝐭𝐨𝐝𝐚𝐲 𝐦𝐞𝐧𝐮 : Malah 🌶🍢","𝐭𝐨𝐝𝐚𝐲 𝐦𝐞𝐧𝐮 : MooKrata 🥘","𝐭𝐨𝐝𝐚𝐲 𝐦𝐞𝐧𝐮 : Burger 🍔","𝐭𝐨𝐝𝐚𝐲 𝐦𝐞𝐧𝐮 : Omelet 🍳","𝐭𝐨𝐝𝐚𝐲 𝐦𝐞𝐧𝐮 : Pasta 🍝","𝐭𝐨𝐝𝐚𝐲 𝐦𝐞𝐧𝐮 : Pizza 🍕","𝐭𝐨𝐝𝐚𝐲 𝐦𝐞𝐧𝐮 : sushi 🍣"]

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'menu') {
    await interaction.reply(menu[Math.floor(Math.random() * menu.length)]);
  }
});

client.login(process.env.TOKEN);
