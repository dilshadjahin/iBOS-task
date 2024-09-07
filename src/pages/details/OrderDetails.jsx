import { useContext } from 'react';
import { Row, Col, Button, InputNumber } from 'antd';
import { ProductContext } from '../../auth/ProductContext';

const OrderDetails = () => {
    const { cart, removeFromCart, totalPrice } = useContext(ProductContext);

    // Calculate subtotal
    const subtotal = cart.reduce((total, product) => total + product.price * product.quantity, 0);

    return (
        <div className="max-w-7xl mx-auto mt-4 mb-8">
            <Row gutter={[16, 16]}>
                {/* Product List Section */}
                <Col xs={24} md={16}>
                    <h2 className='font-bold md:text-xl text-lg mb-6'>An overview of your order</h2>
                    {cart.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        cart.map((product) => (
                            <Row key={product.id} align="middle" justify="space-between" className="cart-item mt-2" gutter={[16, 16]}>
                                <Col xs={8} sm={6} md={4}>
                                    <img src={product.image} alt={product.name} style={{ width: '100%', maxWidth: '100px' }} />
                                </Col>
                                <Col className='font-bold text-base' xs={10} sm={8} md={10}>
                                    <h4>{product.name}</h4>
                                </Col>
                                <Col xs={6} sm={4} md={3}>
                                    <InputNumber
                                        min={1}
                                        value={product.quantity}
                                        readOnly
                                        style={{ width: '100%' }}
                                    />
                                </Col>
                                <Col className='font-bold text-base' xs={8} sm={4} md={3}>
                                    <h4>€{product.price}</h4>
                                </Col>
                                <Col xs={2}>
                                    <Button type="danger" onClick={() => removeFromCart(product.id)}>×</Button>
                                </Col>
                            </Row>
                        ))
                    )}
                </Col>

                {/* Order Summary Section */}
                <Col xs={24} md={8}>
                    <div className="order-summary">
                        <h3 className='font-bold md:text-xl text-lg mb-6'>Order details</h3>
                        <div className='mt-2 mb-4 flex flex-col gap-2 border bg-slate-100 p-2'>
                            <p>Subtotal: €{subtotal.toFixed(2)}</p>
                            <p>Shipping: Free</p>
                            <p>Estimated Tax: €0.00</p>
                            <h2>Total: <span className='font-bold'>€{totalPrice.toFixed(2)}</span></h2>
                        </div>
                        <div className='w-full bg-black py-2 text-white text-center hover:bg-gray-700 transition-all cursor-pointer'>
                            Go to Checkout
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default OrderDetails;
