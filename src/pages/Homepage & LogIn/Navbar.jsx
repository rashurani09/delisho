import {
  CoffeeOutlined,
  PercentageOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  ReadOutlined,
  MoreOutlined
} from "@ant-design/icons";
import { Image, Layout, Menu } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Offers from "./Offers";
import SignIn from "./SignIn";

// import Cart from "../OrderBooking & Cart/Cart";
import { TranslateFunction } from "./../../util/internationalization";
import { navList } from "../../structure/Navigation";
import { isAuthorisedRoute } from "../../structure/RenderRoutes";
import { AuthData } from "../../structure/AuthWrapper";
const { Header } = Layout;

const Navbar = () => {
  const labels = TranslateFunction("labels");
  const [modalVisible, setModalVisible] = useState(false);
  const [offersModalVisible, setOffersModalVisible] = useState(false);
  const [cart, setCart] = useState(false);
  const [languageDropdownVisible, setLanguageDropdownVisible] = useState(false); // State for language dropdown visibility

  const showModal = () => {
    setModalVisible(true);
  };

  const showOffersModal = () => {
    setOffersModalVisible(true);
  };

  const handleOk = () => {
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const handleOffersOk = () => {
    setOffersModalVisible(false);
  };

  const handleOffersCancel = () => {
    setOffersModalVisible(false);
  };

  const toggleCart = () => setCart((prev) => !prev);

  const toggleLanguageDropdown = () => setLanguageDropdownVisible((prev) => !prev); // Function to toggle language dropdown visibility

  const items = [
  
    {
      key: "1",
      label: "Home",
      icon: <CoffeeOutlined />,
      to: "/",
    },
    {
      key: "2",
      label: "Sign In",
      icon: <UserOutlined />,
      onClick: showModal,
    },
    {
      key: "3",
      label: "Offers",
      icon: <PercentageOutlined />,
      onClick: showOffersModal,
    },
    // {
    //   key: "4",
    //   label: "Cart",
    //   icon: <ShoppingCartOutlined />,
    //   onClick: toggleCart,
    // },
    {
      key: '5',
      label: "Language",
      icon: <ReadOutlined />,
      onClick: toggleLanguageDropdown, // Add onClick handler to toggle language dropdown visibility
    },
    {
      key:'6',
      label : "Admin",
   
      to: "/admin/*"
    }
  ];

  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <div>
        <img
          style={{ width: 100, height: 110 }}
          src="assets\homepage\Logo.png"
          alt="Logo"
        />
      </div>

      <Menu
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{
          flex: 1,
          minWidth: 0,
          marginLeft: "50%",
          backgroundColor: "black",
          width: 800,
        }}
      >
        {items.map((item) => (
          <Menu.Item
            key={item.key}
            style={{ color: "white" }}
            onClick={item.onClick}
          >
            {item.to ? (
              <Link to={item.to}>
                {item.icon} {item.label}
              </Link>
            ) : (
              <>
                {item.icon} {item.label}
              </>
            )}
          </Menu.Item>
        ))}
      </Menu>

      {/* <SignIn
        visible={modalVisible}
        handleCancel={handleCancel}
        handleOk={handleOk}
      /> */}
      <Offers
        visible={offersModalVisible}
        handleCancel={handleOffersCancel}
        handleOk={handleOffersOk}
      />
      {/* <Cart visible={cart} handleCancel={toggleCart} handleOk={toggleCart} /> */}

      {languageDropdownVisible && <LanguageSelector />}
    </Header>
  );
};

export default Navbar;
