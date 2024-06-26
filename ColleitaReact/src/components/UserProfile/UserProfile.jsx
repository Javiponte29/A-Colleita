import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const UserProfile = ({ cart, removeFromCart }) => {
// Obtiene el usuario actual y la función de cierre de sesión
const { user, logout } = useAuth();
// Controlar si la barra lateral está abierta o cerrada
const [isSidebarOpen, setIsSidebarOpen] = useState(false);
// Cambiar el estado de la barra lateral
const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
};

const navigate = useNavigate();

// Maneja el cierre de sesión del usuario
const handleLogout = async () => {
    await logout(); // Función de cierre de sesión
    navigate("/"); // Redirige al usuario a la página de inicio
};

// Calcular el precio total del carrito sumando los precios de los productos
const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.totalPrice, 0);
};

const createOrder = (data, actions) => {
    return actions.order.create({
        purchase_units: [{
            amount: {
                value: getTotalPrice().toFixed(2)
            }
        }]
    });
};

// Se ejecuta cuando se aprueba una transacción de PayPal
const onApprove = (data, actions) => {
    return actions.order.capture().then(details => {
        alert("Transacción completada por " + details.payer.name.given_name); // Mensaje de alerta con el nombre del pagador
    });
};


    return (
        <main className="min-h-screen bg-gray-100 flex">
            <section className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-40 transition-opacity ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleSidebar}></section>
            <section className={`fixed inset-y-0 left-0 bg-white shadow-lg w-64 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
                <aside className="p-6">
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
                </aside>
            </section>

            <section className="flex-1 flex flex-col">
                <aside className="bg-white shadow p-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">Mi Perfil</h1>
                    <button onClick={toggleSidebar} className="bg-verde2 text-white px-4 py-2 rounded hover:border-green-400 focus:outline-none">Abrir Menú</button>
                </aside>
                <aside className="p-4 flex-grow">
                    <h2 className="text-3xl font-semibold mb-4 ">
                        <svg className="h-8 w-8" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <circle cx="9" cy="19" r="2" />
                            <circle cx="17" cy="19" r="2" />
                            <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" />
                        </svg>
                        Carrito de Compras
                    </h2>
                    {cart.length === 0 ? (
                        <p>El carrito está vacío</p>
                    ) : (
                        <div>
                            {cart.map((product, index) => (
                                <div key={index} className="flex items-center justify-between py-2 border-b">
                                    <div className="flex items-center space-x-4">
                                        <img src={product.imagen} alt={product.nombre} className="w-16 h-16 rounded" />
                                        <div>
                                            <h3 className="text-lg font-medium">{product.nombre}</h3>
                                            <p className="text-gray-600">Cantidad: {product.cantidad}</p>
                                        </div>
                                    </div>
                                    <p className="font-semibold">{product.totalPrice.toFixed(2)}€</p>
                                    <button onClick={() => removeFromCart(index)} className="text-red-500">Eliminar</button>
                                </div>
                            ))}
                            <div className="flex justify-between mt-4">
                                <p className="text-xl font-semibold">Total:</p>
                                <p className="text-xl font-semibold">{getTotalPrice().toFixed(2)}€</p>
                            </div>
                            <div className="mt-4 flex justify-end">
                                <PayPalScriptProvider options={{ "client-id": "AUFAdttEaKe3MIAsivRG26lrubNH00P9fao0Ax036kkF2oUQxBepnmfdlMS0uWMBzS8a1pYH34TSkdOy" }}>
                                    <PayPalButtons
                                        createOrder={createOrder}
                                        onApprove={onApprove}
                                    />
                                </PayPalScriptProvider>
                            </div>
                        </div>
                    )}
                </aside>
            </section>
        </main>
    );
};

export default UserProfile;




