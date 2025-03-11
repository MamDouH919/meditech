import Banner from '../Components/Home/Banner';
import About from '../Components/Home/About';
import Suppliers from '../Components/Home/Suppliers';
import Contact from '../Components/Home/Contact';
import Gallery from '../Components/Home/Gallery';
import Clients from '../Components/Home/Clients';
import Leader from '../Components/Home/Leader';

const Home = () => {

    return (
        <>
            <Banner />
            <About />
            <Leader />
            <Suppliers />
            <Contact />
            <Gallery />
            <Clients />
        </>
    )
}

export default Home