import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import  './orgulhoneil.css';
import cardd from './card.jsx';

function ColorSchemesExample() {
  return (
    <>

<div className='bgbook' style={{textAlign:"center"}}  ><img alt='' src='/src/assets/Logo.png' height="150" className="d-inline-block align-top"/></div>
    <div bg="danger" variant="dark" >
    
      
    
      <Navbar bg="danger" variant="dark">

        <Container>
          <Nav className="me-auto">
          <Nav.Link style={{fontSize:"20px", color:"lightgray", padding: "0px", }} href="/">BookHeaven</Nav.Link>
            <Nav.Link style={{marginLeft: "600px"}} href="/contato">Contato</Nav.Link>
            <Nav.Link style={{marginLeft: "30px"}} href="/sobre">Cadastro de produtos</Nav.Link>
          </Nav>
        </Container>  
      </Navbar>
      </div>
    </>
  );
}

export default ColorSchemesExample;