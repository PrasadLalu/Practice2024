import { Document } from "@langchain/core/documents";
import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { MemoryVectorStore } from "langchain/vectorstores/memory";

const model = new ChatOpenAI({
  modelName: "gpt-3.5-turbo",
  temperature: 0.7,
});

const myData = [
  "My name is John.",
  "My name is Bob.",
  "My favorite food is pizza.",
  "My favorite food is pasta.",
];

const question = "What are my fevorite food?";

async function main() {
  const vectorStore = new MemoryVectorStore(new OpenAIEmbeddings());
  await vectorStore.addDocuments(
    myData.map((content) => new Document({ pageContent: content }))
  );

  // create data retriever
  const retriever = vectorStore.asRetriever({
    k: 2,
  });

  // get relevent document
  const results = await retriever.getRelevantDocuments(question);
  const resultDoc = results.map((result) => result.pageContent);

  //build template:
  const template = ChatPromptTemplate.fromMessages([
    [
      "system",
      "Answer the users question based on the following context: {context}",
    ],
    ["user", "{input}"],
  ]);

  const chain = template.pipe(model);
  const response = await chain.invoke({
    input: question,
    context: resultDoc,
  });

  console.log(response?.content);
}

main();
