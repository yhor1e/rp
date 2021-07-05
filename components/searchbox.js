import React, { useState } from "react";
import lunr from "lunr";

export default function SearchBox() {
  // samples
  const documents = [
    {
      name: "Lunr",
      text: "Like Solr, but much smaller, and not as bright.",
    },
    {
      name: "React",
      text: "A JavaScript library for building user interfaces.",
    },
    {
      name: "Lodash",
      text:
        "A modern JavaScript utility library delivering modularity, performance & extras.",
    },
  ];

  let idx = lunr(function () {
    this.ref("name");
    this.field("text");

    documents.forEach(function (doc) {
      this.add(doc);
    }, this);
  });
  console.log(idx);

  const [val, setVal] = useState("");
  const [results, setResults] = useState([]);
  function onChangeHandler(e) {
    console.log(e.target.value);
    setVal(e.target.value);
    const r = idx.search(`*${e.target.value}*`);
    setResults(r);
  }
  return (
    <>
      <input
        type="text"
        placeholder="search"
        value={val}
        onChange={(e) => onChangeHandler(e)}
      />
      {val && (
        <>
          <h1>Results</h1>
          <ul>
            {results.map((result) => (
              <li key={result.ref}>{result.ref}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export async function getStaticProps({ params }) {
  console.log("d");
}
