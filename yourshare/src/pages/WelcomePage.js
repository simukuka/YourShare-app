import React, {useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Container, Row, Col, Form} from "react-bootstrap";
import "../App.css";


const WelcomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const username = location.state?.username || "[username]";

  const [borrowedItems, setBorrowedItems] = useState([
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

  const [yourItems, setYourItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [newLender, setNewLender] = useState('');

  const handleManageCommunity = () => {
    navigate('/community');
  }

  const handleAddItem = () => {
    if (newItem && newLender) {
      setBorrowedItems([...borrowedItems, { item: newItem, lender: newLender }]);
      setNewItem('');
      setNewLender('');
    }
  }

  return (
    <Container className="mt-4">
      <Row className="mb-4 text-start">
        <h1> Welcome, {username}!</h1>
      </Row>
      <Row>
        <Col md={6} className="table-container">
          <Table borderless hover className="scrollable-table">
            <thead>
              <tr>
                <th>Items for borrowing</th>
                <th>Lender</th>
              </tr>
            </thead>
            <tbody>
              {borrowedItems.map((borrow, index) => (
                <tr key={index}>
                  <td className="border">{borrow.item}</td>
                  <td className="border">{borrow.lender}</td>
                </tr>
              ))}
              
            </tbody>
          </Table>
        </Col>

        <Col md={6}>
          <Table borderless hover>
            <thead>
              <tr>
                <th>Your items</th>
                <th>Lent to</th>
              </tr>
            </thead>
            <tbody>
              {yourItems.map((item, index) => (
                <tr key={index}>
                  <td className="border">{item.item}</td>
                  <td className="border">{item.lentTo}</td>
                </tr>
              ))}
              <tr>
                <td className="border">
                  <Form.Control
                    type="text"
                    placeholder="Add your first item"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                  />
                </td>
                <td className="border">
                  <Form.Control
                    type="text"
                    placeholder="A friend"
                    value={newLender}
                    onChange={(e) => setNewLender(e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </Table>

          <div className="center-text mt-4 mb-3">
            <Button variant="secondary" className="mr-2" onClick={handleAddItem}>Add item</Button>
          </div>
          <div className="center-text">
            <Button variant="secondary" onClick={handleManageCommunity}>Manage community</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export { WelcomePage};