import { OpenAI } from "openai";

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

async function main() {
    const response = await client.chat.completions.create({
        model: "gpt-4o",
        messages: [{
            role: "user",
            content: "Best programming language for Generative AI?"
        }]
    });
    console.log(response.choices[0].message.content);
}

main();
