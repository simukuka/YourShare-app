/* This is prithvi's page */

import React from "react";
//import { pages } from "../App"
import backButton from "../images/back-button.png"; /*importing the image and giving it backbutton*/ 
import blender from "../images/YS_blender.png";
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import '../BorrowItem.css';
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const BorrowItem = (props) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate('/welcome');
  }

  return (
    <div>
      <Container>
        <Row id = "row1">
              <Col id = "co1">
              <img id = "backIcon" src={backButton} style={{ width: "50px", height: "auto" }} alt="Back Button" onClick={handleOnClick}/>
              <h1>Borrow item</h1></Col>
        </Row>

        <Row id="row2">
          <Col>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Control type="email" placeholder="Item name: Blender" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                  <Form.Control type="email" placeholder="Type: Kitchen" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                  <Form.Control type="email" placeholder="Lender: Stacey" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea4">
                  <Form.Control as="textarea" rows={3} placeholder="The lid is a little loose so make sure to hold it tight to avoid a smoothie disaster! " />
                </Form.Group>
              </Form>

              <img src={blender} alt="Back Button"/>
          </Col>
        </Row>

        <Row id = "row3">
          <Col>           
            <Navbar bg="None" data-bs-theme="dark" id = "navbarBottom">
              <Nav className="me-auto">
                <Nav.Link href="#home" onClick={handleOnClick}>Cancel</Nav.Link>
                <Button variant="secondary" onClick={handleOnClick}>Request To Borrow</Button>
              </Nav>
            </Navbar>
          </Col>

        </Row>

      </Container>



    </div>
    
  );
};
