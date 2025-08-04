import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Products.css";
import { useEffect, useState } from "react";
import TableProd from "../../components/tableProduct/tableprod";
import { useForm } from "react-hook-form";
import axios from "axios";

const nomeValid = {
    required: {
        value: true,
        message: "Preencha o nome do produto."
    },
    maxLength: {
        value: 20,
        message: "O nome do produto deve ter no máximo 20 caracteres."
    }
};
const quantValid = {
    required: {
        value: true,
        message: "Preencha a quantidade de produtos."
    },
    min: {
        value: 1,
        message: "Quantidade mínima de 1."
    }
};
const precoValid = {
    required: {
        value: true,
        message: "Preencha o preço do produto."
    },
    min: {
        value: 0.0001,
        message: "O preço do produto não pode ser menor ou igual a 0."
    }
};

export default function Products() {
    const [produtos, setProdutos] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    function onSubmit(dados) {
        dados.id = produtos.length
        setProdutos([...produtos, dados]);
    }

    async function buscarProdutos() {
        const url = "https://api-nodejs-344f.onrender.com/produtos";
        const response = await axios.get(url);
        const produtos = response.data;
        setProdutos(produtos);
    }

    useEffect(() => {
        buscarProdutos();
    }, []);

    return (
        <>
            <Header />

            <Container className="my-5">
                <h1>Produtos</h1>

                <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="12" controlId="nome" >
                            <Form.Label>Nome do Produto</Form.Label>
                            <Form.Control type="text" isInvalid={!!errors.nome} {...register("nome", nomeValid)} />
                            <Form.Control.Feedback type="invalid">
                                {errors.nome?.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="quantidade">
                            <Form.Label>Quantidade</Form.Label>
                            <Form.Control type="number" isInvalid={!!errors.quantidade} {...register("quantidade", quantValid)} />
                            <Form.Control.Feedback type="invalid">
                                {errors.quantidade?.message}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="6" controlId="preco">
                            <Form.Label>Preço</Form.Label>
                            <Form.Control type="number" isInvalid={!!errors.preco} {...register("preco", precoValid)} />
                            <Form.Control.Feedback type="invalid">
                                {errors.preco?.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Button type="submit">Cadastrar</Button>
                </Form>
            </Container>

            <Container className='my-5'>
                <h2>Lista de Produtos</h2>

                {produtos.length > 0 ? (
                    <TableProd produtos={produtos} />
                ) : (
                    <p>Não há produtos no estoque.</p>
                )}
            </Container>
            <Footer />
        </>
    );
}