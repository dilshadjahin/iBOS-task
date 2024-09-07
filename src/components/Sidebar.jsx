import { Menu } from 'antd';

const Sidebar = () => {
  return (
    <Menu
      style={{ width: 256,marginTop: 20 }}
      defaultSelectedKeys={['1']}
      mode="inline"
    >
      <Menu.Item key="1">Rocking Chair</Menu.Item>
      <Menu.Item key="2">Side Chair</Menu.Item>
      <Menu.Item key="3">Lounge Chair</Menu.Item>
    </Menu>
  );
};

export default Sidebar;
