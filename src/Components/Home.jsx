import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './HomePage.css';

const HomePage = ({ products }) => {
  const productsSectionRef = useRef(null);

  const handleShopNowClick = () => {
    if (productsSectionRef.current) {
      productsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-page">
      <Container className="mt-5">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">K-Flex CLOTHS</h1>
            <p className="hero-text">
              Timeless Fashion, Modern Flair. Explore Our Collection <span className="highlighted-text">👕</span>
            </p>
            <button onClick={handleShopNowClick} className="cta-btn">Shop Now</button>
          </div>
        </div>

        {/* Products Section */}
        <div ref={productsSectionRef}>
          <Row xs={1} sm={2} md={2} lg={3} xl={4} className="g-4 mt-4">
            {products.map((product) => (
              <Col key={product.id} className="mb-4">
                <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Card className="product-card">
                    <div className="card-image">
                      <Card.Img 
                        variant="top" 
                        src={product.image} 
                        alt={`Image of ${product.name}`} 
                      />
                    </div>
                    <Card.Body>
                      <Card.Title className="product-title">{product.name}</Card.Title>
                      <div className="price-info">
                        <p className="regular-price">Regular price: PKR {product.regularPrice}</p>
                        <h5 className="sale-price">Sale price: PKR {product.salePrice}</h5>
                      </div>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
