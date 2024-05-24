import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

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
                    {/* ID: {product.id} */}

                    Rs:{product.price}
                    <br />
                    Quantity: {product.qty}
                    <br />
                    Category:   {product.categories}
                    
                </Card.Text>
                <Button variant="primary" onClick={viewProductDetails}>
                    View Details
                </Button>
            </Card.Body>
        </Card>

    );
};

export default ProductCard;