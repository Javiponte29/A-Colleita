import React from 'react';
import { useNavigate } from 'react-router-dom';

const Modal = ({ show, handleClose }) => {
    // Hook para navegar entre rutas
    const navigate = useNavigate(); 

    if (!show) {
        return null;
    }

    return (
        <section className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
            <section className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Necesitas iniciar sesión</h2>
                <p className="mb-4">Para ver los detalles del producto, por favor inicia sesión o regístrate.</p>
                <aside className="flex justify-end">
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                        onClick={() => navigate('/login')}
                    >
                        Iniciar sesión
                    </button>
                    <button
                        className="bg-verde2 text-white px-4 py-2 rounded"
                        onClick={() => navigate('/register')}
                    >
                        Registrarse
                    </button>
                </aside>
                <button
                    className="absolute top-0 right-0 m-4 text-2xl font-bold"
                    onClick={handleClose}
                >
                    &times;
                </button>
            </section>
        </section>
    );
};

export default Modal;
