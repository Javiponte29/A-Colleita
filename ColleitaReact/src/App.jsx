import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import AuthProvider from './context/authContext';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar/NavBar';

function App() {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:8080/cont/list`)
        .then(response => response.json())
        .then((result) => {
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
                    </Routes>
                </AuthProvider>
            </div>
        </Router>
    );
}

export default App;

