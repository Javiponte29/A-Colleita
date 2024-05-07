import './App.css'
import Home from './components/Home/Home';
import AuthProvider from './context/authContext';

function App() {



    return(
        <div>
            <AuthProvider>
            <Home />
            </AuthProvider>
        </div>
    );
};

export default App;
