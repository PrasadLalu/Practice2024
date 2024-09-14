import { encoding_for_model } from 'tiktoken';

function encodePrompt() {
    const prompt = 'Best programming language for Generative AI?';
    const encoder = encoding_for_model('gpt-3.5-turbo');
    const words = encoder.encode(prompt);
    console.log(words);
}

encodePrompt();
