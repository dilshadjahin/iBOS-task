import {  Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import Sidebar from '../../components/Sidebar';
import ProductList from '../../components/ProductList';
import { Content } from 'antd/es/layout/layout';

const Products = () => {

    return (
        <Layout>
            <Sider width={256} className="bg-white">
                <Sidebar />
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
                <Content style={{ padding: '24px', margin: 0, minHeight: 280 }}>
                    <ProductList />
                </Content>
            </Layout>
        </Layout>
    );
};

export default Products;
