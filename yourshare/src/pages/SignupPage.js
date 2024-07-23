import React from "react";
import { pages } from "../App";
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignupPage() {
  return (
    <Container>
      <Row classNmae="justify-content-center">
        <Col md={6} className="text-center">
          <div className="mt-5">
            <img
              src="C:\Users\v-leecaceres\Documents\TNT\tntw3_2\Team13-2024-AppPrototype\yourshare\src\images\YS_icon.png"
              alt="YourShare Logo"
              style={{ width: '100px', height: '100px'}}
            />
            <h1>YourShare</h1>
            <h2>Join your community</h2>
          </div>
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Username:</Form.Label>
              <Form.Control type ="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group controlId="formPhoneNumber">
              <Form.Label>Phone number:</Form.Label>
              <Form.Control type="text" placeholder="Enter phone number" />
            </Form.Group>

            <Form.Group controlId="formZipCode">
              <Form.Label>Zip code:</Form.Label>
              <Form.Control type="text" placeholder="Enter zip code" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Join
            </Button>
          </Form>
          <div className="mt-3">
            <a href="/">Sign-in</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SignupPage;