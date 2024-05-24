import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form , Button , Card} from "react-bootstrap";
import NavigationBar from './NavigationBar'; 
import ProductCard from './ProductCard';
import axios from "axios";

const Product = () => {

    const [products, setProducts] = useState(null);
    const [categories, setCategories] = useState(null);

    const [name, setName] = useState(null);
    const [price, setPrice] = useState(null);
    const [qty, setQty] = useState(null);
    const [categoryId, setCategoryId] = useState(null);

    useEffect(() => {
        getProducts();
        getCategories();
    }, []);

    const navigate = useNavigate();

    const getProducts = async () => {

        try {
            const response = await axios.get("http://localhost:8081/products");
            setProducts(response.data);

        } catch (error) {
            if(error.response.status === 401) {
                navigate("/login");
            }
        }
    };

    const getCategories = async () => {
        try {
            const response = await axios.get("http://localhost:8081/categories");
            setCategories(response.data);

        } catch (error) {
            if(error.response.status === 401) {
                navigate("/login");
            }
        }
        
    };

    const handleName = (event) => {
        setName(event.target.value);
    };

    const handlePrice = (event) => {
        setPrice(event.target.value);
    };

    const handleQty = (event) => {
        setQty(event.target.value);
    };

    const handleCategory = (event) => {
        setCategoryId(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            name: name,
            qty: price,
            price: qty,
            categoryId: categoryId,
        };

        try {
            const response = await axios.post("http://localhost:8081/products", data, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                }
            });
    
            if (response.status === 200 || response.status === 201) {
                setProducts([...products, response.data]);
                alert("product added");
                setName('');
                setPrice('');
                setQty('');
                setCategoryId('');
            } else {
                console.log(response); 
            }
        } catch (error) {
            console.error("Error creating product: ", error);
        }
    };


    return (
        <>
            <NavigationBar />

            <Container className="mt-5">
                

                <Row>
                
                    <Col md={8}>
                        <Row>
                        <h1 className="mb-4">Products</h1>
                            {products && products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </Row>
                    </Col>

                    <Col md={4}>
                        <h2 className="mb-4 text-center">Add New Product</h2>
                        <Form onSubmit={handleSubmit} className="border p-4 rounded">
                            <Form.Group className="mb-3">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control type="text" required onChange={handleName} value={name} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Product Price</Form.Label>
                                <Form.Control type="number" required onChange={handlePrice} value={price} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Product Qty</Form.Label>
                                <Form.Control type="number" required onChange={handleQty} value={qty} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Category</Form.Label>
                                <Form.Select required onChange={handleCategory} value={categoryId}>
                                    <option value="">Please Select</option>
                                    {categories && categories.map((category) => (
                                        <option key={category.id} value={category.id}>{category.name}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                            <div className="d-grid">
                                <Button variant="success" type="submit">Save Product</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Product;