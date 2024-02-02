import { useEffect, useState } from "react";
import { useParams , useNavigate } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import NavigationBar from "./NavigationBar";
import axios from "axios";

const SingleProduct = () => {
    const { id } = useParams();

    const navigate = useNavigate();

    const [product, setProduct] = useState(null);

    useEffect(() => {

        const getProductsById = async () => {

            try {
                const response = await axios.get(`http://localhost:8081/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error(error);
            }
    };
        getProductsById();
    },[id]);

    const handleEditProduct = () => {
        navigate(`/products/update/${id}`)
    }

    return (
        <>
            <NavigationBar/>

            {product && (
                <>
                
                    

                    <Container>
                        <Row className="justify-content-md-center">
                            <Col md={6}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title className="bg-primary text-white p-2">
                                            {product.name}
                                        </Card.Title>
                                        <Card.Text className="bg-light p-2">
                                            <strong>Price:</strong>{" "}
                                            {product.price}
                                        </Card.Text>
                                        <Card.Text className="bg-secondary text-white p-2">
                                            <strong>Stock:</strong>{" "}
                                            {product.qty}
                                        </Card.Text>
                                        <Button
                                            variant="primary"
                                            className="mt-2"
                                            onClick={handleEditProduct}
                                        >
                                            Edit
                                        </Button>

                                        
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </>
            )}
        </>
    );
};

export default SingleProduct;
