import React from 'react';
import { Layout } from 'antd';
import { Menu, theme } from 'antd';
import { MenuItems } from './MenuItems';

const { Header, Content } = Layout;

const MainLayout = ({ renderContent, handleMenuClick, selectedKey }: any) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[selectedKey]}
          onClick={handleMenuClick}
          items={MenuItems}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: '0 0px' }}>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 'calc(100vh - 64px)',
            padding: 0,
            borderRadius: borderRadiusLG,
          }}
        >
          {renderContent()}
        </div>
      </Content>
    </Layout>
  );
};

export default MainLayout;
