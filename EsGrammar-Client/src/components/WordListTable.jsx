import { useState } from "react";

function WordListTable({ words, setWord }) {
  const [newWord, setNewWord] = useState("");

  return (
    <>
      <div>
        {words.map((word, i) => (
          <WordItem key={i} word={word}></WordItem>
        ))}
      </div>
    </>
  );
}

function WordItem({ word }) {
  return (
    <div className="word-item">
      <p>{word}</p>
    </div>
  );
}

export default WordListTable;
