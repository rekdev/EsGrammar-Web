import Navbar from "./components/Navbar";
import WordListTable from "./components/WordListTable";
import { useState, useEffect } from "react";

function App() {
  const [words, setWord] = useState(["México"]);
  const [newWord, setNewWord] = useState("");

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/analyze/${JSON.stringify(words)}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, [words]);

  return (
    <>
      <Navbar />
      <main className="main">
        <section className="content">
          <WordListTable words={words} setWord={setWord} />
          <div>
            <input
              type="text"
              name="word"
              id="word"
              onInput={(e) => {
                setNewWord(e.target.value);
              }}
            />
            <button
              onClick={() => {
                setWord([...words, newWord]);
              }}
            >
              Add
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
