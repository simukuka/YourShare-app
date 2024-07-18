import React from "react";
import { useNavigate  } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import backbutton from '../images/back-button.png'
import { Form, Button } from 'react-bootstrap';
// import { pages } from "../App";

export const AddItemPage = (props) => {
  const navigate = useNavigate();
  function handleClick(){
    navigate("/")
  }
  return (
       
<Container>
  <Row>
    <button  onClick ={handleClick}><img src ={backbutton} alt="Back-Button" /> </button> <h2>Add item</h2>
    </Row>
    <Row>
      <Col>
      <Form>

      </Form>
      
      </Col>
      <Col></Col>

    </Row>
    <Row>
      
    </Row>
 
  
    </Container>
    
  
  );
};
