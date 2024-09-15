import {
  generateEmbeddings,
  getMovieEmbeddings,
  loadJSONData,
} from "./movieEmbedding";
import { dotProduct } from "./similarity";

type movie = {
  name: string;
  description: string;
};

type MovieWithEmbedding = movie & { embedding: number[] };

const data = loadJSONData<movie[]>("movies.json");

console.log("What movies do you like?");
console.log(".........................");
process.stdin.addListener("data", async function (input) {
  let inputMovie = input.toString().trim();
  await recommendMovies(inputMovie);
});

async function recommendMovies(inputMovie: string) {
  const embedding = await generateEmbeddings(inputMovie);
  const descriptionEmbeddings = await getMovieEmbeddings();

  const moviesWithEmbeddings: MovieWithEmbedding[] = [];
  const similarities: { input: string; similarity: number }[] = [];

  for (let i = 0; i < data.length; i++) {
    moviesWithEmbeddings.push({
      name: data[i].name,
      description: data[i].description,
      embedding: descriptionEmbeddings.data[i].embedding,
    });
  }

  for (const movie of moviesWithEmbeddings) {
    const similarity = dotProduct(movie.embedding, embedding.data[0].embedding);
    similarities.push({
      input: movie.name,
      similarity,
    });
  }

  console.log(`If you like ${inputMovie}, we recommend:`);
  console.log(".......................................");
  const sortedSimilarity = similarities.sort(
    (a, b) => b.similarity - a.similarity
  );

  const topFiveMovies = sortedSimilarity.slice(0, 5);
  topFiveMovies.forEach((similarity) => {
    console.log(`${similarity.input}: ${similarity.similarity}`);
  });
}
