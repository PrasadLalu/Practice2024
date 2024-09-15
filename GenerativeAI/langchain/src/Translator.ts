import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";

const model = new ChatOpenAI({
  modelName: "gpt-3.5-turbo",
  temperature: 0.7,
});

async function textTranslator() {
  const systemTemplate = "Translate the following into {language}:";

  const promptTemplate = ChatPromptTemplate.fromMessages([
    ["system", systemTemplate],
    ["user", "{text}"],
  ]);

  const parser = new StringOutputParser();

  const chain = promptTemplate.pipe(model).pipe(parser);
  const response = await chain.invoke({
    language: "hindi",
    text: "A list of tools the model may call. Currently, only functions are supported as a tool.",
  });

  console.log(response);
}

textTranslator();
