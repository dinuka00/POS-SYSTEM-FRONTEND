import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Form, Container } from "react-bootstrap";
import NavigationBar from './NavigationBar'
import axios from "axios";

const UpdateProduct = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: "",
        price: 0,
        qty: 0
    });

    useEffect(  () => {

            const fetchProduct = async () => {
                try {
                    const response = await axios.get(`http://localhost:8081/products/${productId}`);
                    setProduct(response.data);
                } catch (error) {
                    console.error(error);
                }
            };
        
            if (productId) { 
                fetchProduct();
            }


    }, [productId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedValue = name === 'qty' || name === 'price' ? Number(value) : value;
        setProduct({ ...product, [name]: updatedValue });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(`http://localhost:8081/products/${productId}` , product , {
            headers: {
                "Content-Type": "application/json",
            }
        });

        if (response.status === 200) {
            navigate("/");
        } else {
            console.log(response); 
        }
            
        } catch (error) {
            console.error("Error updating product: ", error);
            
        }

        


        
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