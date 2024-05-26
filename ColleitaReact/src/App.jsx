import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import AuthProvider from './context/authContext';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import UserProfile from './components/UserProfile/UserProfile';
import AboutUs from './components/AboutUs/AboutUs';
import Products from './components/Products/Products';
import ViewProduct from './components/ViewProduct';

function App() {
// Almacenar la lista de productos
const [productos, setProductos] = useState([]);
// Almacenar los productos en el carrito
const [cart, setCart] = useState([]);

// Agregar un producto al carrito
const addToCart = (product) => {
    setCart((prevCart) => {
        // Busca si el producto está en el carrito
        const productIndex = prevCart.findIndex(item => item.id === product.id);
        if (productIndex !== -1) {
            // Si el producto ya está en el carrito, actualiza su cantidad y precio total
            const updatedCart = [...prevCart];
            updatedCart[productIndex].cantidad += product.cantidad;
            updatedCart[productIndex].totalPrice = updatedCart[productIndex].cantidad * updatedCart[productIndex].precio;
            return updatedCart;
        } else {
            // Si el producto no está en el carrito, lo agrega como un nuevo producto
            const newProduct = { ...product, totalPrice: product.cantidad * product.precio };
            return [...prevCart, newProduct];
        }
    });
};

// Función para eliminar un producto del carrito basado en su índice
const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
};

// Hook para cargar la lista de productos
useEffect(() => {
    fetch(`http://localhost:8080/cont/list`)
    .then(response => response.json())
    .then((result) => {
        // Si se obtienen los datos, se actualiza el estado de productos
        console.log(result);
        setProductos(result);
    })
    .catch(error => {
        console.error('Error al obtener los productos:', error);
    });
}, []);


    return (
        <Router>
            <div>
                <AuthProvider>
                    <NavBar />
                    <Routes>
                        <Route path='/' element={<Navigate to={"/home"} />} />
                        <Route path='/home' element={<Home />} />
                        <Route path='/products' element={<Products />} />
                        <Route path='/product/:id' element={<ViewProduct addToCart={addToCart}/>} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register/>} />
                        <Route path='/profile' element={<UserProfile cart={cart} removeFromCart={removeFromCart}/>} />
                        <Route path='/aboutus' element={<AboutUs/>} />
                    </Routes>
                    <Footer />
                </AuthProvider>
            </div>
        </Router>
    );
}

export default App;

