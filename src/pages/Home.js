import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Navbar, Nav } from "react-bootstrap";
import NavigationBar from './NavigationBar'; 

const Home = () => {
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

    const getProducts = () => {
        fetch("http://localhost:8081/products")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const getCategories = () => {
        fetch("http://localhost:8081/categories")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setCategories(data);
            })
            .catch((error) => {
                console.log(error);
            });
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

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            name: name,
            qty: price,
            price: qty,
            categoryId: categoryId,
        };

        fetch("http://localhost:8081/products", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setProducts([...products, data]);
                setName(null);
                setPrice(null);
                setQty(null);
                setCategoryId(null);
            })
            .catch((error) => {
                console.log(error);
            });
    };

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
                        ID: {product.id}
                        {/* Add other product details here */}
                    </Card.Text>
                    <Button variant="primary" onClick={viewProductDetails}>
                        View Details
                    </Button>
                </Card.Body>
            </Card>
        );
    };

    
    return (
        <>
            <NavigationBar />

            <h1>Home</h1>

            <ul>
                <li>
                    <Link to="/products">Products</Link>
                </li>
            </ul>

            <button onClick={getProducts} className="btn btn-primary">
                Load Products
            </button>

            {/* <ol>
                {products && products.map((product) => (
                    <li>{product.id} - {product.name}</li>
                ))}
            </ol> */}

            <div className="d-flex flex-wrap justify-content-start">
                {products &&
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </div>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="productName" className="form-label">
                        Product Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="productName"
                        required
                        onChange={handleName}
                        value={name}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="productPrice" className="form-label">
                        Product Price
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="productPrice"
                        required
                        onChange={handlePrice}
                        value={price}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="productQty" className="form-label">
                        Product Qty
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="productQty"
                        required
                        onChange={handleQty}
                        value={qty}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="productCategory" className="form-label">
                        Category
                    </label>
                    <select
                        className="form-select"
                        id="productCategory"
                        required
                        onChange={handleCategory}
                        value={categoryId}
                    >
                        <option>Please Select</option>
                        {categories &&
                            categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                    </select>
                </div>

                <button type="submit" className="form-button">
                    Save Product
                </button>
            </form>
        </>
    );
};

export default Home;
