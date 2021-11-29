import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {
  return (
    <div className="App">
      < HelloWorld />
      < Frase />
      < SayMyName nome="Marcella" />
      < Pessoa 
        nome="Marcella" 
        idade="28" 
        profissao="Desenvolvedora" 
        foto="https://via.placeholder.com/150" />
        < List />
    </div>
  );
}

export default App;
