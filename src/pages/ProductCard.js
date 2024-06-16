import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css"; // Import the CSS file
import rice from '../assets/rice.jpg'

const ProductCard = ({ product }) => {
    let navigate = useNavigate();

    const viewProductDetails = () => {
        navigate(`/products/${product.id}`);
    };

    return (
        <Card className="product-card" onClick={viewProductDetails}>
            <Card.Body>
                <div className="product-image-container">
                    <Card.Img  className="product-image" variant="top" src={product.image}/>
                </div>
                
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    {/* <span className="product-price">Rs: {product.price}</span>
                        <br />
                    Quantity: {product.qty}
                    <br />
                    Category: {product.categories} */}
                    <div className="product-price">Rs: {product.price}</div>
                    <div className="product-detail">
                        <span className="product-label">Quantity:</span>
                        <span className="product-value">{product.qty}</span>
                    </div>
                    <div className="product-detail">
                        <span className="product-label">Category:</span>
                        <span className="product-value">{product.category ? product.category.name : "N/A"}</span>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;