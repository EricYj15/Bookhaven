import ColorSchemesExample from "./ColorSchemesExample"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Footer from "./Footer";

import Carousel from './carousel'

function Contato(){
    return(
        <div>
            <ColorSchemesExample/><br/>
            <Carousel/><br/>
        
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Nome:</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Email:</InputGroup.Text>
        <Form.Control
          placeholder="Email"
          aria-label="Email"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Senha:</InputGroup.Text>
        <Form.Control
          placeholder="Senha"
          aria-label="Senha"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Senha:</InputGroup.Text>
        <Form.Control
          placeholder="Senha"
          aria-label="Senha"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
<br/>
      
      <Button variant="success">Enviar</Button>{' '}<br/><br/>

      <h5>
Estamos ansiosos pelo seu login           </h5><br/>

            <Footer/>   
        </div>
    )
}

export default Contato