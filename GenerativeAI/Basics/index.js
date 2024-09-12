require('dotenv').config();
const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function main() {
    const response = await client.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "user",
          content: "Name of the country which have largest population.",
        },
      ],
    });
    console.log(response?.choices[0].message.content);
}

main();