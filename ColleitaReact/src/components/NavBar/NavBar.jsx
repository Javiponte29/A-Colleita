import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';
import { useState, useEffect } from 'react';
import { useAuth } from '../../context/authContext';

const NavBar = () => {
    const [productos, setProductos] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:8080/cont/list`)
        .then(response => response.json())
        .then((result) => {
            setProductos(result);
        });
        console.log(productos);
    }, []);

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <main className="flex flex-col lg:flex-row items-center justify-around border-b-2 shadow-lg pb-4">
            <nav className='flex items-center space-x-6'>
                <NavLink to={"/"} title='Home'><img src="https://cdn-icons-png.flaticon.com/512/424/424227.png" alt="Logo" className="w-20 h-20" /></NavLink>
                <NavLink to={"/"} title='Home' className="verde font-bold text-4xl">A Colleita</NavLink>
            </nav>
            <button className="lg:hidden" onClick={toggleMenu}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
            <nav className={`lg:flex lg:items-center lg:justify-around lg:space-x-20 lg:block ${isOpen ? 'block' : 'hidden'} lg:relative w-full lg:w-auto flex flex-col lg:flex-row`}>
                <aside className="font-bold text-2xl lg:text-2xl hover:text-green-600 text-center"><NavLink title='Home' to={"/"}>Home</NavLink></aside>
                <aside className="font-bold text-2xl lg:text-2xl hover:text-green-600 text-center"><NavLink to={"/products"} title='Productos'>Productos</NavLink></aside>
                <aside className="font-bold text-2xl lg:text-2xl hover:text-green-600 text-center"><NavLink to={"/aboutus"} title='Sobre nosostros'>About us</NavLink></aside>
                {!user ? (
                    <aside className="font-bold text-2xl lg:text-2xl hover:text-green-600 text-center"><NavLink to={"/login"} title='Inicio de sesión'>Login</NavLink></aside>
                ) : (
                    <aside className="font-bold text-2xl lg:text-2xl hover:text-green-600 text-center flex justify-center"><NavLink title='Perfil' to={"/profile"}><svg class="h-8 w-8"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                    </svg>
                </NavLink></aside>
                )}
                {/*<div className="font-bold text-2xl lg:text-2xl hover:text-green-600 flex justify-center"><NavLink to={""}>
                    <svg width="30" height="30" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z"/>
                        <circle cx="9" cy="19" r="2"/>
                        <circle cx="17" cy="19" r="2"/>
                        <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2"/>
                    </svg>
            </NavLink></div>*/}
            </nav>
        </main>
    );
};

export default NavBar;



/*            {productos.map(producto =>(
                    <div className='prod-home'>
                        <Link to={`/zapato/${producto.id}`}><img src={producto.imagen} alt={producto.nombre}/></Link>
                    </div>
        ))}*/ 