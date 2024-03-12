
import './App.css';
import { HashRouter as Router,Routes,Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProductsManagement from './components/ProductManagement';
import OrderManagement from './components/OrderManagement';
import ComingPage from './components/ComingPage';

function App() {
  return (
    <div className="App">

    <Router>
      <Routes>

        <Route path='/' element={<Dashboard/>}/>
        <Route path='/products' element={<ProductsManagement/>}/>
        <Route path='/orders' element={<OrderManagement/>}/>
        <Route path='/coming' element={<ComingPage/>}/>
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
