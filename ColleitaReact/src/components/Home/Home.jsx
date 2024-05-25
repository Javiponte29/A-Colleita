import { useState, useEffect } from 'react';
import './Home.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import Modal from '../Modal';

const Home = () => {
    // Almacenar productos
    const [productos, setProductos] = useState([]);
    // Mostrar mensaje de bienvenida
    const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);
    // Obtener usuario autenticado
    const { user } = useAuth();
    // Visibilidad del modal
    const [showModal, setShowModal] = useState(false);
    // Hook para navegar entre rutas
    const navigate = useNavigate();

    // Obtiene la lista de productos del back
    useEffect(() => {
        fetch(`http://localhost:8080/cont/list`)
            .then(response => response.json())
            .then((result) => {
                setProductos(result);
            });
    }, []);

    // Mostrar mensaje de bienvenida al usuario inicia sesión
    useEffect(() => {
        if (user) {
            setShowWelcomeMessage(true);
            const timer = setTimeout(() => {
                setShowWelcomeMessage(false);
            }, 2000); // Oculta el mensaje después de 2 segundos
            return () => clearTimeout(timer);
        }
    }, [user]);

    // Visualización de producto
    const handleViewProduct = (productId) => {
        if (!user) {
            setShowModal(true); // Muestra el modal si no hay usuario autenticado
        } else {
            navigate(`/product/${productId}`); // Navega a la página del producto
        }
    };

    return (
        <main>
            {showWelcomeMessage && (
                <section className="welcome-message">
                    <p>Bienvenido, {user.displayName || user.email}!</p>
                </section>
            )}
            <header className="relative bg-custom bg-cover">
                <h2 className='text-4xl font-bold text-white w-80 ml-20 mb-10 pt-10'>
                    Tus frutas y verduras favoritas en la misma web.
                </h2>
                <NavLink title='Productos' to={'/products'} className={'pb-2 pt-2 pl-4 pr-4 text-2xl text-white font-semibold bg-verde bg-opacity-50 rounded ml-20'}>
                    ¡Compra aquí!
                </NavLink>
            </header>
            <section className='flex flex-col md:flex-row'>
                {productos.slice(8, 11).map(producto => (
                    <aside key={producto.id} className='bg-gray-100 m-10 rounded-xl'>
                        <img className='rounded-t-xl' src={producto.imagen} alt={producto.nombre} />
                        <h3 className='text-3xl font-medium m-5'>{producto.nombre}</h3>
                        <h3 className='text-2xl font-bold ml-5'>Dirección:</h3>
                        <h4 className='text-2xl ml-5 mt-2 mb-4'>{producto.direccion}</h4>
                        <button onClick={() => handleViewProduct(producto.id)} 
                            className='w-full text-2xl font-semibold text-white bg-verde2 rounded-b-xl flex justify-center p-2' title={producto.nombre}>Ver Producto
                        </button>
                    </aside>
                ))}
            </section>
            <section className='md:flex'>
                <img className='lg:m-20 lg:h-80 md:h-40 md:m-5' src="https://common.crowdfarming.com/uploaded-images/1668609056508-c7b78c0c-ac53-4ef8-9020-69e21438d94a.jpg" alt="Agricultor" />
                <aside className='lg:mt-20 md:mt-5'>
                    <h2 className='lg:text-3xl md:text-2xl font-bold'>Sobre Nosotros</h2>
                    <p className='lg:text-2xl lg:mt-5 md:mr-10 m-2'>
                        Desde <span className='verde font-medium'>A Colleita</span>, nos enorgullece conectar a los consumidores con alimentos frescos y de alta calidad directamente de nuestros 
                        agricultores locales. Desde frutas y verduras recién cosechadas hasta productos lácteos y carnes cuidadosamente seleccionadas, 
                        nos comprometemos a proporcionar productos alimenticios que sean no solo deliciosos, sino también cultivados de manera responsable 
                        y sostenible.
                    </p>
                </aside>
            </section>
            <Modal show={showModal} handleClose={() => setShowModal(false)} />
        </main>
    );
};

export default Home;


