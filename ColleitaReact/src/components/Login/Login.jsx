import { useState } from "react";
import { useAuth } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    // Almacena el email y contraseña
    const [userCredentials, setUserCredentials] = useState({
        email: "",
        password: "",
    });

    // Extrae las funciones y el usuario del contexto de autenticación
    const { login, loginWithGoogle, user } = useAuth();

    // Hook para navegar entre rutas
    const navigate = useNavigate();
    // Manejar errores de inicio de sesión
    const [error, setError] = useState("");

    // Cambios en los campos del formulario
    const handleChange = ({ target: { name, value } }) => {
        setUserCredentials({ ...userCredentials, [name]: value });
    };

    // Envío del formulario
    const handleSubmit = async e => {
        e.preventDefault();
        setError(''); // Reinicia el estado de error
        try {
            // Intenta iniciar sesión con las credenciales del usuario
            await login(userCredentials.email, userCredentials.password);
            navigate("/"); // Navega a la página principal después de iniciar sesión
        } catch (error) {
            console.log(error.code); // Muestra el código de error en la consola
            // Maneja diferentes códigos de error
            switch (error.code) {
                case "auth/missing-password":
                    setError('Falta la contraseña');
                    break;
                case "auth/invalid-email":
                    setError('Correo electrónico no válido');
                    break;
                case "auth/user-not-found":
                    setError('No existe un usuario con ese correo');
                    break;
                case "auth/wrong-password":
                    setError('Contraseña incorrecta');
                    break;
                default:
                    setError('Correo o contraseña inválidos');
            }
        }
    };

    // Inicio de sesión con Google
    const handleGoogleSignin = async () => {
        try {
            await loginWithGoogle(); // Inicia sesión con Google
            navigate("/"); // Navega a la página principal después de iniciar sesión
        } catch (error) {
            setError('Ocurrió un error al iniciar sesión con Google');
        }
    };

    return (
        <main className="bg-lr min-h-screen flex justify-center">
            <section className="bg-black bg-opacity-30 h-96 pt-6 rounded-xl w-96 flex flex-col mt-20">
                <h1 className="text-4xl text-white font-bold text-center mb-3">Login</h1>
                <form onSubmit={handleSubmit} className="flex flex-col items-center justify-around h-72">
                    {error && <p className="text-red-700">{error}</p>}
                    <input title="correo electrónico" className="w-60 h-14 border border-white text-white bg-black bg-opacity-60 font-medium pl-4" name='email' id='email' type="email" placeholder='youremail@gmail.com' onChange={handleChange} />
                    <input title="contraseña" className="w-60 h-14 border border-white text-white bg-black bg-opacity-60 font-medium pl-4" type="password" name='password' id='password' placeholder='Min 6 caracteres' onChange={handleChange} />
                    <p className="text-white">¿No tienes cuenta? <Link title="Registrarse" to={"/register"} className="underline">Regístrate</Link></p>
                    <button title="Iniciar Sesión" className="bg-verde text-white w-60 h-12">Login</button>
                    <button title="Iniciar Sesión Google" className="bg-white w-60 h-10 flex justify-center items-center" onClick={handleGoogleSignin}><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAvVBMVEVHcEz8/f3////////+/v7s7u/6+vr5+vr5+vr9/f3////////5+vr////////Kzs/////////9/v74+fn4+fn////8vwbsTkJFiPPrQjI7q1gpp00yqVPrSTlAhfX9/f2hv/nwgHj2tLGt2bkqe/Q2gPV+qPd7woza5f2WuPns8v5ZtnHD48n92Yj80Wn+6sD4yMXtZ13znpn8xSnwuh3v6+WIwbFwoPb0qKPpKxT1mx7AtydjuXgcpjNCk8nTYqeQAAAAFXRSTlMA5d2fnApdnVLJpWJiowsJZNGXl5g9ng+vAAABP0lEQVQokY2S2XqCMBCFQVGWulRbkIRABASK0FZtq3Z9/8fqZCDK0oueCzJf/sxhJhlF+Z/G1kJVF9a4T2ZD+6LhrM1u7ZZumsyyO5pe2RQ3+O4Qhoddbd32jHzigwiJms4jTAvJqtb7GekIoSbC0F+tCNnvCSFhZawhRE/I84UfP4eyKMEMEXxA3lunYqN2fXZe/ajbjvA1YX10HIeLjXyNyrcQmwAHsD45zgue3gSozQPEgx50UYmELdtTmqYngNJ2WRVEY1nIOnATsS5lK5+MenUr28ANUtmKIvxij1KGuaUbuFgPxxvSxd4Xo9TzisLz2E+SS1e4eCylgFzK4Aj7PuJLVBevTPBfMSQxBp+qsol8UK167DLLsmNZlaVfR0Hv3muDwVjyJuKd8ZzrF8z1eX90jXtTVc07o0/+1C9hwDM1yvfWEgAAAABJRU5ErkJggg==" alt="Google" /></button>
                </form>
            </section>
        </main>
    );
};

export default Login;

