import { Button, Form, Col, Row, Container,Image } from "react-bootstrap";
import {useState} from "react"
//import 'bootstrap/dist/css/bootstrap.min.css';
import backbutton from "../images/back-button.png";
import upload from "../images/image_upload.png";
//import { Form } from 'react-bootstrap';
// import { pages } from "../App";

export const AddItemPage = (props) => {
  const [image,setImage]=useState(null)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <Container>
      <Row md={{ span: 3, offset: 1 }}>
        <Col md={1}>
          <img src={backbutton} width="50px" height="50px" />
        </Col>
        <Col md={2}>
          {" "}
          <h2>Add Item</h2>
        </Col>
      </Row>
      <Form>
        <Row md={8}>
          <Col md={6} className="justify-center">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Item Name</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label> Type: </Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control as="textarea" rows={3} placeholder="Description" />
            </Form.Group>
          </Col>
          <Col md={6} className="text-center">
            <Form.Group controlId="formFile">
              <Form.Label>Select Image</Form.Label>
              <Form.Control
                type="file"
                accept=".png, .jpg, .jpeg"
                onChange={handleImageChange}
                required
              />
              {image && (
                <div className="mt-2">
                  <Image src={image} alt="Preview" thumbnail />
                </div>
              )}
            </Form.Group>
          </Col>
        </Row>
        <Row md={{ span: 8, offset: 2 }}>
          <Col md={10}></Col>
          <Col md={1}>Cancel</Col>
          <Col md={1}>
            {" "}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
