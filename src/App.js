import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import ItemList from './components/ItemList/ItemList';
import ItemDetails from './components/ItemDetails/ItemDetails';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/"  element={ItemList} />
          <Route path="/item/:productId" component={ItemDetails} />
          <Route>Oh shucks...404 Item Not Found!</Route>
        </Routes>
      </Router>
      <header className="App-header">
        <h1>BUY IT</h1>
        <p>
          Simple Shopping Store using React Redux and a shopping API!! 
<hr></hr>
          A Shopping Store


        </p>
      </header>
    </div>
  );
}

export default App;
