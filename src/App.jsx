import { useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [noOfQuestions, setNoOfQuestions] = useState(4);
  const [difficulty, setDifficulty] = useState("");

  const handleQueryInputChange = (e) => {
    setQuery(e.target.value);
  };
  const handleNumQuestionsInputChange = (e) => {
    setNoOfQuestions(e.target.value);
  };
  const handleDifficultyInputChange = (e) => {
    setDifficulty(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(query);
    console.log(noOfQuestions);
    console.log(difficulty);
  };

  return (
    <div className="main-container">
      <h1>Gen AI Web App by Vizuara AI</h1>

      <div className="form-container">
        <div>
          <label>Enter Query:</label>
          <input
            type="text"
            className="query-input"
            placeholder="Enter Query"
            onChange={handleQueryInputChange}
          />
        </div>
        <div>
          <label>No of Questions: {noOfQuestions}</label>
          <input
            type="range"
            min={1}
            max={10}
            className="questions-input"
            onChange={handleNumQuestionsInputChange}
          />
        </div>
        <div>
          <label>Difficulty:</label>
          <select
            className="difficulty-input"
            onChange={handleDifficultyInputChange}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <button className="submit-button" onClick={handleSubmit}>
          Generate Questions
        </button>
      </div>
    </div>
  );
}

export default App;
