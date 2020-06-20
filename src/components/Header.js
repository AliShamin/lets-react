import React, { useState } from "react";
import "./Header.css";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import store from "../store/Store";

export default function Header() {
  function handleClick(mode) {
    console.log(mode);
    store.dispatch({ type: mode });
  }

  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleClick("Dark")}
        >
          Dark
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleClick("Light")}
        >
          Light
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => handleClick("Default")}
        >
          Default
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <header className="header">
      <h2>Weather App</h2>
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link">
          Hover me <DownOutlined />
        </a>
      </Dropdown>
    </header>
  );
}
