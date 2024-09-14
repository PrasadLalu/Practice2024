import OpenAI, { } from "openai";

const client = new OpenAI({
    apiKey: "",
});

async function main() {
    const response = await client.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{
            role: "user",
            content: "Top "
        }]
    })
}