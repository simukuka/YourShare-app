import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Y_s from "../images/back-button.png";

export const CommunityPage = (props) => {
  // Load friends from localStorage or use default values
  const loadFriendsFromLocalStorage = () => {
    const savedFriends = localStorage.getItem('friends');
    return savedFriends ? JSON.parse(savedFriends) : [
      { name: 'Jazmin', borrowed: 'None', lent: 'Back Pack', bestFriend: true },
      { name: 'Lee', borrowed: 'None', lent: 'None', bestFriend: false },
      { name: 'Obianuju', borrowed: 'Water Bottle', lent: 'Text Book', bestFriend: true },
      { name: 'Prithvi', borrowed: 'Phone Charger', lent: 'None', bestFriend: false }
    ];
  };

  const [friends, setFriends] = useState(loadFriendsFromLocalStorage);
  const [newFriend, setNewFriend] = useState({ name: '', borrowed: 'None', lent: 'None', bestFriend: false });
  const [itemBorrowed, setItemBorrowed] = useState('');
  const [itemLent, setItemLent] = useState('');

  // Update localStorage whenever friends state changes
  useEffect(() => {
    localStorage.setItem('friends', JSON.stringify(friends));
  }, [friends]);

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

  const handleCheckboxChange = (index) => {
    setFriends(friends.map((friend, i) =>
      i === index ? { ...friend, bestFriend: !friend.bestFriend } : friend
    ));
  };

  const handleUpdateBorrowedItem = (index) => {
    setFriends(friends.map((friend, i) =>
      i === index ? { ...friend, borrowed: itemBorrowed } : friend
    ));
    setItemBorrowed('');
  };

  const handleUpdateLentItem = (index) => {
    setFriends(friends.map((friend, i) =>
      i === index ? { ...friend, lent: itemLent } : friend
    ));
    setItemLent('');
  };

  return (
    <>
      <Container style={{ fontSize: 20 }}>
        <Row className="my-2">
          <Col md="4" style={{ display: 'flex', alignItems: 'center' }}>
            <Link variant="link" to="/welcome" style={{ padding: 0, border: 'none', background: 'none' }}>
              <Image src={Y_s} rounded style={{ width: "50px", height: "auto" }} />
            </Link>
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
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {friends.map((friend, index) => (
                  <tr key={index}>
                    <td>{friend.name}</td>
                    <td>
                      {friend.borrowed}
                      <Form.Control
                        type="text"
                        value={itemBorrowed}
                        onChange={(e) => setItemBorrowed(e.target.value)}
                        placeholder="Update borrowed item"
                        style={{ marginTop: '5px' }}
                      />
                      <Button
                        variant="primary"
                        onClick={() => handleUpdateBorrowedItem(index)}
                        style={{ marginTop: '5px' }}
                      >
                        Update Borrowed Item
                      </Button>
                    </td>
                    <td>
                      {friend.lent}
                      <Form.Control
                        type="text"
                        value={itemLent}
                        onChange={(e) => setItemLent(e.target.value)}
                        placeholder="Update lent item"
                        style={{ marginTop: '5px' }}
                      />
                      <Button
                        variant="primary"
                        onClick={() => handleUpdateLentItem(index)}
                        style={{ marginTop: '5px' }}
                      >
                        Update Lent Item
                      </Button>
                    </td>
                    <td>
                      <Form.Check
                        type="checkbox"
                        checked={friend.bestFriend}
                        onChange={() => handleCheckboxChange(index)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row style={{ textAlign: 'left' }}>
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
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Col md="4" className="d-flex align-items-end" style={{ paddingTop: 12 }}>
                <Button variant="secondary" type="submit">Add Friend</Button>
              </Col>
            </Form>
          </Col>
        </Row>
        <Row className="mt-3" style={{ textAlign: 'left' }}>
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
