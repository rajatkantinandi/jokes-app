import React from "react";
import { Joke } from "../types";

type Props = {
  joke: Joke;
};

export default function JokeCard({ joke }: Props) {
  return (
    <>
      <li className="joke">
        <a href={joke.url} target="_blank" rel="noreferrer noopener">
          <blockquote>"{joke.value}"</blockquote>
        </a>
      </li>
    </>
  );
}
