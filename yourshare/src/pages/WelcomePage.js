import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Container, Row, Col, Form} from "react-bootstrap";
import "../App.css";


const WelcomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const username = location.state?.username || "[username]";
  const newItemData = location.state;

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

  const [yourItems, setYourItems] = useState([]);

  useEffect(() => {
    if (newItemData && newItemData.formData && newItemData.image) {
      const { formData, image } = newItemData;
      setYourItems((prevItems) => { 
        const itemExists = prevItems.some(item => item.itemName === formData.itemName && item.image === image);
        if (!itemExists) {
          return [...prevItems, { ...formData, image }];
        }
        return prevItems;
      });

      location.state = {}
    }
  }, [newItemData, location]);

  const handleManageCommunity = () => {
    navigate('/community');
  }

  const handleAdd = () => {
    navigate('/additem')
  }

  const handleRowClick = (borrow) => {
    navigate('/borrow', { state: borrow });
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
                <tr key={index} onClick={() => handleRowClick(borrow)}>
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
                  <td className="border">{item.itemName}</td>
                  <td className="border"> n/a </td>
                </tr>
              ))}
              {yourItems.length === 0 && (
              <tr>
                <td className="border">
                  <i>Add your first item</i>
                </td>
                <td className="border">
                  <i>A friend</i>
                </td>
              </tr>
              )}
            </tbody>
          </Table>

          <div className="center-text mb-3">
            <Button variant="secondary" onClick={ handleAdd }>Add Item</Button>
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