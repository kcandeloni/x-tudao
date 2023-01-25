import './App.css';

const snacks = ['x-tudo', 'mac-sujeira', 'x-podrão']

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lanchão</h1>
        <ul>
          { snacks.map((value, id) => (<li key={id}>
            {value}
          </li>))}
        </ul>
      </header>
    </div>
  );
}

export default App;
