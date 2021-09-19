import React, { useState } from "react";
import "./styles.css";

var familyDictionary = {
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

var familyAvailable = Object.keys(familyDictionary);
export default function App() {
  const [meaning, setMeaning] = useState(" ");

  function familyInputHandler(event) {
    var userInput = event.target.value;
    var meaning = familyDictionary[userInput];
    // if (meaning === undefined) {
    //   meaning = "This may be not available for now";
    // }
    setMeaning(meaning);
  }

  function familyClickHandler(family) {
    var meaning = familyDictionary[family];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Family man</h1>
      <input onChange={familyInputHandler} />
      <h2> {meaning} </h2>
      <h2>family which are available easily</h2>
      {familyAvailable.map(function (family) {
        return (
          <span
            onClick={() => familyClickHandler(family)}
            style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
            key={family}
          >
            {family}
          </span>
        );
      })}
    </div>
  );
}
