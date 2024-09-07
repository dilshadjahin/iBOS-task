
import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider';
import Sidebar from '../../components/Sidebar';
import ProductList from '../../components/ProductList';
import { Content } from 'antd/es/layout/layout';
import { useState } from 'react';

const Products = () => {
  
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
     
      <Sider
        width={256}
        collapsible
        collapsed={collapsed}
        onCollapse={(collapsed) => setCollapsed(collapsed)}
        breakpoint="lg" 
        collapsedWidth="0" 
        className="bg-white"
      >
        <Sidebar />
      </Sider>

   
      <Layout style={{ padding: '0 24px 24px', minHeight: '100vh' }}>
        <Content style={{ padding: '24px', margin: 0, minHeight: 280 }}>
          <ProductList />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Products;
