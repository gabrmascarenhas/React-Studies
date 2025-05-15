import Footer from "../Components/Footer";
import Header from "../Components/Header/indesx";
import Main from "../Components/Main";
import { Nav } from "../Components/Nav";

export function Home() {
    return (
        <>
        <Nav />
        <Header />
        <Main>
            {/* Children aqui */}
            <h1>Funcionando (HOME)</h1>
        </Main>
        <Footer />
        </>
    );
}
