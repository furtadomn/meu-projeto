import './App.css';

function App() {
  const name = "Marcella";
  const newName = name.toUpperCase();

  function age(currentYear, birthYear) {
    return currentYear - birthYear;
  }

  const url = "https://via.placeholder.com/150"

  return (
    <div className="App">
      <h1>Olá, React!</h1>
      <p>Meu primeiro App</p>
      <p>Nome: {newName}</p>
      <p>Idade: {age(2021, 1993)}</p>
      <img src={url} alt="Minha Imagem"/>
    </div>
  );
}

export default App;
