import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Form, Container } from "react-bootstrap";
import NavigationBar from './NavigationBar'

const UpdateProduct = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: "",
        price: 0,
        stock: 0
        // Add other product fields as necessary
    });

    useEffect(() => {
        fetch(`http://localhost:8081/products/${productId}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.log(error));
    }, [productId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:8081/products/${productId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        })
        .then(response => response.json())
        .then(() => navigate("/"))
        .catch(error => console.log(error));
    };

    return (
        <Container>
            <h1>Update Product</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={product.name || ""}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="number"
                        name="price"
                        value={product.price || 0}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Stock</Form.Label>
                    <Form.Control
                        type="number"
                        name="stock"
                        value={product.stock || 0}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                {/* Add more fields as necessary */}
                <Button variant="primary" type="submit">
                    Update Product
                </Button>
            </Form>
        </Container>
    );
};

export default UpdateProduct;