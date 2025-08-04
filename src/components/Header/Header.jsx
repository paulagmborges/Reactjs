import "./Header.css";


function Header() {
   const nome = "Paula";
   const hoje = new Date().toLocaleDateString()
  return (
    <header>
      <h1>Bem vindo(a), { nome } hoje é { hoje }!</h1>  
    </header>
  )
}

export default Header



