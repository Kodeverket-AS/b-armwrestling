import BliMedlem from "../components/bli-medlem/bli-medlem";
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
            <Hero /> {/* black */}
            <BliMedlem /> {/* white */}
            <Treningstider />{/* black */}
            <Gallery /> {/* white */}
            <TermList /> {/* black */}
            <VariousLinks /> {/* white */}
            <Faq /> {/* black */}
            {/* <Samarbeidspatnerer /> white */}
        </>
    );
};

export default Home;
