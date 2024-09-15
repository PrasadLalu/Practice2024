import { existsSync, readFileSync, writeFileSync } from "fs";
import { OpenAI } from "openai";
import { CreateEmbeddingResponse } from "openai/resources";
import { join } from "path";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

type movie = {
  name: string;
  description: string;
};
const data = loadJSONData<movie[]>("movies.json");

export async function generateEmbeddings(input: string | string[]) {
  const response = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: input,
  });
  return response;
}

export function loadJSONData<T>(fileName: string): T {
  const path = join(__dirname, fileName);
  const rawData = readFileSync(path);
  return JSON.parse(rawData.toString());
}

function saveDataToJsonFile(data: any, fileName: string) {
  const dataString = JSON.stringify(data);
  const dataBuffer = Buffer.from(dataString);
  const path = join(__dirname, fileName);
  writeFileSync(path, dataBuffer);
  console.log(`saved data to ${fileName}`);
}

export async function getMovieEmbeddings() {
    const fileName = "movieEmbeddings.json";

    const filePath = join(__dirname, fileName);
    if (existsSync(filePath)) {
      const descriptionEmbeddings =
        loadJSONData<CreateEmbeddingResponse>(fileName);
      return descriptionEmbeddings;
    } else {
       const descriptionEmbeddings = await generateEmbeddings(
         data.map((d) => d.description)
       );
       saveDataToJsonFile(descriptionEmbeddings, fileName);
       return descriptionEmbeddings;
    }
}
