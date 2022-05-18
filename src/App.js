import './App.css';
import NavBar from './components/NavBar/NavBar';
//importo el componente desde la ruta del archivo, para que el import se "prenda" hay que invocarlo como si llamara una etiqueta y lo pinta en verde porque es componente

//import {dateFormat, dateFormat2} from './components/NavBar/NavBar'

function App() {
  return (
    //JSX
    <div className="App">
      <NavBar />
      Contenido de la app
    </div>
  );
}

export default App;
