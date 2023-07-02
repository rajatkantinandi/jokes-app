import React from "react";
import JokeCard from "./JokeCard";
import { type Joke } from "../types";

type Props = {
  jokes: Joke[];
  isLoading?: boolean;
};

export default function Jokes({ jokes, isLoading = false }: Props) {
  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <section>
      <h2>Jokes</h2>
      <ul>
        {jokes.map((joke) => (
          <JokeCard key={joke.id} joke={joke} />
        ))}
      </ul>
    </section>
  );
}
