import React, { useState } from "react";

import "./App.css";
import Axios from "axios";

function App() {
  const [name, setName] = useState();
  const [file, setFile] = useState();

  const send = (event) => {
    const data = new FormData();
    data.append("name", name);
    data.append("file", file);
    Axios.post("http://localhost:3002/post", data)
      .then((res) => alert("uploaded successfully"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="flex">
          <label>Name</label>
          <input
            type="text"
            id="name"
            onChange={(event) => {
              const { value } = event.target;
              setName(value);
            }}
          />
        </div>
        <div className="flex">
          <label>File</label>
          <input
            type="file"
            id="file"
            accept=".jpg"
            onChange={(event) => {
              const file = event.target.files[0];
              setFile(file);
            }}
          />
        </div>

        <button onClick={send}>Send</button>
      </header>
    </div>
  );
}

export default App;
