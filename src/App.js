import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Product from './pages/Product';
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';
import Category from './pages/Category';
import SingleCategory from './pages/SingleCategory';
import UpdateCategory from './pages/UpdateCategory';
import UpdateProduct from './pages/UpdateProduct';
import Checkout from './pages/Checkout';
import Register from './pages/Auth/Register';
import ProtectedRoutes from './pages/utils/ProtectedRoutes';
import Login from './pages/Auth/Login';



const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                
                <Route element={<ProtectedRoutes/>}>

                    <Route index element={<Home/>} />
                    <Route path="/products" element={<Product/>}/>
                    <Route path="/products/:id" element={<SingleProduct/>}/>
                    <Route path="/categories" element={<Category/>}/>
                    <Route path="/categories/:categoryId" element={<UpdateCategory />} /> 
                    <Route path="/categories/:categoryId/products" element={<SingleCategory />} />
                    <Route path="/products/update/:productId" element={<UpdateProduct />} />
                    <Route path="/checkout" element={<Checkout/>} />

                </Route>

                

                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default App;
