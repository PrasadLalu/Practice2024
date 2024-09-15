import { readFileSync, writeFileSync } from "fs";
import { OpenAI } from "openai";
import { dirname, join } from "path";
console.log();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export type DataWithEmbeddings = {
  input: string;
  embedding: number[];
};

export async function generateEmbeddings(input: string | string[]) {
  const response = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: input,
  });
  return response;
}

// generateEmbeddings(['Cat on the roof', 'Dog on the car']);

export function loadJSONData<T>(fileName: string): T {
  const path = join(__dirname, fileName);
  const rowData = readFileSync(path);
  return JSON.parse(rowData.toString());
}

function saveDataToJsonFile(data: any, fileName: string) {
  const dataString = JSON.stringify(data);
  const dataBuffer = Buffer.from(dataString);
  const path = join(__dirname, fileName);
  writeFileSync(path, dataBuffer);
  console.log(`Save data to ${fileName}`);
}

async function main() {
  const data = loadJSONData<string[]>("data2.json");
  const embeddings = await generateEmbeddings(data);
  const dataWithEmbeddings: DataWithEmbeddings[] = [];

  for (let i = 0; i < data.length; i++) {
    dataWithEmbeddings.push({
      input: data[i],
      embedding: embeddings.data[i].embedding,
    });
  }
  saveDataToJsonFile(dataWithEmbeddings, "dataWithEmbeddings2.json");
}

main();
