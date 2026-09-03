import React from "react";
import { Card, Row, Col } from "antd";

const { Meta } = Card;

const products = [
  {
    key: 1,
    name: "Product 1",
    img: "/src/path/img.jpg",
    price: 100,
  },
  {
    key: 2,
    name: "Product 2",
    img: "/src/path/img.jpg",
    price: 200,
  },
  {
    key: 3,
    name: "Product 3",
    img: "/src/path/img.jpg",
    price: 300,
  },
];

const isAdmin = true;

const HomePage = () => {
  const filteredProducts = isAdmin ? products : [];

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Row gutter={[16, 16]}>
        {filteredProducts.map((product) => (
          <Col key={product.key} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={<img alt={product.name} src={product.img} />}
            >
              <Meta title={product.name} description={`$${product.price}`} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomePage;