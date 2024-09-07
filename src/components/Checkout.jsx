import { Result, Button } from 'antd';
import { useHistory } from 'react-router-dom';

const Checkout = () => {
    const history = useHistory();

    const goBack = () => {
        history.push('/');
    };

    return (
        <Result
            status="success"
            title="Successfully Checked Out!"
            subTitle="Your order has been placed successfully."
            extra={[
                <Button key={1} type="primary" onClick={goBack}>Go Back to Home</Button>
            ]}
        />
    );
};

export default Checkout;
