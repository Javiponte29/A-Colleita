import { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {

    const [productos, setProductos] = useState([]);



    useEffect(() => {
        fetch(`http://localhost:8080/cont/list`)
        .then(response => response.json())
        .then((result) => {
            setProductos(result);
        });
        console.log(productos);
/*
        fetch(`http://localhost:8080/stock/list`)
        .then(resp => resp.json())
        .then((resul) => {
            setStock(resul);
        });*/
    }, [])

    return (
        <h1>Hola</h1>
    );
};

export default Home;