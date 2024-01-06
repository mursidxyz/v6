const fetch = require('node-fetch');
const { generateWAMessageFromContent } = require('@adiwajshing/baileys');
const fs = require('fs');
const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({ organization: 'org-YTm2W712qK86duKmH9tGmUr6', apiKey: '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' });
const openai = new OpenAIApi(configuration);

let handler = async (m, { conn, usedPrefix, command, text }) => {
  try {
    if (!text) throw new Error(`Chat dengan AI.\n\nContoh:\n${usedPrefix}${command} Halo?`);

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: text }],
    });

    conn.reply(m.chat, `${response.data.choices[0].message.content}`, m);

  } catch (error) {
    console.log(error);
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
      conn.reply(m.chat, `${error.response.status}\n\n${error.response.data}`, m);
    } else {
      conn.reply(m.chat, `${error.message}`, m);
    }
  }
};

handler.command = /^(ai|openai|chatgpt)$/i;
handler.help = ["ai", "openai", "chatgpt"].map(v => v + " <teks>");
handler.tags = ["internet"];
handler.fail = null;

handler.limit = true;
handler.exp = 0;

module.exports = handler;
