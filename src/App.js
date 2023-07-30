import React from 'react';
import Routing from './Assets/Routing';
import { ConfigProvider } from 'antd';
const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00b96b',
        },
      }}
    >
      <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      // backgroundColor: 'lightblue', // You can set the background color here
    }}>
        <Routing />
      </div>
      </ConfigProvider>

  );
};

export default App;