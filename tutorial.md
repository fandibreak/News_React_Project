# 1--Inicializacion de App 

Creo la carpeta y el proyecto con los siguientes comandos 

npm install --save-dev create-react-component-folder 

Creo los componentes que se asociaran entre si en mi App con : 

npx crcf Head Nav Main Home Form ListNews Card Footer -j 

## 2--En Nav Genero los Link ( de la libreria React-router_dom)=>hay que instalarlo en SRC, <Like to=>  sustituye el href comun y es de la libreria React-router_dom

     <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/home">Form</Link></li>
        <li><Link to="/home">List</Link></li>
     </ul>

## 3- Importo Nav en Header y lo aplico en la estructura de header 

import Nav from '../Nav'

class Header extends Component {
  render() {
    return
    <header>
      <Nav />
    </header>;
  }
}
## 4- Voy a app.js e importo los componentes Header(ya contiene Nav)+Main+Footer

import Header from './components/Header';
import Main from './components/Header';
import Footer from './components/Footer';

## 5- Import en apps.js import { BrowserRouter} from 'react-router-dom';


## 6- Aplico la estructura de los componentes cargados en Apps

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
      <img src={logo} className="App-logo" alt="logo" />
      <Footer/>
    </div>
  );
}

## 7- Aplico la estructura de los componentes cargados en app.js
(
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
      <img src={logo} className="App-logo" alt="logo" />
      <Footer/>
)

## 8--Me voy a Main.jsx y hago routeo de las rutas con Path="/"
8.1--Importo lo primero para poder routear : 
import { Route, Routes } from "react-router-dom";

Main.jsx con <Routes> me llevara a las diferenres roytas segun la barra de navegacion aplicada 

      <Routes>
        <Route path="/" element={Home}></Route>
        <Route path="/form" element={Form}></Route>
        <Route path="/list" element={List}></Route>
      </Routes>