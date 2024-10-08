import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import { Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart';


function App() {
  return (
    <div className="App">
     
     <Navbar/>
     <Routes>
      <Route path='/' element={<Products/>}/>
      <Route path='/cart' element={<Cart/>}/>
     </Routes>
     
     
    </div>
  );
}

export default App;
