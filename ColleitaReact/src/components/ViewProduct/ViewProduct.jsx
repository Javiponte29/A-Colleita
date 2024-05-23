import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewProduct = ({ addToCart }) => {
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cantidad, setCantidad] = useState(1);
    const [confirmationMessage, setConfirmationMessage] = useState("");
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/cont/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((result) => {
                console.log("Producto:", result);
                setProducto(result);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error al obtener producto:", error);
                setLoading(false);
            });
    }, [id]);

    const incrementarCantidad = () => {
        if (cantidad < 4) {
            setCantidad(cantidad + 1);
        }
    };

    const decrementarCantidad = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    const handleAddToCart = () => {
        const productWithQuantity = { ...producto, cantidad };
        addToCart(productWithQuantity);
        setConfirmationMessage("Producto añadido al carrito correctamente.");
        setTimeout(() => {
            setConfirmationMessage("");
        }, 2000);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!producto) {
        return <div>Error al cargar el producto</div>;
    }

    return (
        <main className="flex flex-col items-center">
            <img className="w-1/2" src={producto.imagen} alt={producto.nombre} />
            <section className="flex flex-col ml-10">
                <h3 className="text-3xl font-medium m-5">{producto.nombre}</h3>
                <section className="bg-pr rounded-xl w-96 flex flex-col justify-between">
                    <p className="text-2xl font-semibold m-5 text-verde2">{producto.precio}€</p>
                    <div className="flex items-center justify-center m-5">
                        <button onClick={decrementarCantidad} className="bg-verde text-white px-4 py-2 rounded-l">-</button>
                        <span className="mx-4 text-xl">{cantidad}</span>
                        <button onClick={incrementarCantidad} className="bg-verde text-white px-4 py-2 rounded-r">+</button>
                    </div>
                </section>
                <button onClick={handleAddToCart} className="bg-verde2 text-white px-4 py-2 rounded mt-4">
                    Añadir al Carrito
                </button>
                {confirmationMessage && (
                    <p className="mt-4 text-green-500">{confirmationMessage}</p>
                )}
            </section>
        </main>
    );
};

export default ViewProduct;

