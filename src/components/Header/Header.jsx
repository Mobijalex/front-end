import React, { useState } from "react";
import "./header.css";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <Link to="/">
          <img src="./logo.png" alt="logo" width={100} />
        </Link>

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className=" flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <NavLink to="/Properties">Properties</NavLink>
            <a href="mailto:mobijalex6@gamail.com">Contact</a>
            <button className="button">Login</button>
          </div>
        </OutsideClickHandler>
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <HiOutlineMenuAlt3 size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
