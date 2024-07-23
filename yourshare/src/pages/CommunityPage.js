import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Y_s from "../images/back-button.png";

export const CommunityPage = (props) => {
  const navigate = useNavigate();
  const [friends, setFriends] = useState([
    { name: 'Stacey', borrowed: 'None', lent: 'None', bestFriend: true },
    { name: 'Marcos', borrowed: 'None', lent: 'None', bestFriend: false },
    { name: 'Cam', borrowed: 'None', lent: 'None', bestFriend: true },
    { name: 'Jim', borrowed: 'None', lent: 'None', bestFriend: false }
  ]);
  const [newFriend, setNewFriend] = useState({ name: '', borrowed: 'None', lent: 'None', bestFriend: false });

  const handleAddFriend = (event) => {
    event.preventDefault();
    setFriends([...friends, newFriend]);
    setNewFriend({ name: '', borrowed: 'None', lent: 'None', bestFriend: false });
  };

  const handleNewFriendChange = (event) => {
    const { name, value, type, checked } = event.target;
    setNewFriend((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <>
      <Container style={{ fontSize: 20 }}>
        <Row className="my-2">
          <Col md="4" style={{ display: 'flex', alignItems: 'center' }}>
            <Button variant="link" onClick={() => navigate(-1)} style={{ padding: 0, border: 'none', background: 'none' }}>
              <Image src={Y_s} rounded style={{ width: "50px", height: "auto" }} />
            </Button>
            <h2 style={{ marginLeft: '10px', paddingTop: 10 }}>Manage Community</h2>
          </Col>
        </Row>
        <Row>
          <Col md="10" style={{ paddingTop: 40 }}>
            <Table striped bordered hover size="lg" style={{ fontSize: '1.1em', textAlign: 'left' }}>
              <thead>
                <tr>
                  <th>Friends</th>
                  <th>Item currently borrowed</th>
                  <th>Item currently lent</th>
                  <th>Best friend</th>
                </tr>
              </thead>
              <tbody>
                {friends.map((friend, index) => (
                  <tr key={index}>
                    <td>{friend.name}</td>
                    <td>{friend.borrowed}</td>
                    <td>{friend.lent}</td>
                    <td><Form.Check type="checkbox" checked={friend.bestFriend} readOnly /></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Form onSubmit={handleAddFriend}>
              <Row>
                <Col md="3">
                  <Form.Group controlId="formFriendName">
                    <Form.Control
                      type="text"
                      placeholder="Enter name"
                      name="name"
                      value={newFriend.name}
                      onChange={handleNewFriendChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Col md="2" className="d-flex align-items-end" style={{ paddingTop: 12 }}>
                <Button variant="secondary" type="submit">Add Friend</Button>
              </Col>
            </Form>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md="12">
            <Form style={{ textAlign: 'left' }}>
              <Form.Check type="checkbox" label="Text me when someone wants to borrow an item" defaultChecked />
              <Form.Check type="checkbox" label="Allow best friends to auto borrow without approval" defaultChecked />
              <Form.Check type="checkbox" label="Block friends of friends from seeing my items" />
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
