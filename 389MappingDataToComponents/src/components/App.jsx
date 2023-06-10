import React from "react";
import getData from "../emojipedia";
import Dictionary from "./dictionary";
var data = getData();

function createdictionary(emojidata) {
  return (
    <Dictionary
      key={emojidata.id}
      name={emojidata.name}
      detail={emojidata.meaning}
      emoji={emojidata.emoji}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{data.map(createdictionary)}</dl>
    </div>
  );
}

export default App;
