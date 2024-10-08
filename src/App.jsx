import "./App.css";

function App() {
  return (
    <div className="main-container">
      <h1>Gen AI Web App by Vizuara AI</h1>

      <div className="form-container">

        <div>
          <label >Enter Query:</label>
          <input type="text" 
          className='query-input' placeholder="What's in your mind?"/>
        </div>

      </div>
    </div>
  );
}

export default App;
