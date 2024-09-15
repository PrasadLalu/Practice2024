import { ChatOpenAI } from "@langchain/openai";
import { PromptTemplate, ChatPromptTemplate } from "@langchain/core/prompts";

const model = new ChatOpenAI({
  modelName: "gpt-3.5-turbo",
  temperature: 0.7,
});

async function fromTemplate() {
  const prompt = PromptTemplate.fromTemplate(
    "Write a short description of the following product: {product_name}"
  );

  const chain = prompt.pipe(model);
  const response = await chain.invoke({
    product_name: "bicycle",
  });

  console.log(response.content);
}

async function fromMessage() {
  const prompt = ChatPromptTemplate.fromMessages([
    [
      "system",
      "Write a short description for the product provided by the user",
    ],
    ["human", "{product_name}"],
  ]);

  const chain = prompt.pipe(model);
  const response = await chain.invoke({
    product_name: "bicycle",
  });

  console.log(response.content);
}

// fromTemplate();
fromMessage();
