import React, { useEffect } from "react";
import "./App.css";
import { Joke } from "./types";
import Jokes from "./components/Jokes";

const categories = [
  "animal",
  "career",
  "celebrity",
  "dev",
  "fashion",
  "food",
  "history",
  "money",
  "movie",
  "music",
  "political",
  "religion",
  "science",
  "sport",
  "travel",
];

function App() {
  const [selectedCategory, setSelectedCategory] = React.useState(categories[0]);
  const [jokes, setJokes] = React.useState<Joke[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchJokes = async () => {
    setIsLoading(true);
    const response = await fetch(
      `https://api.chucknorris.io/jokes/search?query=${selectedCategory}`
    );

    const data = await response.json();
    setJokes(data.result);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJokes();
  }, [selectedCategory]);

  return (
    <main>
      <header>
        <h1>Jokes app</h1>
        <hr />
      </header>
      <section>
        <h2>Pick a category</h2>
        <select onChange={(e) => setSelectedCategory(e.target.value)} className="category-select">
          {categories.map((category) => (
            <option
              key={category}
              value={category}
              selected={category === selectedCategory}
            >
              {category}
            </option>
          ))}
        </select>
      </section>
      <Jokes jokes={jokes} isLoading={isLoading} />
    </main>
  );
}

export default App;
