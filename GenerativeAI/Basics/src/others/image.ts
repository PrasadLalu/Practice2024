import { writeFileSync } from "fs";
import { OpenAI } from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateFreeImage() {
  const response = await client.images.generate({
    model: "dall-e-2",
    prompt: "A photo of a cat on the mat",
    style: "vivid",
    size: "256x256",
    quality: "standard",
    n: 1,
  });
  console.log(response);
}

async function generateFreeLocalImage() {
  const response = await client.images.generate({
    prompt: "A photo of a cat on the mat",
    model: "dall-e-2",
    style: "vivid",
    size: "256x256",
    quality: "standard",
    n: 1,
    response_format: "b64_json",
  });
  const rawImage = response.data[0].b64_json;

  if (rawImage) {
    writeFileSync("cat.png", Buffer.from(rawImage, "base64"));
  }
}

async function generateAdvanceImage() {
  const response = await client.images.generate({
    prompt: "A photo of a city at night with skyscrapers",
    model: "dall-e-3",
    quality: "hd",
    size: "1024x1024",
    n: 1,
    response_format: "b64_json",
  });
  const rawImage = response.data[0].b64_json;

  if (rawImage) {
    writeFileSync("city.png", Buffer.from(rawImage, "base64"));
  }
}

// generateFreeImage();
// generateFreeLocalImage();
generateAdvanceImage();
