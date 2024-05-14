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
    }, [])

    return (
        <div>
    <div className="relative bg-custom bg-cover h-80">
        <h2 className='text-4xl font-bold text-white w-80 ml-20 mb-10 pt-10'>Tus frutas y verduras favoritas en la misma web.</h2>
        <NavLink to={''} className={'pb-2 pt-2 pl-4 pr-4 text-2xl text-white font-semibold bg-verde bg-opacity-50 rounded ml-20'}>¡Compra aquí!</NavLink>
    </div>
    <div>
    {/*productos.map(producto =>(
                    <div className='prod-home'>
                        <Link to={`/zapato/${producto.id}`}><img src={producto.imagen} alt={producto.nombre}/></Link>
                    </div>
        ))*/}
    </div>
    <div className='md:flex'>
            <img className='lg:m-20 md:h-80 md:h-40 md:m-5' src="https://common.crowdfarming.com/uploaded-images/1668609056508-c7b78c0c-ac53-4ef8-9020-69e21438d94a.jpg" alt="Agricultor" />
        <div className='lg:mt-20 md:mt-5'>
            <h2 className='lg:text-3xl md:text-2xl font-bold'>Sobre Nosotros</h2>
            <p className='lg:text-2xl lg:mt-5 md:mr-10'>Desde <span className='verde font-medium'>A Colleita</span>, nos enorgullece conectar a los consumidores con alimentos frescos y de alta calidad directamente de nuestros 
                agricultores locales. Desde frutas y verduras recién cosechadas hasta productos lácteos y carnes cuidadosamente seleccionadas, 
                nos comprometemos a proporcionar productos alimenticios que sean no solo deliciosos, sino también cultivados de manera responsable 
                y sostenible.</p>
        </div>
    </div>
    </div>
    );
};

export default Home;