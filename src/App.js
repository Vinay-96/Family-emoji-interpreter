import React, { useState } from "react";
import "./styles.css";

var fruitsDictionary = {
  "👨‍👩‍👦": "Man, Woman, Boy",
  "👨‍👩‍👧": "Man, Woman, Girl",
  "👨‍👩‍👧‍👦": "Man, Woman, Girl, Boy",
  "👨‍👩‍👦‍👦": "Man, Woman, Boy, Boy",
  "👨‍👩‍👧‍👧": "Man, Woman, Girl, Girl",
  "👨‍👨‍👦": "Man, Man, Boy",
  "👨‍👨‍👧": "Man, Man, Girl",
  "👨‍👨‍👧‍👦": "Man, Man, Girl, Boy",
  "👨‍👨‍👦‍👦": "Man, Man, Boy, Boy",
  "👨‍👨‍👧‍👧": "Man, Man, Girl, Girl",
  "👩‍👩‍👦": "Woman, Woman, Boy",
  "👩‍👩‍👧": "Woman, Woman, Girl",
  "👩‍👩‍👧‍👦": "Woman, Woman, Girl, Boy",
  "👩‍👩‍👦‍👦": "Woman, Woman, Boy, Boy",
  "👩‍👩‍👧‍👧": "Woman, Woman, Girl, Girl"
};

var fruitsAvailable = Object.keys(fruitsDictionary);
export default function App() {
  const [meaning, setMeaning] = useState(" ");

  function fruitsInputHandler(event) {
    var userInput = event.target.value;
    var meaning = fruitsDictionary[userInput];
    // if (meaning === undefined) {
    //   meaning = "This may be not available for now";
    // }
    setMeaning(meaning);
  }

  function fruitsClickHandler(fruit) {
    var meaning = fruitsDictionary[fruit];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Family man</h1>
      <input onChange={fruitsInputHandler} />
      <h2> {meaning} </h2>
      <h2>Fruits which are available easily</h2>
      {fruitsAvailable.map(function (fruit) {
        return (
          <span
            onClick={() => fruitsClickHandler(fruit)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
            key={fruit}
          >
            {fruit}
          </span>
        );
      })}
    </div>
  );
}
