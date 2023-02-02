import './App.css';
import { useState } from 'react';
import HelloWorld from './components/shared/HelloWorld'

function App( {text} ) {
  const name = 'Park Henri';
  const [startProject, setStartProject] = useState(false);
  const activeProject = () => setStartProject(!startProject)

  return (

    <div className="App">
      <header className="App-header">
        <p>
          { text }
        </p>   
        <span>by: { name }</span>
        <button onClick={activeProject} style={{margin: '30px'}}>
          {startProject ? 'Desativar Hello World' : 'Chamar Hello World'}          
        </button>
        {startProject ? <HelloWorld /> : null}
      </header>
    </div>
  );
}

export default App;
