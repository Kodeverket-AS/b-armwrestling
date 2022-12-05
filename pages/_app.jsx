import "../styles/globals.css";
import { useEffect } from "react";
import NavBar from "../components/nav/NavBar";
import Footer from "../components/footer/Footer";

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <NavBar />
            <div className='wrapper ba-bg-dark'>
                <Component {...pageProps} />
            </div>

            <Footer />
        </>
    );
};

export default MyApp;
