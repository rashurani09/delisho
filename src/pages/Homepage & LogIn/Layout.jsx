import React, { useEffect, useState } from 'react';
import { Button,  theme } from 'antd';
import Navbar from './Navbar';
import FooterFile from './FooterFile';
import { Link, Outlet } from 'react-router-dom';


// const { Content } = Layout;

const Layout = () => {

  const [menuButtonVisible, setMenuButtonVisible] = useState(false);
  const [tableBookingButtonVisible, setTableBookingButtonVisible] = useState(false);
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgroundImages = [
    'url("assets/homepage/homepage.png")',
    'url("assets/homepage/homepage1.png")',
    'url("assets/homepage/homepage2.png")',
    // 'url("assets/homepage/homepage3.png")',
  ];

  useEffect(() => {
    const menuButtonTimeout = setTimeout(() => {
      setMenuButtonVisible(true);
    }, 1000);

    const tableBookingButtonTimeout = setTimeout(() => {
      setTableBookingButtonVisible(true);
    }, 1600);

  
    const backgroundImageInterval = setInterval(() => {
      setBackgroundIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
    }, 2000); 

    return () => {
      clearTimeout(menuButtonTimeout);
      clearTimeout(tableBookingButtonTimeout);
      clearInterval(backgroundImageInterval);
    };
  }, []);

  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Navbar />
      <Outlet/>
      <FooterFile />
    </Layout>
  );
};

export default Layout;

