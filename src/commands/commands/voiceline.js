module.exports = {
    data: {
        name: "voiceline",
        description: "Sends a random Red Teddy voiceline",
        "integration_types": [0, 1],
        "contexts": [0, 1, 2]
    },
    async execute(interaction) {

        const voicelines = [
            "Don't TOUCH ME!",
            "Go eat an anvil.",
            "I don't like you.",
            "I HATE YOU!",
            "I have a knuckle-sandwich with your name on it.",
            "I'm full of hate.",
            "I'm so hate-filled right now.",
            "I want you to eat an anvil.",
            "You're ill.",
            "You're mentally ill.",
            "You disgust me.",
            "Your oven's on, you left your oven on.",
            "You should burn.",
            "You're a LOSER!",
            "I don't wanna see you.",
            "Excuse me?",
            "Who do you think you are?",
            "What's in your pocket? What did you just put in your pocket?",
            "You would tell me if you stole something, right?",
            "Jump off of a microwave."
        ];
        const voiceline = voicelines[Math.floor(Math.random() * voicelines.length)];
    
        await interaction.reply({ content: `${voiceline}`, ephemeral: false });
      },
}