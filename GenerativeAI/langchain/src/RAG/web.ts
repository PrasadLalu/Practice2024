
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { CheerioWebBaseLoader } from "@langchain/community/document_loaders/web/cheerio";

const model = new ChatOpenAI({
  modelName: "gpt-3.5-turbo",
  temperature: 0.7,
});

const question = "What are langchain Productionization?";

async function main() {
  const loader = new CheerioWebBaseLoader(
    "https://js.langchain.com/v0.2/docs/introduction"
  );
  const docs = await loader.load();

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 200,
    chunkOverlap: 20,
  });
  const splittedDocs = await splitter.splitDocuments(docs);

  const vectorStore = new MemoryVectorStore(new OpenAIEmbeddings());
  await vectorStore.addDocuments(splittedDocs);

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
