import { Container } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Home.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
    const [time, setTime] = useState("00:00:00");

    useEffect(() => {
        const intervalId = setInterval(() => {
            const timeCurrent = new Date().toLocaleTimeString();
            setTime(timeCurrent);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return (
        <>
            <Header />
            <Container className='my-5'>
                <h1>Página Inicial</h1>
                <Link to="/products">Acesse a página de produtos</Link>
            </Container>

            <Container className="my-5">
                <p>{ time }</p>
            </Container>
            <Footer />
        </>
    );
}