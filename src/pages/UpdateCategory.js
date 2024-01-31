import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Form, Container } from "react-bootstrap";
import NavigationBar from './NavigationBar'; 

const UpdateCategory = () => {

    const { categoryId } = useParams();
    const navigate = useNavigate();
    const [category, setCategory] = useState({ name: "" });

    useEffect(() => {
        fetch(`http://localhost:8081/categories/${categoryId}`)
            .then(response => response.json())
            .then(data => setCategory(data))
            .catch(error => console.log(error));
    }, [categoryId]);

    

    const handleChange = (e) => {
        setCategory({ ...category, name: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: category.name,
            
        };

        fetch(`http://localhost:8081/categories/${categoryId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then((data) => {
            navigate("/categories");
        })
        .catch((error) => {
            console.log(error);
        });
            /* .then(response => response.json())
            .then(() => navigate("/categories"))
            .catch(error => console.log(error)); */
    };

    return (

        <>
            <NavigationBar/>

        <Container>
            <h1>Edit Category</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Category Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={category.name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Update Category
                </Button>
                
            </Form>
        </Container>
        </>
        
    );
};

export default UpdateCategory;