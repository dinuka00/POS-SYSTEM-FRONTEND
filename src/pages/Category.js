import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Navbar, Nav } from "react-bootstrap";
import product from "./Product";
import NavigationBar from './NavigationBar'; 
import UpdateCategory from './UpdateCategory';

const Category = () => {


    const [categories, setCategories] = useState(null);

    const [name, setName] = useState(null);

    const [products, setProducts] = useState([]);

    const params = useParams();
    



    useEffect(() => {
        getCategories();
       // getProductByCategory();
    }, []);

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

    

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            name: name,
        };

        fetch("http://localhost:8081/categories", {
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
                setCategories([...categories, data]);
                setName('');
            })
            .catch((error) => {
                console.log(error);
            })
    };

    const navigate = useNavigate();

    const getProductByCategory = (categoryId) => {
        fetch(`http://localhost:8081/categories/${params.id}/products`)
            .then((response) => {
                return response.json();
            }).then((data) => {
                setProducts(data);
                navigate(`/categories/${categoryId}/products`);
            }) .catch(error => {
                console.log(error);
            })

            
    }

    



    const CategoryCard = ({ category }) => {

        const navigate = useNavigate(); // Use useNavigate hook here

    // Function to handle the edit button click
    const handleEditCategory = () => {
        navigate(`/categories/${category.id}`); // Navigate to the edit page for this category
    };
        

        return (
            <Card style={{ width: "18rem", margin: "10px" }}>
                <Card.Body>
                    <Card.Title>{category.name}</Card.Title>
                    <Card.Text>
                        ID: {category.id}
                        {/* Add other product details here */}
                    </Card.Text>
                    <Button variant="primary" onClick={() => 
                    getProductByCategory(category.id)} >
                        View Products
                    </Button>

                    <Button variant="secondary" onClick={ () => handleEditCategory(category.id)} style={{marginLeft: '10px'}}>
                    Update
                    </Button>

                </Card.Body>
            </Card>
        );
    };

    

    

    


    return (
        <>
            <NavigationBar/>
            

            <h1>Category</h1>

            <div className="d-flex flex-wrap justify-content-start">
                {categories &&
                    categories.map((category) => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
            </div>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="categoryName" className="form-label">
                        Category Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="categoryName"
                        required
                        onChange={handleName}
                        value={name}
                    />
                </div>
                

                <button type="submit" className="form-button">
                    Save Category
                </button>
            </form>

            <ol>
    {Array.isArray(products) && products.map((product) => (
        <li key={product.id}><Link to={`products/${product.id}`}>{product.name}</Link></li>
    ))}
</ol>

            
        </>
    )
}

export default Category;