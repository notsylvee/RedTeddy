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

    const updates = await client.channels.fetch("1265926416168517693");
    updates.send("I am now online/have been updated!");
  },
};