import React from 'react';
// import Loader from '../Loader/Loader';
import { Spin } from 'antd';

const FullScreenLoader = () => {
  return (
    <div className='loading'>
      <Spin size='large' />
    </div>
  );
};

export default FullScreenLoader;
