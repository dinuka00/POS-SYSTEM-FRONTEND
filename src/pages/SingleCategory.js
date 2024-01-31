import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import NavigationBar from './NavigationBar'; 

const ProductsByCategory = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductsByCategoryId();
    }, [categoryId]);  // Re-run the effect if categoryId changes

    const getProductsByCategoryId = () => {
        fetch(`http://localhost:8081/categories/${categoryId}/products`)
        .then((response) => response.json())
        .then((data) => {
            setProducts(data);
        })
        .catch((error) => {
            console.log(error);
        }) 
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
                            <Button variant="primary" className="mt-2">Add to Cart</Button>
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
