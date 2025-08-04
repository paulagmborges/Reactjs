// Criar a página de Usuarios
// Configure a página de usuarios na rota /users
// Na página de usuários adicione um cabeçalho e 

import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { Container } from 'react-bootstrap' 
import './User.css';

function User() {
  return (
   <>
   <Header />
   <Container className='py-5'>
    <h1>Página de Usuários</h1>
    <p>Esta é a página onde você pode gerenciar usuários.</p>
    </Container>
    <Footer />
    </>
  )
}

export default User