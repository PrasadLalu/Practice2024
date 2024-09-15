import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import {
  StringOutputParser,
  CommaSeparatedListOutputParser,
} from "@langchain/core/output_parsers";
import { StructuredOutputParser } from "langchain/output_parsers";

const model = new ChatOpenAI({
  modelName: "gpt-3.5-turbo",
  temperature: 0.7,
});

async function stringParser() {
  const prompt = ChatPromptTemplate.fromTemplate(
    "Write a short description of the following product: {product_name}"
  );

  const stringParser = new StringOutputParser();

  const chain = prompt.pipe(model).pipe(stringParser);
  const response = await chain.invoke({
    product_name: "bicycle",
  });

  console.log(response);
}

async function commSeparatedParser() {
  const prompt = ChatPromptTemplate.fromTemplate(
    "Provide the first 5 ingredients, separated by commas, for: {word}"
  );
  const parser = new CommaSeparatedListOutputParser();

  const chain = prompt.pipe(model).pipe(parser);
  const response = await chain.invoke({
    word: "bred",
  });

  console.log(response);
}

async function structuredParser() {
  const prompt = ChatPromptTemplate.fromTemplate(`
    Extract information from the following phrase. 
    Formatting instructions: {format_instructions}
    Phrase: {phrase}
    `);

  const parser = StructuredOutputParser.fromNamesAndDescriptions({
    name: "the name of the person",
    likes: "what the person likes",
  });

  const chain = prompt.pipe(model).pipe(parser);
  const response = await chain.invoke({
    phrase: "John is likes Pineapple pizza",
    format_instructions: parser.getFormatInstructions(),
  });
  console.log(response);
}

// stringParser();
// commSeparatedParser();
structuredParser();
