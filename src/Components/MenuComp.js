/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, Typography, Avatar, Row, Col } from 'antd';
import { Link, BrowserRouter as Router, useNavigate } from 'react-router-dom';
import { MdSpaceDashboard, MdPayment, MdGroup } from 'react-icons/md';
const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const MenuComp = (props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

  const handleMenuClick = (key) => {
    switch (key) {
      case '1':
        navigate('/dashboard');
        break;
      case '2':
        navigate('/customer');
        break;
      case '3':
        navigate('/billing');
        break;
      case '4':
          navigate('/settings');
          break;
      default:
        break;
    }
  };

  return (
    <Layout>
      <Header style={{ background: colorBgContainer }}>
        <Row justify="space-between" align="middle">
          <Col>
            <div style={{ paddingLeft: 10, paddingTop: 0, marginBottom: 10 }}>
              <Title level={3} style={{ lineHeight: 0.5 }}>
                Casflo
              </Title>
            </div>
          </Col>
          <Col>
            <Avatar size="small" icon={<UserOutlined />} />
          </Col>
        </Row>
      </Header>
      <Layout>
        <Sider trigger={null} collapsible={true} width="256" theme="light">
          <div className="demo-logo-vertical" />
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={['1']}
            onClick={(e) => handleMenuClick(e.key)}
            items={[
              {
                key: '1',
                icon: <MdSpaceDashboard />,
                label: 'Dashboard',
              },
              {
                key: '2',
                icon: <MdGroup />,
                label: 'Customer',
              },
              {
                key: '3',
                icon: <MdPayment />,
                label: 'Billing',
              },
              {
                key: '4',
                icon: <SettingOutlined />,
                label: 'Settings',
              },
            ]}
          />
        </Sider>
        <Layout>
          <Content style={{ margin: '16px 16px', padding: 24, minHeight: '100vh', background: colorBgContainer }}>
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MenuComp;
