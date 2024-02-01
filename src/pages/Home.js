import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
/* import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"; */
import { Navbar, Nav , Container, Row, Col, Form , Button , Card} from "react-bootstrap";
import NavigationBar from './NavigationBar'; 

const Home = () => {
    const [products, setProducts] = useState(null);
    const [categories, setCategories] = useState(null);

    const [name, setName] = useState(null);
    const [price, setPrice] = useState(null);
    const [qty, setQty] = useState(null);
    const [categoryId, setCategoryId] = useState(null);

    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    const getProducts = () => {
        fetch("http://localhost:8081/products")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

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

    const handleName = (event) => {
        setName(event.target.value);
    };

    const handlePrice = (event) => {
        setPrice(event.target.value);
    };

    const handleQty = (event) => {
        setQty(event.target.value);
    };

    const handleCategory = (event) => {
        setCategoryId(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            name: name,
            qty: price,
            price: qty,
            categoryId: categoryId,
        };

        fetch("http://localhost:8081/products", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setProducts([...products, data]);
                setName(null);
                setPrice(null);
                setQty(null);
                setCategoryId(null);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const ProductCard = ({ product }) => {
        let navigate = useNavigate();

        const viewProductDetails = () => {
            navigate(`/products/${product.id}`);
        };

        return (
            <Card style={{ width: "18rem", margin: "10px" }}>
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                        ID: {product.id}
                        {/* Add other product details here */}
                    </Card.Text>
                    <Button variant="primary" onClick={viewProductDetails}>
                        View Details
                    </Button>
                </Card.Body>
            </Card>
        );
    };

    
    return (
        <>
            <NavigationBar />

            <Container className="mt-5">
                

                <Row>
                
                    <Col md={8}>
                        <Row>
                        <h1 className="mb-4">Products</h1>
                            {products && products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </Row>
                    </Col>

                    <Col md={4}>
                        <h2 className="mb-4 text-center">Add New Product</h2>
                        <Form onSubmit={handleSubmit} className="border p-4 rounded">
                            <Form.Group className="mb-3">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control type="text" required onChange={handleName} value={name} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Product Price</Form.Label>
                                <Form.Control type="number" required onChange={handlePrice} value={price} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Product Qty</Form.Label>
                                <Form.Control type="number" required onChange={handleQty} value={qty} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Category</Form.Label>
                                <Form.Select required onChange={handleCategory} value={categoryId}>
                                    <option value="">Please Select</option>
                                    {categories && categories.map((category) => (
                                        <option key={category.id} value={category.id}>{category.name}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                            <div className="d-grid">
                                <Button variant="success" type="submit">Save Product</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;
