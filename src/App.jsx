import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar/';
import ItemListContainerComponent from './containers/itemlistcontainer';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import HomepageComponent from './components/homepage';
import FooterComponent from './components/footer';
import ItemDetailContainer from './containers/itemdetailcontainer';

let numberArticles = 3;

function App() {

  return (
    <>
      <BrowserRouter>
        <NavbarComponent numberArticles={numberArticles}/>
        <Switch>
          <Route exact path="/">
            <HomepageComponent/>
          </Route>
          <Route path="/category/:categoryName">
            <ItemListContainerComponent/> 
          </Route>
          <Route path="category/:categoryName/item/:itemId">
            <ItemDetailContainer/> 
          </Route>
        </Switch>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
