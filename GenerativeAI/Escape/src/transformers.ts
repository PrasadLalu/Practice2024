import wavefile from "wavefile";
import { pipeline } from "@xenova/transformers";

async function embeddings() {
  const extractor = await pipeline(
    "feature-extraction",
    "Xenova/all-MiniLM-L6-v2"
  );
  const output = await extractor("First local embeddings", {
    pooling: "mean",
    normalize: true,
  });

  console.log(output);
}

async function generateText() {
  const generator = await pipeline(
    "text2text-generation",
    "Xenova/LaMini-Flan-T5-783M"
  );
  const result = await generator("Give a list of Generative AI books", {
    max_new_tokens: 200,
    temperature: 0.7,
    repetition_penalty: 2.0,
  });
  console.log(result);
}

async function speechRecognition() {
  let transcriber = await pipeline(
    "automatic-speech-recognition",
    "Xenova/whisper-small.en"
  );
  let url =
    "https://huggingface.co/datasets/Xenova/transformers.js-docs/resolve/main/jfk.wav";
  let buffer = Buffer.from(await fetch(url).then((x) => x.arrayBuffer()));

  let wav = new wavefile.WaveFile(buffer);
  wav.toBitDepth("32f");
  wav.toSampleRate(16000);

  let audioData = wav.getSamples();
  if (Array.isArray(audioData)) {
    if (audioData.length > 1) {
      const SCALING_FACTOR = Math.sqrt(2);

      // Merge channels (into first channel to save memory)
      for (let i = 0; i < audioData[0].length; ++i) {
        audioData[0][i] =
          (SCALING_FACTOR * (audioData[0][i] + audioData[1][i])) / 2;
      }
    }

    // Select first channel
    audioData = audioData[0];
  }

  // Transcribe an audio file, loaded from a URL.
  let result = await transcriber(audioData);
  console.log(result);
}

// embeddings();
// generateText();
speechRecognition();
