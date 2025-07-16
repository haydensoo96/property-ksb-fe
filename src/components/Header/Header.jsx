import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink } from "react-router-dom";
import { useCheckMobileScreen } from "../../utils/common";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <section
      className="h-wrapper flexCenter"
      style={{
        background: "var(--black)",
        justifyContent: "space-between",
        paddingTop: "1%",
      }}
    >
      <Link to="/">
        <img
          src="./ksb_assets/ksb_logo.png"
          alt="logo"
          width={useCheckMobileScreen() ? 100 : 200}
        />
      </Link>
      <div className=" paddings">
        {/* logo */}

        {/* menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            // ref={menuRef}
            className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}
          >
            {/* <a
              href="https://virtual.dimensions.my/GamudaNorthWoods/?media-index=1"
              target="_blank"
              style={{ color: menuOpened ? "var(--primary)" : "white" }}
            >
              Virtual View
            </a> */}

            <NavLink
              to="#Layouts"
              style={{
                color: menuOpened ? "var(--primary)" : "var(--primary)",
              }}
            >
              Pelan Lantai
            </NavLink>

            <a
              href="#RegisterForm"
              style={{
                color: menuOpened ? "var(--primary)" : "var(--primary)",
              }}
            >
              Daftar Sekarang
            </a>

            <button
              className="button"
              onClick={() => (window.location.href = "https://wa.link/dpacbr")}
            >
              e-Bouchre
            </button>
          </div>
        </OutsideClickHandler>

        {/* for medium and small screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
