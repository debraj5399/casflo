/* eslint-disable no-unused-vars */
import React from 'react';
import { Layout, Menu, theme, Typography, Avatar, Row, Col, Card } from 'antd';
import {
  ArrowRightOutlined,
} from '@ant-design/icons';
import { Space } from 'antd';
const { Title } = Typography;
function Dashboard() {
  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh', paddingBottom: 300 }}>
      <Col span={10}>
        <Card style={{ marginBottom: 16 }}>
          <Row justify="center" align="middle">
          <Title level={5} style={{ textAlign: 'center' }}>
          Complete Your KYC
            </Title>
            <Space style={{marginTop:"1rem"}}> <ArrowRightOutlined /></Space>
          </Row>
          <Row justify="center" align="middle">
          <p style={{ textAlign: 'left' }}>Complete your verification to start accepting payments.</p>
          </Row>
        </Card>
        <Card style={{ marginBottom: 16 }}>
          <Row justify="center" align="middle">
          <Title level={5} style={{ textAlign: 'center' }}>
          Connect Accounting Software
            </Title>
            <Space style={{marginTop:"1rem"}}> <ArrowRightOutlined /></Space>
          </Row>
          <Row justify="center" align="middle">
          <p style={{ textAlign: 'left' }}>Manage invoice collection for all your clients at one place.</p>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}

export default Dashboard;
