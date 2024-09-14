import { OpenAI } from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function main() {
  const response = await client.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: "Tell something cool about India?",
      },
    ],
    max_tokens: 100,
    n: 2,
    frequency_penalty: 1.5,
    seed: 1000,
  });
  console.log(response.choices);
}

main();
