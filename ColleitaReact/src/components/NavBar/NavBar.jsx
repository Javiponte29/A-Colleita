import { Link } from 'react-router-dom';
import './NavBar.css';
import { useState } from 'react';
import { useEffect } from 'react';

const NavBar = () => {

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
            <img src="https://cdn-icons-png.flaticon.com/512/424/424227.png" alt="Logo" />
            <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </div>
    );
};

export default NavBar;

/*            {productos.map(producto =>(
                    <div className='prod-home'>
                        <Link to={`/zapato/${producto.id}`}><img src={producto.imagen} alt={producto.nombre}/></Link>
                    </div>
        ))}*/ 