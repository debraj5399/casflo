/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Space, Table, Tag } from 'antd';
import customerData from '../Assets/Data/CustomerData';

const columns = [
  {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
  },
  {
      title: 'Auto Collect',
      dataIndex: 'collection',
      key: 'collection',
      render: (_, { tags }) => (
        <>
            {tags.map((tag) => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'Disabled') {
                    color = 'volcano';
                }else{
                  color = 'green'
                }
                return (
                    <Tag color={color} key={tag}>
                        {tag.toUpperCase()}
                    </Tag>
                );
            })}
        </>
    ),
  },
  {
      title: 'Preferred Payment Method',
      dataIndex: 'payment',
      key: 'payment',
  },
  {
      title: 'Open Invoices',
      key: 'invoices',
      dataIndex: 'invoices',
      
  },
  {
      title: '',
      key: 'action',
      render: (_, record) => (
          <Space size="middle">
              <a>Delete</a>
          </Space>
      ),
  },
];
const data = customerData;
function Customer() {
  return (
    <div><Table columns={columns} dataSource={data}/></div>
  )
}

export default Customer