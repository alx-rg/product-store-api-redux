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
          <Route path="/" element={<ItemList />} />
          <Route path="/item/:itemId" element={<ItemDetails />} />
          {/* <Route path=":itemId" element={<ItemDetails />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
