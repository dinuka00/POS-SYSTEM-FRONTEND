import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ProductCard = ({ product }) => {
    return (
        <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    ID: {product.id}
                    {/* Add other product details here */}
                </Card.Text>
                <Button variant="primary">View Details</Button>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;