import { Button, Form, Col, Row, Container,Image } from "react-bootstrap";
import {useState} from "react"
//import 'bootstrap/dist/css/bootstrap.min.css';
import backbutton from "../images/back-button.png";
import upload from "../images/image_upload.png";
import { useNavigate } from "react-router-dom";
//import { Form } from 'react-bootstrap';
// import { pages } from "../App";

export const AddItemPage = (props) => {
  const [image,setImage]=useState(null)
  const [formData, setFormData] = useState({
    itemName: '',
    itemType: '',
    textarea: '',
    file: null, // State to store the selected file
  });


  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate('/welcome')
  }
  const handleInputChange = (event) => {
    if (event.target.name === 'file') {
      setFormData({
        ...formData,
        [event.target.name]: event.target.files[0],
      });

      // Image preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Prepare form data to be sent
    const formDataToSend = new FormData();
    formDataToSend.append('itemName', formData.itemName);
    formDataToSend.append('itemType', formData.itemType);
    formDataToSend.append('textarea', formData.textarea);
    formDataToSend.append('file', formData.file); // Append the file to form data

    // Replace with your form submission logic (e.g., fetch or Axios request)
    console.log(formDataToSend);

    // Reset form fields if needed
    setFormData({
      itemName: '',
      itemType: '',
      textarea: '',
      file: null,
    });
  };
  
 
  return (
    <Container>
      <Row md={{ span: 3, offset: 1 }} className="navBar">
        <Col md={1}>
          <img src={backbutton} width="50px" height="50px" alt="back button" onClick={handleOnClick}/>
        </Col>
        <Col md={2}>
          {" "}
          <h2>Add Item</h2>
        </Col>
      </Row>
      <Form onSubmit={handleSubmit}>
        <Row md={8}>
          <Col md={6} className="justify-center">
            <Form.Group className="mb-3" controlId="itemName">
              <Form.Label>Item Name</Form.Label>
              <Form.Control type="text"
              name="itemName"
              value={formData.itemName}
              onChange={handleInputChange} 
              required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label> Type: </Form.Label>
              <Form.Control type="text" placeholder="Password"
              name="itemType"
              value={formData.itemType}
              onChange={handleInputChange} 
              required/>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="textArea"
            >
              <Form.Control as="textarea" rows={3} placeholder="Description" 
              name="textarea"
              value={formData.textarea}
              onChange={handleInputChange}/>
            </Form.Group>
          </Col>
          <Col md={6} className="text-center">
            <Form.Group controlId="file">
              <Form.Label>Select Image</Form.Label>
              <Form.Control
                type="file"
                name="file"
                accept=".png, .jpg, .jpeg"
                onChange={handleInputChange}
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
          <Col md={2}>
            <div onClick={handleOnClick}>
              Cancel
            </div>
            <div>
              <Button variant="primary" type="submit" onClick={handleOnClick}>
                Submit
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
