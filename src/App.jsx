import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar/';
import ItemListContainerComponent from './containers/itemlistcontainer';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

let numberArticles = 3;

function App() {

  return (
    <>
      <BrowserRouter>
        <NavbarComponent numberArticles={numberArticles}/>
        <Switch>
          <Route exact path="/">
            <ItemListContainerComponent/> 
          </Route>
          <Route path="/contacto">
            <div>
              Hola 
            </div>
          </Route>
        </Switch>
        
      </BrowserRouter>
    </>
  );
}

export default App;
