import './App.css';
import Header from './components/Header';
import About from './About';
import Shop from './components/Shop';
import Menu from './components/Menu';
import Clients from './components/Clients';
import Prices from './Prices';
import Sections from './components/Sections';

function Home(){
    return(
        <div >
        <Header />
        <About />
        <Shop />
        <Menu />
        <Clients />
        <Prices />
        <Sections />
        </div>
    );
}

export default Home