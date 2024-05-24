import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css"; // Import the CSS file

const ProductCard = ({ product }) => {
    let navigate = useNavigate();

    const viewProductDetails = () => {
        navigate(`/products/${product.id}`);
    };

    return (
        <Card className="product-card" onClick={viewProductDetails}>
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    Rs:{product.price}
                    <br />
                    Quantity: {product.qty}
                    <br />
                    Category: {product.categories}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;