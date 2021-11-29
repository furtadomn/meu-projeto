import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

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
    </div>
  );
}

export default App;
