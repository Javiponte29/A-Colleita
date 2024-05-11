import { Link, NavLink } from 'react-router-dom';
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
<div className="flex items-center justify-around border-b-2 shadow-lg pb-4">
    <div className='flex items-center justify-between space-x-6'>
    <NavLink to={"/"}><img src="https://cdn-icons-png.flaticon.com/512/424/424227.png" alt="Logo" className="w-20 h-20" /></NavLink>
    <NavLink to={"/"} className="text-green-500 font-bold text-4xl">A Colleita</NavLink>
    </div>
    <nav className="space-x-20">
        <NavLink to={""} className="font-bold text-2xl">Home</NavLink>
        <NavLink to={""} className="font-bold text-2xl">Productos</NavLink>
        <NavLink to={""} className="font-bold text-2xl">About us</NavLink>
        <NavLink to={""} className="font-bold text-2xl">Login</NavLink>
    </nav>
    <NavLink to={""}><svg width="30" height="30" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"> <path stroke="none" d="M0 0h24v24H0z"/> <circle cx="9" cy="19" r="2"/> <circle cx="17" cy="19" r="2"/> <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2"/> </svg></NavLink>
</div>

    );
};

export default NavBar;

/*            {productos.map(producto =>(
                    <div className='prod-home'>
                        <Link to={`/zapato/${producto.id}`}><img src={producto.imagen} alt={producto.nombre}/></Link>
                    </div>
        ))}*/ 