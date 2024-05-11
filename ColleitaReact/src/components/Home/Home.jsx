import { useEffect, useState } from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';

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
<div className="relative bg-custom bg-cover h-80">
    <h2 className='text-4xl font-bold text-white w-80 '>Tus frutas y verduras favoritas en la misma web</h2>
    <NavLink to={''} className={'pb-2 pt-2 pl-4 pr-4 bg-green-600 rounded'}>¡Compra aquí!</NavLink>
</div>

    );
};

export default Home;