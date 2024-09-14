import { OpenAI } from "openai";
import { encoding_for_model } from "tiktoken";

const MAX_TOKENS = 700;
const encoder = encoding_for_model("gpt-3.5-turbo");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const context: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
  {
    role: "system",
    content: "You are a helpful chatbot",
  },
];

async function createChatCompletion() {
  const response = await client.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: context,
  });

  const responseMessage = response.choices[0].message;
  context.push({
    role: "assistant",
    content: responseMessage.content,
  });

  if (response.usage && response.usage.total_tokens > MAX_TOKENS) {
    deleteOlderMessages();
  }

  const role = response?.choices[0].message.role;
  const content = response?.choices[0].message.content;
  console.log(`${role}: ${content}`);
}

process.stdin.addListener("data", async function (input) {
  const userInput = input.toString().trim();
  context.push({
    role: "user",
    content: userInput,
  });
  await createChatCompletion();
});

function deleteOlderMessages() {
  let contextLength = getContextLength();
  while (contextLength > MAX_TOKENS) {
    for (let i = 0; i < context.length; i++) {
      const message = context[i];
      if (message.role !== "system") {
        context.splice(i, 1);
        contextLength = getContextLength();
        console.log("New Context Length: ", contextLength);
        break;
      }
    }
  }
}

function getContextLength() {
  let length = 0;
  context.forEach((message) => {
    if (typeof message.content === "string") {
      length += encoder.encode(message.content).length;
    } else if (Array.isArray(message.content)) {
      message.content.forEach((contextMessage) => {
        if (contextMessage.type === "text") {
          length += encoder.encode(contextMessage.text).length;
        }
      });
    }
  });
  return length;
}
