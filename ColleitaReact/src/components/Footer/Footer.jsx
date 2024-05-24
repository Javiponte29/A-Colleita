
import { Link } from 'react-router-dom';
const Footer = () => {

    return (
        <footer className='bg-gray-300'>
            <Link to={'/'} className='text-2xl font-medium' title='Home'>Home</Link>
        </footer>
    );
};

export default Footer;