import React, {useState} from "react";
//import { pages } from "../App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Container, Row, Col} from "react-bootstrap";
//import { Link, useNavigate } from "react-router-dom";


const WelcomePage = () => {
  const [borrowedItems] = useState([
    { item: 'Blender', lender: 'Stacey' },
    { item: 'Rake', lender: 'Marcos' },
    { item: 'Car', lender: 'Marcos' },
    { item: 'Bike', lender: 'Cam' },
    { item: 'Drill', lender: 'Stacey' },
    { item: 'Ladder', lender: 'Marcos' },
    { item: 'Kayak', lender: 'Cam' },
    { item: 'The Office DVD Box Set', lender: 'Stacey' },
    { item: 'Cart', lender: 'Jim' },
  ]);

  const [yourItems] = useState([]);
  const [lentTo] = useState([{ item: 'Add your first item', lentTo: 'A friend' }]);

  return (
    <Container className="mt-4">
      <Row className="mb-4">
        <h1> Welcome, [username]!</h1>
      </Row>
      <Row>
        <Col md={6}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Items for borrowing</th>
                <th>Lender</th>
              </tr>
            </thead>
            <tbody>
              {borrowedItems.map((borrow, index) => (
                <tr key={index}>
                  <td>{borrow.item}</td>
                  <td>{borrow.lender}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col md={6}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Your items</th>
                <th>Lent to</th>
              </tr>
            </thead>
            <tbody>
              {yourItems.map((item, index) => (
                  <tr key={index}>
                    <td>{item.item}</td>
                    <td>{item.lentTo}</td>
                  </tr>
                ))
              }
              {lentTo.map((item, index) => (
                <tr key={index}>
                  <td>{item.item}</td>
                  <td>{item.lentTo}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="mb-3">
            <Button variant="secondary" className="mr-2">Add item</Button>
          </div>
          <div className="center-text">
            <Button variant="secondary">Manage community</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export { WelcomePage};