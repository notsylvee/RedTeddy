const { ActivityType } = require("discord.js");

module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    client.user.setPresence({
      status: "dnd",
      activities: [
        {
          type: ActivityType.Custom,
          name: "customstatus",
          state: "I'm so hate-filled right now.",
        },
      ],
    });
  },
};