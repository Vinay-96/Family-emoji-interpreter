import React, { useState } from "react";
import "./styles.css";

var familyDictionary = {
  "๐จโ๐ฉโ๐ฆ": "Man, Woman, Boy",
  "๐จโ๐ฉโ๐ง": "Man, Woman, Girl",
  "๐จโ๐ฉโ๐งโ๐ฆ": "Man, Woman, Girl, Boy",
  "๐จโ๐ฉโ๐ฆโ๐ฆ": "Man, Woman, Boy, Boy",
  "๐จโ๐ฉโ๐งโ๐ง": "Man, Woman, Girl, Girl",
  "๐จโ๐จโ๐ฆ": "Man, Man, Boy",
  "๐จโ๐จโ๐ง": "Man, Man, Girl",
  "๐จโ๐จโ๐งโ๐ฆ": "Man, Man, Girl, Boy",
  "๐จโ๐จโ๐ฆโ๐ฆ": "Man, Man, Boy, Boy",
  "๐จโ๐จโ๐งโ๐ง": "Man, Man, Girl, Girl",
  "๐ฉโ๐ฉโ๐ฆ": "Woman, Woman, Boy",
  "๐ฉโ๐ฉโ๐ง": "Woman, Woman, Girl",
  "๐ฉโ๐ฉโ๐งโ๐ฆ": "Woman, Woman, Girl, Boy",
  "๐ฉโ๐ฉโ๐ฆโ๐ฆ": "Woman, Woman, Boy, Boy",
  "๐ฉโ๐ฉโ๐งโ๐ง": "Woman, Woman, Girl, Girl"
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
