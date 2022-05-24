import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Universal Calculator App</h1>
      <div className='calcContainer'>
        <input></input>
        <select name="cars" id="cars">
          <option value="plus">+</option>
          <option value="minus">-</option>
          <option value="times">x</option>
          <option value="divide">/</option>
        </select>
        <input></input>
        <button>=</button>
        <p>answer</p>
      </div>
    </div>
  );
}

export default App;
