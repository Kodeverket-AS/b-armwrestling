import VariousLinks from "../components/diverse-linker/diverse-linker";
import Faq from "../components/faq/faq";
import Gallery from "../components/galleri/galleri";
import Hero from "../components/hero/Hero";
import NavBar from "../components/nav/NavBar";
import TermList from "../components/terminliste/terminliste";
import Treningstider from "../components/treningstider/treningstider";

const Home = () => {
    return (
        <>
            <Hero />
            <Treningstider />
            <Gallery />
            <VariousLinks />
            <TermList />
            <Faq />
        </>
    );
};

export default Home;
