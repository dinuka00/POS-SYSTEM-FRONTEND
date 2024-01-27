import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Product from './pages/Product';
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';
import Category from './pages/Category';



const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>} />
                <Route path="/products" element={<Product/>}/>
                <Route path="/products/:id" element={<SingleProduct/>}/>
                <Route path="/categories" element={<Category/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
