import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import NavigationBar from './NavigationBar'; 
import axios from "axios";

const ProductsByCategory = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductsByCategoryId();
    }, [categoryId]);  

    const getProductsByCategoryId = async () => {

        try {
            const response = await axios.get(`http://localhost:8081/categories/${categoryId}/products`);
    
            setProducts(response.data);
           // navigate(`/categories/${categoryId}/products`);
        } catch (error) {
            console.error(error);
        }

        
    }


    return (

        <>
            <NavigationBar />
            
            <Container>


    
    <Row>
        {products.length > 0 ? (
            products.map((product) => (
                <Col key={product.id} md={4} className="mb-3">
                    <Card>
                        <Card.Body>
                            <Card.Title className="bg-primary text-white p-2">{product.name}</Card.Title>
                            <Card.Text className="bg-light p-2">
                                <strong>Price:</strong> {product.price}
                            </Card.Text>
                            <Card.Text className="bg-secondary text-white p-2">
                                <strong>Stock:</strong> {product.qty}
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                </Col>
            ))
        ) : (
            <div>No products found for this category.</div>
        )}
    </Row>
</Container>
        </>
        
        
    )
}

export default ProductsByCategory;
