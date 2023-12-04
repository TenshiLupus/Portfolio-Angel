import "./index.css";
// import SlidePage from "./components/SlidePage/SlidePage.jsx"

import React, { useState, useEffect } from "react";
import Menu from "./components/Menu/Menu.jsx";
// import axios from "axios";

// const useNotes = (url) => {
//   const [notes, setNotes] = useState([]);
//   useEffect(() => {
//     axios.get(url).then((response) => {
//       setNotes(response.data);
//     });
//   }, [url]);
//   return notes;
// };

const App = () => {
  const [counter, setCounter] = useState(0);
  const [values, setValues] = useState([]);
  // const notes = useNotes(BACKEND_URL);

  // const handleClick = () => {
  //   setCounter(counter + 1);
  //   setValues(values.concat(counter));
  // };

  return (
    
    <div className="container">
        <div id="top-left"></div>
        <div id="top-right"></div>
        <div id="bottom-left"></div>
        <div id="bottom-right"></div>
        <Menu/>

    </div>
  );
};

export default App;
