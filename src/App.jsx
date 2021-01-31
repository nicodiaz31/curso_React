import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar/';
import ItemListContainerComponent from './components/itemlistcontainer';

let numberArticles = 3;

function App() {

  return (
    <>
      <NavbarComponent numberArticles={numberArticles}/>
      <ItemListContainerComponent/> 
    </>
  );
}

export default App;
