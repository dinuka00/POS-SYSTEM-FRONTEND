import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Form, Container } from "react-bootstrap";
import NavigationBar from './NavigationBar'; 
import axios from "axios";

const UpdateCategory = () => {

    const { categoryId } = useParams();
    const navigate = useNavigate();
    const [category, setCategory] = useState({ name: "" });

    useEffect(() => {
            try {
                const fetchCategory = async () => {
                    const response = await axios.get(`http://localhost:8081/categories/${categoryId}`);
                    setCategory(response.data);
                }
                if(categoryId){
                    fetchCategory();
                }
            } catch (error) {
                console.error(error);
            }

            
            
    }, [categoryId]);

    

    const handleChange = (e) => {
        setCategory({ ...category, name: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            name: category.name,
            
        }; 

        try {
            const response = await axios.put(`http://localhost:8081/categories/${categoryId}`, data, {
                headers: {
                    "Content-Type": "application/json",
                }
            });
            if (response.status === 200) {
                navigate("/categories");
            } else {
                console.log(response); 
            }
        } catch (error) {
            console.error("Error updating category: ", error);
        }

        
            
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