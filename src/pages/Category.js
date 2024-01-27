import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Navbar, Nav } from "react-bootstrap";

const Category = () => {


    const [categories, setCategories] = useState(null);


    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = () => {
        fetch("http://localhost:8081/categories")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setCategories(data);
                
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const CategoryCard = ({ category }) => {
        

        return (
            <Card style={{ width: "18rem", margin: "10px" }}>
                <Card.Body>
                    <Card.Title>{category.name}</Card.Title>
                    <Card.Text>
                        ID: {category.id}
                        {/* Add other product details here */}
                    </Card.Text>
                    <Button variant="primary" >
                        View Products
                    </Button>
                </Card.Body>
            </Card>
        );
    };

    const NavigationBar = () => {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">POS SYSTEM</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/products">
                            Products
                        </Nav.Link>
                        <Nav.Link as={Link} to="/categories">
                            Categories
                        </Nav.Link>

                        {/* Add more Nav.Link items here as needed */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    };

    

    


    return (
        <>
            <NavigationBar/>
            

            <h1>Category</h1>

            <div className="d-flex flex-wrap justify-content-start">
                {categories &&
                    categories.map((category) => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
            </div>

            
        </>
    )
}

export default Category;