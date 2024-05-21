import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewProduct = () => {
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);  // Estado para manejar la carga
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
                setLoading(false);  // Cambia el estado de carga
            })
            .catch((error) => {
                console.error("Error al obtener producto:", error);
                setLoading(false);  // Cambia el estado de carga
            });
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!producto) {
        return <div>Error al cargar el producto</div>;
    }

    return (
        <main className="flex flex-col items-center">
            <div className="bg-gray-100 m-10 rounded-xl w-96 flex flex-col justify-between">
                <img className="rounded-t-xl h-60 w-96" src={producto.imagen} alt={producto.nombre} />
                <h3 className="text-3xl font-medium m-5">{producto.nombre}</h3>
                <p className="text-xl m-5">{producto.descripcion}</p>
                <p className="text-2xl font-semibold m-5 text-verde2">${producto.precio}</p>
            </div>
        </main>
    );
};

export default ViewProduct;

