import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [concept, setConcept] = useState("");
  const [conceptsArr, setConceptsArr] = useState([]);

  useEffect(() => {
    const { jsConcepts } = require("./concepts.json");
    console.log({ jsConcepts });
    setConceptsArr(jsConcepts);
  }, []);

  function addConcept() {
    let tempArr = conceptsArr;
    const id = tempArr.length + 1;
    tempArr.push({ id, concept, completed: false });
    console.log({ tempArr });
    setConceptsArr(tempArr);
    setConcept("");
  }

  function onCheck(idx) {
    let tempArr = conceptsArr;
    tempArr.forEach((concept) => {
      let { id, completed } = concept;
      if (id === idx) {
        concept.completed = !completed;
      }
    });
    console.log({ tempArr });
    setConceptsArr(tempArr);
  }

  return (
    <div className="App">
      <h1>JavaScript prep checklist</h1>
      <div className="section">
        <input value={concept} onInput={(e) => setConcept(e.target.value)} />
        <button onClick={addConcept}>Add</button>
      </div>
      <div className="section">
        {conceptsArr.map(({ id, concept, completed }) => {
          return (
            <div key={id} style={{ width: "50vw" }}>
              <input
                type="checkbox"
                checked={completed}
                onChange={() => onCheck(id)}
              />
              <span>{concept}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
