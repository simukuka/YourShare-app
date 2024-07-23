import React, {useState} from "react";
import { pages } from "../App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Button, Container, Row, Col} from "react-bootstrap";

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
}

// function WelcomePage(props) {
//     return (
//         <div>
//             <h1>Welcome, {props.username}!</h1>
//         </div>
//     );
// }

export { WelcomePage };