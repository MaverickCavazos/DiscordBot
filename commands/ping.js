const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data:new SlashCommandBuilder()
    .setName('sayhi')
    .setDescription('Saying hello to gabe')
    ,
    async execute(interaction)
    {
        await interaction.reply('@LittleMoon Hey Gabe!');
    }
}