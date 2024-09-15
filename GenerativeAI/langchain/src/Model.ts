import { ChatOpenAI } from "@langchain/openai";

const model = new ChatOpenAI({
  modelName: "gpt-3.5-turbo",
  temperature: 0.8,
  maxTokens: 700,
  verbose: false,
});

async function main() {
  // 1
  const response = await model.invoke("Give me four books to read");
  console.log(response.content);

  // // 2
  // const response = await model.batch([
  //     "How are you today?",
  //     "Capital city of India?"
  // ]);
  // console.log(response);

  // // 3
  // const response = await model.stream("Give me four books to read");
  // for await (const chunk of response) {
  //     console.log(chunk.content);
  // }
}

main();
