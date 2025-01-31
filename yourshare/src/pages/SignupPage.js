import React, {useState} from "react";
import { Container, Row, Col, Form, Button, FormLabel} from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import YS_Icon from "../images/YS_icon.png";

function SignupPage(props) {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username) {
      localStorage.setItem('username', username);
      navigate('/welcome', {state: { username } });
    }
  };

  const handleLinkClick = (e) => {
    e.preventDefault();
    document.getElementById('signupForm').requestSubmit();
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} className="d-flex flex-column justify-content-center align-items-center text-center">
          <div className="mt-5">
            <h1><b>YourShare</b></h1>
            <img
              src= { YS_Icon }
              alt="YourShare Logo"
              style={{ width: '250px', height: '250px'}}
            />
          </div>
        </Col>
        <Col md={6}>
          <div className="mt-5">
            <h1 className="mb-4">Join your community</h1>
            <Form id="signupForm" className="form" onSubmit={handleSubmit}>
              <FormLabel><h3>Sign-up</h3></FormLabel>
              <Form.Group controlId="formUsername">
                <Form.Control 
                  type ="text" 
                  placeholder="Username:" 
                  className="mb-5" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formPhoneNumber">
                <Form.Control type="text" placeholder="Phone number:" className="mb-5" required/>
              </Form.Group>

              <Form.Group controlId="formZipCode">
                <Form.Control type="text" placeholder="Zip code:" className="mb-5"  />
              </Form.Group>

              <div className="text-end">
                <Button variant="secondary" type="submit" style={{ width: '50%' }} >
                  Join
                </Button>
              </div>
            </Form>
          </div>
          <div className="mt-3 text-start">
            <a href="/welcome" className="custom-link" onClick={handleLinkClick}>Sign-in</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export { SignupPage };