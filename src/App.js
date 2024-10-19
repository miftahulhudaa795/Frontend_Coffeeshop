
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import HomePage from './Pages/homepage/Home';
import Signin from './Pages/signin/Signin';
import Signup from './Pages/signup/Signup';
import { ForgotPassword } from './Pages/forgot_Password/ForgotPassword';
import Products from './Pages/products/Products';
import Profil from './Pages/profil/Profil';
import Cart from './Pages/cart/Cart';
import History from './Pages/history/History';
import Details from './Pages/products/Details';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/forgot-password' element={<ForgotPassword/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/history' element={<History/>}/>
            <Route path='/profil' element={<Profil/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/product/:id' element={<Details/>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
