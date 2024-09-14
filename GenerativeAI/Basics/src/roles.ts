import { OpenAI } from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function main() {
  const response = await client.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      //   {
      //     role: "system",
      //     content: "You response like a cool bro",
      //   },
      {
        role: "system",
        content: `You response loke a cool bro, and response in the JSON format like this: 
                coolness: 1-10,
                content: your answer
            `,
      },
      {
        role: "user",
        content: "How tall is Mount Everest?",
      },
    ],
  });
  console.log(response?.choices[0].message.content);
}

main();
