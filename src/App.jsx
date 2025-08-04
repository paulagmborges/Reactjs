import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import User from './pages/users/User';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/users" element={<User />} />
                <Route path='*' element={<h1>404</h1>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
