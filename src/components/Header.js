import React from "react";
import "./Header.css";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import store from "../store/Store";

export default function Header() {
  let giveTheme = (themeType) => {
    let theme;
    if (themeType == "Dark") {
      theme = {
        "background-color": "#2d3436",
        color: "white",
      };
    } else if (themeType == "Light") {
      theme = { "background-color": "#dfe4ea" };
    } else if ((themeType = "Default")) {
      theme = { "background-color": "#61dafb" };
    }
    return theme;
  };

  let handleClick = (themeType) => {
    store.dispatch({
      type: "ChangeTheme",
      theme: giveTheme(themeType),
    });
  };
  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            handleClick("Dark");
          }}
        >
          Dark
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            handleClick("Light");
          }}
        >
          Light
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            handleClick("Default");
          }}
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
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          Hover me <DownOutlined />
        </a>
      </Dropdown>
    </header>
  );
}
