import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar/';
import ItemListContainerComponent from './containers/itemlistcontainer';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import HomepageComponent from './components/homepage';
import FooterComponent from './components/footer';
import ItemDetailContainer from './containers/itemdetailcontainer';
import CartComponent from './components/cart';
import CartProvider from './context/CartContext';
import ContactComponent from './components/contact';
import SearchComponent from './components/search';
import GlobalProvider from './context/GlobalContext';
import CategoriesComponent from './components/categories';
import PromocionesBancariasComponent from './components/promocionesbancarias';

let numberArticles = 3;

function App() {

  return (
    <>  
      <GlobalProvider>
        <CartProvider>
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
              <Route path="/busqueda">
                <SearchComponent/>
              </Route>
              <Route path="/promociones_bancarias">
                <PromocionesBancariasComponent/>
              </Route>
              <Route path="/:categories">
                <CategoriesComponent/>
              </Route>
              <Route path="*">
                
              </Route>
            </Switch>
            <FooterComponent />
          </BrowserRouter>
        </CartProvider>
      </GlobalProvider>
    </>
  );
}

export default App;
