import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
    const [productos, setProductos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const productsPerPage = 9;

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

    const filteredProducts = selectedCategory === 'All'
        ? productos
        : productos.filter(producto => producto.categoria === selectedCategory);

    const filteredAndSearchedProducts = filteredProducts.filter(producto =>
        producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredAndSearchedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredAndSearchedProducts.length / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            <div className="flex justify-center mb-4">
                <input
                    type="text"
                    placeholder="Buscar producto..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="border border-gray-300 rounded-md px-4 py-2 w-64"
                />
            </div>
            <aside className='flex flex-wrap justify-center'>
                {currentProducts.map(producto => (
                    <div key={producto.id} className='bg-gray-100 m-10 rounded-xl w-96 flex flex-col justify-between'>
                        <Link to={`/${producto.id}`}>
                            <img className='rounded-t-xl h-60 w-96' src={producto.imagen} alt={producto.nombre} />
                            <h3 className='text-3xl font-medium m-5'>{producto.nombre}</h3>
                            <Link to={'/aboutus'} className='text-2xl font-semibold text-white bg-verde2 rounded-b-xl flex justify-center p-2'>
                                Ver Producto
                            </Link>
                        </Link>
                    </div>
                ))}
            </aside>
            <div className='flex justify-center mt-4'>
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
            </div>
        </div>
    );
};

export default Products;
