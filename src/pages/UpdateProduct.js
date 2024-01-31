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
        qty: 0
    });

    useEffect(() => {
        fetch(`http://localhost:8081/products/${productId}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.log(error));
    }, [productId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedValue = name === 'qty' || name === 'price' ? Number(value) : value;
        setProduct({ ...product, [name]: updatedValue });
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

        <>
            <NavigationBar/>
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
                        name="qty"
                        value={product.qty || 0}
                        onChange={handleChange}
                        required
                        />
                    </Form.Group>
                
                    <Button variant="primary" type="submit">
                    Update Product
                    </Button>
                </Form>
            </Container>
        </>
        
    );
};

export default UpdateProduct;