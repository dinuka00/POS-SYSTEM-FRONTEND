import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {

    const {id } = useParams();

    const [product, setProduct] = useState(null);

    useEffect(() => {
        getProductsById();
    })

    const getProductsById = () => {
        fetch(`http://localhost:8081/products/${id}`)
        .then((response) => {
            return response.json()
        }).then((data) => {
            setProduct(data);
        }).catch((error) => {
            console.log(error);
        }) 
    }

    return (
        <>
            {product &&
                <>
                    <h1>{product.name}</h1>
                    <div>{product.price}</div>
                    <div>Stock : {product.qty}</div>
                </>
            }

        
        </>
    )


}

export default SingleProduct;