import { useState } from "react";
import { useAuth } from '../../context/authContext';
import { Link, useNavigate } from "react-router-dom";


const Register = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const { signup } = useAuth();

    const navigate = useNavigate();
    const [error, setError] = useState();

    const handleChange = ({target: {name, value}}) => {
        setUser({...user, [name]: value})
    };

    const handleSubmit = async e => {
        e.preventDefault()
        setError('');
        try {
            await signup(user.email, user.password);
            navigate('/');
        } catch (error) {
            console.log(error.code);
            if (error.code === "auth/missing-password") {
                setError('Te falta la contraseña');
            } 
            if (error.code === "auth/email-already-in-use") {
                setError('Correo ya registrado');
            }
            setError(error.message);
        }
    }

    return (
        <main className="bg-lr min-h-screen flex justify-center">
            <section className='bg-black bg-opacity-30 h-96 pt-6 rounded-xl w-96 flex flex-col mt-20'>
            <h1 className="text-4xl text-white font-bold text-center mb-3">Register</h1>
                <form onSubmit={handleSubmit} className="flex flex-col items-center justify-around h-72">
                    {error && <p>{error}</p>}
                    <input className="w-60 h-14 border border-white text-white bg-black bg-opacity-60 font-medium pl-4" name='email' id='email' type="email" placeholder='Correo electrónico' onChange={handleChange} />
                    <input className="w-60 h-14 border border-white text-white bg-black bg-opacity-60 font-medium pl-4" type="password" name='password' id='password' placeholder='Contraseña' onChange={handleChange}/>
                    <p className="text-white">¿Ya tienes cuenta? <Link to={'/login'} className="underline">Inicia Sesión</Link>.</p>
                    <button className="bg-verde text-white w-60 h-12">Registrarse</button>
                </form>
            </section>
        </main>
    );

};

export default Register;