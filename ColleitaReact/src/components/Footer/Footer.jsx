
import { Link } from 'react-router-dom';
const Footer = () => {

    return (
        <footer className='bg-gray-300'>
            <section className='flex justify-around'>
                <Link to={'/'} className='text-2xl font-medium' title='Home'>Home</Link>
                <Link to={'/products'} className='text-2xl font-medium' title='Home'>Products</Link>
                <Link to={'/aboutus'} className='text-2xl font-medium' title='Home'>About us</Link>
            </section>
            <section className='flex justify-around mt-4'>
                <Link><img className='w-10 h-10' src="https://www.svgrepo.com/show/521711/instagram.svg" alt="Instagram" /></Link>
                <Link><img className='w-14 h-10' src="https://logos-world.net/wp-content/uploads/2023/08/X-Logo.png" alt="Instagram" /></Link>
            </section>
        </footer>
    );
};

export default Footer;