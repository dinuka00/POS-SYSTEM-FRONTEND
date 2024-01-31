import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import NavigationBar from "./NavigationBar";

const SingleProduct = () => {
    const { id } = useParams();

    const [product, setProduct] = useState(null);

    useEffect(() => {
        getProductsById();
    });

    const getProductsById = () => {
        fetch(`http://localhost:8081/products/${id}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setProduct(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

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
                                        >
                                            Add to Cart
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
