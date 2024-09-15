import { createReadStream, writeFileSync } from "fs";
import { OpenAI } from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

async function createTranscription() {
    const response = await openai.audio.transcriptions.create({
      model: "whisper-1",
      file: createReadStream("harvard.wav"),
      language: "en",
    });

    console.log(response);
}

async function textToSpeech() {
    const sampleText = `Generative AI refers to a class of artificial intelligence models that 
        are capable of creating new, original content—such as text, images, audio,
        or even code—by learning from patterns in data.`;
    
    const response = await openai.audio.speech.create({
        input: sampleText,
        model: "tts-1",
        voice: "shimmer",
        response_format: "mp3",
    });

    const buffer = Buffer.from(await response.arrayBuffer());
    writeFileSync("Speech.mp3", buffer);    
}

// createTranscription();
textToSpeech();