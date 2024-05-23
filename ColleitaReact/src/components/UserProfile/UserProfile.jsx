import React, { useState } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const UserProfile = ({ cart, removeFromCart }) => {
    const { user, logout } = useAuth();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleLogout = async () => {
        await logout();
        navigate("/");
    };

    return (
        <div className="min-h-screen bg-gray-100 flex">
            <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-40 transition-opacity ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleSidebar}></div>
            <div className={`fixed inset-y-0 left-0 bg-white shadow-lg w-64 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
                <div className="p-6">
                    <button onClick={toggleSidebar} className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <h2 className="text-2xl font-bold mb-4">Perfil de {user.displayName}</h2>
                    <p className="text-gray-600 mb-4">Email: {user.email}</p>
                    <button onClick={handleLogout} className="bg-verde2 text-white px-4 py-2 flex items-center font-medium rounded focus:outline-none">
                        Cerrar sesión 
                        <svg className="h-6 w-6 pl-1" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />  
                            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 -2v-2" />  
                            <path d="M7 12h14l-3 -3m0 6l3 -3" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="flex-1 flex flex-col">
                <header className="bg-white shadow p-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Mi Perfil</h1>
                    <button onClick={toggleSidebar} className="bg-verde2 text-white px-4 py-2 rounded hover:border-green-400 focus:outline-none">Abrir Menú</button>
                </header>
                <main className="p-4 flex-grow">
                    <h2 className="text-3xl font-semibold mb-4 "><svg class="h-8 w-8 "  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="9" cy="19" r="2" />  <circle cx="17" cy="19" r="2" />  <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" /></svg>Carrito de Compras</h2>
                    {cart.length === 0 ? (
                        <p>El carrito está vacío</p>
                    ) : (
                        cart.map((product, index) => (
                            <div key={index} className="bg-white shadow rounded-lg p-4 mb-4">
                                <div className="flex items-center space-x-4">
                                    <img src={product.imagen} alt={product.nombre} className="w-16 h-16 rounded" />
                                    <div>
                                        <h3 className="text-lg font-medium">{product.nombre}</h3>
                                        <p className="text-gray-600">{product.descripcion}</p>
                                        <p className="text-gray-800 font-bold">${product.precio}</p>
                                        <p className="text-gray-800">Cantidad: {product.cantidad}</p>
                                        <button
                                            onClick={() => removeFromCart(index)}
                                            className="bg-red-500 text-white px-4 py-2 rounded mt-2"
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </main>
            </div>
        </div>
    );
};

export default UserProfile;

