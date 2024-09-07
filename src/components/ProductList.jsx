import { Card, Button, Row, Col, Pagination } from 'antd';
import { useContext, useState } from 'react';
import { ProductContext } from '../auth/ProductContext';

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const { products, addToCart } = useContext(ProductContext);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const currentProducts = products.slice(startIndex, startIndex + pageSize);

  return (
    <div>
      <Row gutter={[16, 16]}>
        {currentProducts.map((product) => (
          <Col
            key={product.id}
            xs={24}
            sm={12}
            md={8}
            lg={8}
          >
            <Card
              cover={<img alt={product.name} src={product.image} style={{ height: '200px', objectFit: 'cover' }} />}
              actions={[
                <Button
                  key={product.id}
                  onClick={() => addToCart(product)}
                  type="primary"
                  style={{
                    backgroundColor: 'black',  // Set background color to black
                    color: 'white',            // Set text color to white
                    border: 'none'             // Remove the default border (optional)
                  }}
                >
                  Add to cart
                </Button>,
              ]}
            >
              <h3>{product.name}</h3>
              <p>
                <span style={{ textDecoration: 'line-through', color: 'grey' }}>
                  €{product.oldPrice}
                </span>{' '}
                <span style={{ fontWeight: 'bold', color: 'red' }}>
                  €{product.price}
                </span>{' '}
                <span style={{ color: 'green' }}>{product.discount}% OFF</span>
              </p>
              <p>{product.description}</p>
            </Card>
          </Col>
        ))}
      </Row>

      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={products.length}
        onChange={handlePageChange}
        style={{ textAlign: 'center', marginTop: '20px' }}
      />
    </div>
  );
};

export default ProductList;
