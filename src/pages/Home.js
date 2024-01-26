import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Navbar, Nav } from 'react-bootstrap';








const Home = () => {

    const [products, setProducts] = useState(null)

    const getProducts =  () => {
        fetch("http://localhost:8081/products")
        .then((response) => {
            return response.json();
        }).then((data) =>  {
            setProducts(data);
        }).catch((error) => {
            console.log(error);
        })
    }


    

    const ProductCard = ({ product }) => {

        let navigate = useNavigate();

    const viewProductDetails = () => {
        navigate(`/products/${product.id}`);
    };

        return (
            <Card style={{ width: '18rem', margin: '10px' }}>
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        ID: {product.id}
                        {/* Add other product details here */}
                    </Card.Text>
                    <Button variant="primary" onClick={viewProductDetails} >View Details</Button>
                </Card.Body>
            </Card>
        );
    }

    const NavigationBar = () => {
        return (
           < Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">POS SYSTEM</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/products">Products</Nav.Link>

              {/* Add more Nav.Link items here as needed */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        );
    }



    return (
        <>
            <NavigationBar />

            <h1>Home</h1>

            <ul>
                <li>
                    <Link to="/products">Products</Link>

                    
                </li>
            </ul>

            <button onClick={getProducts} className="btn btn-primary">Load Products</button>

            {/* <ol>
                {products && products.map((product) => (
                    <li>{product.id} - {product.name}</li>
                ))}
            </ol> */}

            <div className="d-flex flex-wrap justify-content-start">
                {products && products.map((product) => (
                    <ProductCard key={product.id} product={product} />

                    
                ))}
            </div>
            
        </>
    )
}

export default Home;