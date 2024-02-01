import axios from 'axios';
import { useEffect, useState } from 'react';
import NavigationBar from './NavigationBar'; 

const Checkout = () => {

    const [products, setProducts] = useState(null);
    const [orderProducts, setOrderProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [tax, setTax] = useState(0);

    const getProducts = async () => {
        const response = await axios.get('http://localhost:8081/products');
        
        setProducts(response.data);
    }

    useEffect(() => {
        getProducts();
    },[]);

    const createOrder = async () => {
        const productIds = orderProducts.map(obj => obj.id);
        
        const data = {
            products: productIds
        }
    
        try {
            const response = await axios.post('http://localhost:8081/orders', data);
            if (response.status === 200) {
                setOrderProducts([]);
                setTotal(0);
                setTax(0);
                alert('Order created successfully!');
            } else {
                console.log(response);
                //console.error("Order creation failed.");
            }
        } catch (error) {
            console.error("Error creating order: ", error);
        }
    }

    useEffect(() => {
        setTax((total / 100) * 15)
    }, [total]);

    return (
        <>
            <NavigationBar/>

            <div className="container-fluid mt-4">
                <h1 className="mb-4">Checking Out</h1>

                <div className="row">
                    <div className="col-md-6 mb-4">
                        <h2>Products</h2>

                        <div className="list-group">
                            {products && products.map(product => (
                                <div className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                    <div>
                                        <h5 className="mb-1">{product.name}</h5>
                                        <small>Price: ${product.price}</small>
                                    </div>
                                    <button className="btn btn-sm btn-primary" onClick={() => {
                                        setOrderProducts([...orderProducts, product]);
                                        let currentTotal = total;
                                        currentTotal += product.price;
                                        setTotal(currentTotal);
                                    }}>
                                        Add to Order
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="col-md-6">
                        <h2>Order</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Product ID</th>
                                    <th>Product Name</th>
                                    <th>Product Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderProducts && orderProducts.map(product => (
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.name}</td>
                                        <td>Rs.{product.price.toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th colSpan={2}>Total</th>
                                    <th>Rs.{total.toFixed(2)}</th>
                                </tr>
                                <tr>
                                    <th colSpan={2}>Tax</th>
                                    <th>Rs.{tax.toFixed(2)}</th>
                                </tr>
                            </tfoot>
                        </table>

                        <button className="btn btn-success" onClick={createOrder}>Complete Order</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout;
