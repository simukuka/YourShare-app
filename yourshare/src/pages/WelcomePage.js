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
      <h1> Welcome, [username]!</h1>
      <Row>
        <Col md={6}>
          <h4>Items for borrowing</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Item</th>
                <th>Lender</th>
              </tr>
            </thead>
            <tbody>
              {borrowedItems.map((borrow, index) => (
                
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}

export { WelcomePage };

// function WelcomePage(props) {
//     return (
//         <div>
//             <h1>Welcome, {props.username}!</h1>
//         </div>
//     );
// }

// export const WelcomePage = (props) => {
//   const navigate = useNavigate();
//   const handleSubmit = (event)=>{
//     event.preventDefault();
//     navigate("/community")

//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input type="text" name="name"></input>
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//      <p> <Link to="/community">Sign In</Link></p>

//     </div>
//   );
// };
