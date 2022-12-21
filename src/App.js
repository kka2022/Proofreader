import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Navbar from "./Navbar";
import {
  wordReplacements,
  boundaryWordsPreparation,
  punctuationPreparation,
  punctuationReplacements,
} from "./words";

function App() {
  const [text, setText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const darkModeBackgroundColor = "rgb(0 8 28 / 98%)";
  const darkModeContentColor = "white";
  const lightModeBackgroundColor = "#92efef";
  const lightModeContentColor = "black";

  const lightModeTextareaBackground = "#bff1ec";
  const lightModeTextareaColor = "#010136";
  const darkModeTextareaBackground = "rgb(42 49 66)";
  const darkModeTextareaColor = "#d3e9ed";

  const changeTheme = () => {
    if (darkMode) {
      document.body.style.backgroundColor = lightModeBackgroundColor;
      document.body.style.color = lightModeContentColor;
      document.getElementById("text-content").style.backgroundColor =
        lightModeTextareaBackground;
      document.getElementById("text-content").style.color =
        lightModeTextareaColor;
      setDarkMode(false);
    } else {
      document.body.style.backgroundColor = darkModeBackgroundColor;
      document.body.style.color = darkModeContentColor;
      document.getElementById("text-content").style.color =
        darkModeTextareaColor;
      document.getElementById("text-content").style.backgroundColor =
        darkModeTextareaBackground;
      setDarkMode(true);
    }
  };

  const proofread = () => {

    let newText = text;
    let oldText = newText;

    for (let key in punctuationPreparation) {
      newText = oldText.replaceAll(key, punctuationPreparation[key])
      oldText = newText;
    }
    
    for (let key in boundaryWordsPreparation) {
      newText = oldText.replaceAll(key, boundaryWordsPreparation[key])
      oldText = newText;
    }
    
    for (let key in punctuationReplacements) {
      newText = oldText.replaceAll(key, punctuationReplacements[key])
      oldText = newText;
    }
    
    for (let key in wordReplacements) {
      newText = oldText.replaceAll(key, wordReplacements[key])
      oldText = newText;
    }
    
    setText(newText);
  };

  const fixPunctuations = () => {
    let newText = text;
    let oldText = newText;

    for (let key in punctuationPreparation) {
      newText = oldText.replaceAll(key, punctuationPreparation[key])
      oldText = newText;
    }

    for (let key in punctuationReplacements) {
      newText = oldText.replaceAll(key, punctuationReplacements[key])
      oldText = newText;
    }

    setText(newText);
  };

  const handleChange = (event) => {
    setText(event.target.value);
    console.log("resizingggggg")
    var textarea = document.getElementById("text-content");
    textarea.style.height = "";  // Reset the height to 'auto'
    textarea.style.height = textarea.scrollHeight + "px";  // Set the height to the scroll height
  };

  const removeExtraSpaces = () => {
    setText(
      text
        .split(" ")
        .filter((word) => word !== "")
        .join(" ")
    );
  };

  return (
    <div className="App">
      <Navbar darkMode={darkMode} changeTheme={changeTheme} />
      <div style={{ height: "50px" }}></div>
      <Form
        inputText={text}
        inputUpdate={handleChange}
        removeExtraSpaces={removeExtraSpaces}
        fixPunctuations={fixPunctuations}
        proofread={proofread}
      />
    </div>
  );
}

export default App;
