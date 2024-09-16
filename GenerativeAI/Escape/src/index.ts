import { rmSync, writeFile } from "fs";
import { HfInference } from "@huggingface/inference";

const inference = new HfInference(process.env.HF_TOKEN);

async function embeddings() {
  const output = await inference.featureExtraction({
    inputs: ["My Cool Embeddings"],
    model: "BAAI/bge-small-en-v1.5",
  });

  console.log(output);
}

async function translate() {
  const result = await inference.translation({
    inputs: "How is the weather in Bengaluru?",
    model: "t5-base",
  });

  console.log(result);
}

async function translate2() {
  const result = await inference.translation({
    model: "facebook/nllb-200-distilled-600M",
    inputs: "How is the weather in Bengaluru?",
    //@ts-ignore
    parameters: {
      src_lang: "eng-Latn",
      tgt_lang: "hin_Deva",
    },
  });
  console.log(result);
}

async function answerQuestion() {
  const result = await inference.questionAnswering({
    inputs: {
      context: "The quick brown fox jumps over the lazy dog",
      // question: "What color is the fox?",
      // question: 'Is the dog lazy?',
      question: "What is the meaning of life?",
    },
  });
  console.log(result);
}

async function textToImage() {
  const result = await inference.textToImage({
    inputs: "Cat in the hat on the mat",
    model: "stabilityai/stable-diffusion-2",
    parameters: {
      negative_prompt: "blurry",
    },
  });

  const buffer = Buffer.from(await result.arrayBuffer());
  writeFile("image.png", buffer, () => {
    console.log("image saved");
  });
}

// embeddings();
// translate();
// translate2();
// answerQuestion();
textToImage();
