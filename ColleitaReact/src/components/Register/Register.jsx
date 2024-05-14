import { useState } from "react";
import { useAuth } from '../../context/authContext';
import { useNavigate } from "react-router-dom";


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
        <div>
                    <div className='form-reg'>
            

            <form onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
                <label htmlFor="email">Email</label>
                <input name='email' id='email'  type="email" placeholder='youremail@gmail.com'
                onChange={handleChange}
                />
                
                <label htmlFor="password">Password</label>
                <input type="password" name='password' id='password' placeholder='Min 6 caractecres'
                onChange={handleChange}/>
                <button>Registrarse</button>
            </form>
            </div>
        </div>
    );

};

export default Register;