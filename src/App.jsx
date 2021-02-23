import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar/';
import ItemListContainerComponent from './containers/itemlistcontainer';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import HomepageComponent from './components/homepage';
import FooterComponent from './components/footer';
import ItemDetailContainer from './containers/itemdetailcontainer';
import CartComponent from './components/cart';
import { GlobalContext } from './context/GlobalContext';
import { CartContext} from './context/CartContext';
import ContactComponent from './components/contact';

let numberArticles = 3;

function App() {

  return (
    <>
      <GlobalContext.Provider>
        <CartContext.Provider value={[]}>
        <BrowserRouter>
          <NavbarComponent numberArticles={numberArticles}/>
          <Switch>
            <Route exact path="/">
              <HomepageComponent/>
            </Route>
            <Route path="/category/:categoryName">
              <ItemListContainerComponent/> 
            </Route>
            <Route path="/item/:itemId">
              <ItemDetailContainer/> 
            </Route>  
            <Route path="/cart">
              <CartComponent />
            </Route>
            <Route path="/contacto">
              <ContactComponent/>
            </Route>
          </Switch>
          <FooterComponent />
        </BrowserRouter>
        </CartContext.Provider>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
