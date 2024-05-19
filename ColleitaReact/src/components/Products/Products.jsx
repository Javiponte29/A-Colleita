import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
    const [productos, setProductos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9; // Puedes ajustar este valor según tus necesidades

    useEffect(() => {
        fetch(`http://localhost:8080/cont/list`)
            .then(response => response.json())
            .then((result) => {
                setProductos(result);
            });
    }, []);

    // Calcular los índices del primer y último producto de la página actual
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = productos.slice(indexOfFirstProduct, indexOfLastProduct);

    // Calcular el número total de páginas
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(productos.length / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    // Función para cambiar de página
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <aside className='flex flex-wrap justify-center'>
                {currentProducts.map(producto => (
                    <div key={producto.id} className='bg-gray-100 m-10 rounded-xl w-96 flex flex-col justify-between'>
                        <Link to={`/${producto.id}`}>
                            <img className='rounded-t-xl h-60 w-96' src={producto.imagen} alt={producto.nombre} />
                            <h3 className='text-3xl font-medium m-5'>{producto.nombre}</h3>
                            <Link to={''} className='text-2xl font-semibold text-white bg-verde2 rounded-b-xl flex justify-center p-2'>
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
                                    className={`page-link ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} rounded-full px-3 py-1`}>
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
