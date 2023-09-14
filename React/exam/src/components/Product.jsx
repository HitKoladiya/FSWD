import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/product")
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="container">
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-4" key={product._id}>
                        <Card style={{ width: "18rem" }}>
                            <Card.Img variant="top" src={product.image} />
                            <Card.Body>
                                <Card.Title>Name: {product.name}</Card.Title>
                                <Card.Text>Price: {product.price}</Card.Text>
                                <Card.Text>Description: {product.description}</Card.Text>
                            </Card.Body>
                        </Card>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Product;


