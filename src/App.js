import './App.css';
import NavBar from './components/NavBar/NavBar';
//importo el componente desde la ruta del archivo, para que el import se "prenda" hay que invocarlo como si llamara una etiqueta y lo pinta en verde porque es componente

//import {dateFormat, dateFormat2} from './components/NavBar/NavBar'

import CardList from './components/CardList/CardList';
import SnackBar from './components/SnackBar/SnackBar';

function App() {
  return (
    //JSX
    <div className="App">
      <NavBar />
      <div className='general-container'>
        <CardList></CardList>
      </div>
      <SnackBar>
        <p>Se agrego el prod 1</p>
      </SnackBar>
    </div>
  );
}

export default App;
