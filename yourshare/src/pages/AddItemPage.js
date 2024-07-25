import { Button, Form, Col, Row, Container,Image } from "react-bootstrap";
import {useState} from "react"
import backbutton from "../images/back-button.png";
import { useNavigate } from "react-router-dom";

export const AddItemPage = (props) => {
  const navigate = useNavigate();
  

  const [image,setImage]=useState(null)
  const [formData, setFormData] = useState({
    itemName: '',
    type: '',
    description: '',
  });


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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.itemName && formData.type && formData.description && image) {
      // Handle to WelcomePage with the form data
      navigate('/welcome', { state: { formData, image } });
    } else{
      alert("Please fill out all fields and upload an iamge.");
    }
  };

  return (
    <Container>
      <Row className="my-2">
        <Col md="4" style={{ display: 'flex', alignItems: 'center' }}>
          <Button variant="link" onClick={() => navigate(-1)} style={{ padding: 0, border: 'none', background: 'none' }}>
            <Image src={backbutton} rounded style={{ width: "50px", height: "auto" }} />
          </Button>
          <h2 style={{ marginLeft: '10px', paddingTop: 10 }}>Add Item</h2>
        </Col>
      </Row>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="itemName">
              <Form.Control 
                type="text"
                placeholder="Item Name:"
                name="itemName"
                value={formData.itemName}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="type">
              <Form.Control 
                type="text" 
                placeholder="Type:"
                name="type"
                value={formData.type}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control 
                as="textarea" 
                rows={3} 
                placeholder="Description"
                name="description"
                value={formData.description}
                onChange={handleChange} 
              />
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

              <div onClick={()=> navigate('/welcome')} className="mt-2 mb-3">
                Cancel
              </div>
              <Button variant="secondary" type="submit">
                Add item
              </Button>

          </Col>
        </Row>
      </Form>
    </Container>
  );
};
