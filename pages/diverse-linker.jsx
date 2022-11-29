import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function VariousLinks() {
    return (
        <>
            <Head>Diverse Linker</Head>
            <h1>Diverse Linker</h1>
            <section>
                <div id='linksAndPics'>
                    <p>Linker og Bilde seksjon</p>
                    <div id='left__side'>
                        <p>Venstre Side</p>
                    </div>
                    <div id='right__side'>
                        <p>Høyre Side</p>
                    </div>
                </div>
            </section>
        </>
    );
}
