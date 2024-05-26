import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import Modal from "../Modal";

const Products = () => {
// Usuario actual
const { user } = useAuth();
// Almacena la lista de productos
const [productos, setProductos] = useState([]);
// Almacena el número de página actual
const [currentPage, setCurrentPage] = useState(1);
// Almacena el término de búsqueda
const [searchTerm, setSearchTerm] = useState('');
// Controla la visibilidad del modal
const [showModal, setShowModal] = useState(false);

const navigate = useNavigate();
// Número de productos por página
const productsPerPage = 9;

// Hook para cargar la lista de productos
useEffect(() => {
    fetch(`http://localhost:8080/cont/list`)
        .then(response => response.json())
        .then((result) => {
            console.log("Productos:", result);
            setProductos(result);
        })
        .catch((error) => {
            console.error("Error al obtener productos:", error);
        });
}, []);

// Filtra los productos por el término de búsqueda
const filteredProducts = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
);

// Calcula los índices del primer y último producto en la página actual
const indexOfLastProduct = currentPage * productsPerPage;
const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
// Productos mostrados en la página actual
const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

// Calcula el número de páginas
const pageNumbers = [];
for (let i = 1; i <= Math.ceil(filteredProducts.length / productsPerPage); i++) {
    pageNumbers.push(i);
}

// Cambiar a una página específica
const paginate = (pageNumber) => setCurrentPage(pageNumber);

// Evento de búsqueda
const handleSearch = (event) => {
    setSearchTerm(event.target.value);
};

// Visualización de un producto específico
const handleViewProduct = (productId) => {
    // Si el usuario no ha iniciado sesión, muestra el modal
    if (!user) {
        setShowModal(true);
    } else {
        // Si el usuario ha iniciado sesión, navega a la página del producto
        navigate(`/product/${productId}`);
    }
};


    return (
        <main>
            <header className="flex flex-col items-center">
                <h1 className="text-4xl verde font-bold mb-4">Nuestros productos</h1>
                <section className="flex items-center">
                    <h2 className="text-2xl font-medium pr-2">Buscar:</h2>
                    <input type="text" placeholder="Buscar producto..." value={searchTerm} onChange={handleSearch} className="border border-gray-300 rounded-md px-4 py-2 w-64"/>
                </section>
            </header>
            <section className='flex flex-wrap justify-center'>
                {currentProducts.map(producto => (
                    <section key={producto.id} className='bg-gray-100 m-10 rounded-xl w-96 flex flex-col justify-between'>
                    <aside>
                        <button onClick={() => handleViewProduct(producto.id)}>
                            <img className='rounded-t-xl h-60 w-96' src={producto.imagen} alt={producto.nombre} title={producto.nombre} />
                        </button>
                        <section className="flex justify-between items-center m-5">
                            <h3 className='text-3xl font-medium'>{producto.nombre}</h3>
                            <p className="text-2xl font-semibold">{producto.precio}€</p>
                        </section>
                    </aside>
                    <button title={producto.nombre} onClick={() => handleViewProduct(producto.id)} className='text-2xl font-semibold text-white bg-verde2 rounded-b-xl flex justify-center p-2 w-full'>
                        Ver Producto
                    </button>
                </section>
                
                ))}
            </section>
            <section className='flex justify-center mt-4'>
                <nav>
                    <ul className='pagination flex'>
                        {pageNumbers.map(number => (
                            <li key={number} className='page-item m-1'>
                                <button
                                    onClick={() => paginate(number)}
                                    className={`page-link ${currentPage === number ? 'bg-verde text-white' : 'bg-white text-verde'} rounded-full px-3 py-1`}>
                                    {number}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </section>
            <Modal show={showModal} handleClose={() => setShowModal(false)} />
        </main>
    );
};

export default Products;

