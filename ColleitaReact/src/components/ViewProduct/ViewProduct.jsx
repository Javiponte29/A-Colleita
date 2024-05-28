import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewProduct = ({ addToCart }) => {
// Almacena el producto
const [producto, setProducto] = useState(null);
// Controla si la página está cargando
const [loading, setLoading] = useState(true);
// Almacena la cantidad de productos seleccionada por el usuario
const [cantidad, setCantidad] = useState(1);
// Muestra un mensaje de confirmación después de agregar un producto al carrito
const [confirmationMessage, setConfirmationMessage] = useState("");
// Obtiene el id del producto
const { id } = useParams();

// Carga los datos del producto desde el servidor
useEffect(() => {
    fetch(`http://localhost:8080/cont/${id}`)
        .then(response => {
            // Verifica si la respuesta de la red fue exitosa
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((result) => {
            // Se obtienen los datos del servidor y se actualiza el estado del producto
            console.log("Producto:", result);
            setProducto(result);
            setLoading(false);
        })
        .catch((error) => {
            // Por si hay un error en la consola
            console.error("Error al obtener producto:", error);
            setLoading(false);
        });
}, [id]);

// Incrementar la cantidad de productos seleccionada
const incrementarCantidad = () => {
    if (cantidad < 4) {
        setCantidad(cantidad + 1);
    }
};

// Decrementar la cantidad de productos seleccionada
const decrementarCantidad = () => {
    if (cantidad > 1) {
        setCantidad(cantidad - 1);
    }
};

// Maneja la selección de un producto al carrito
const handleAddToCart = () => {
    // Crea un objeto que combina el producto con la cantidad seleccionada
    const productWithQuantity = { ...producto, cantidad };
    // Llama a la función addToCart para agregar el producto al carrito
    addToCart(productWithQuantity);
    // Establece un mensaje de confirmación
    setConfirmationMessage("Producto en el perfil.");
    // Limpia el mensaje de confirmación después de 2 segundos
    setTimeout(() => {
        setConfirmationMessage("");
    }, 2000);
};

// Si la página está cargando, se muestra un mensaje de carga
if (loading) {
    return <div>Loading...</div>;
}

// Si no hay ningún producto cargado, se muestra un mensaje de error
if (!producto) {
    return <div>Error al cargar el producto</div>;
}


    return (
        <main className="m-5">
            <section className="flex m-10 items-center flex-col lg:flex-row">
                <img title={producto.nombre} className="tam" src={producto.imagen} alt={producto.nombre} />
                <aside className="flex flex-col ml-10">
                    <h3 title={producto.nombre} className="text-3xl font-medium m-5">{producto.nombre}</h3>
                    <section className="bg-pr rounded-xl w-96 flex flex-col">
                        <aside className="flex justify-between items-center ml-4 mr-4">
                            <p className="text-xl font-medium flex items-center" title="valoración">Valoración: {producto.valoracion}<img className="w-4 ml-1" src="https://www.svgrepo.com/show/452106/star.svg" alt="Estrella" /></p>
                            <p title="Precio" className="text-2xl font-semibold m-5 text-verde2">{producto.precio}€</p>
                        </aside>
                        <p className="m-4 text-xl font-medium">Dirección: {producto.direccion}</p>
                        <div className="flex items-center justify-center m-5">
                            <button title="sumar" onClick={decrementarCantidad} className="bg-verde text-white px-4 py-2 rounded-l">-</button>
                            <span title="Cantidad" className="mx-4 text-xl">{cantidad}kg/L</span>
                            <button title="restar" onClick={incrementarCantidad} className="bg-verde text-white px-4 py-2 rounded-r">+</button>
                        </div>
                        <button title="Añadir al carrito" onClick={handleAddToCart} className="bg-verde2 text-white px-4 py-2 rounded-xl m-4">Añadir al Carrito</button>
                    </section>
                    {confirmationMessage && (
                        <p className="mt-4 text-green-500">{confirmationMessage}</p>
                    )}
                </aside>
            </section>
            <section className="flex flex-col text-left mr-6 ml-6 lg:mr-32 lg:ml-32">
                <h2 className="text-2xl font-bold bg-des p-5">Descripción</h2>
                <p className="text-xl bg-desc p-6">{producto.descripcion}</p>
            </section>
        </main>
    );
};

export default ViewProduct;

