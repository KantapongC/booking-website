import React from 'react';
import { Layout } from 'antd';

const Footer = ({ darkBackground }) => {
  let style = {
    textAlign: 'center'
  };

  if (darkBackground) {
    style.backgroundColor = '#1b1b1b';
    style.color = 'white';
  }

  return <Layout.Footer style={style}>Mol Salon ©1996 Created by Kantapong Chanthanawan</Layout.Footer>;
};

export default Footer;
