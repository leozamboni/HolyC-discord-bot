const { SlashCommandBuilder } = require("discord.js");
const { holy_node_script } = require("../holyc.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("eval")
    .setDescription("Evaluate HolyC snippets")
    .addStringOption((option) =>
      option
        .setName("snippet")
        .setDescription("HolyC code snipper")
        .setRequired(true)
    ),
  async execute(interaction) {
    const snippet = interaction.options.getString("snippet");
    let result = "empty";
    try {
      result = await holy_node_script(snippet);
    } catch (err) {
      result = err;
    }
    if (!result) {
      result = "empty";
    }
    await interaction.reply(result);
  },
};
