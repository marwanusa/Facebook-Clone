import Logo from "../../../assets/Facebook_icon.svg?react";
import HomeIcon from "../../../assets/Home_Icon.svg?react";
import VideoIcon from "../../../assets/Video_Icon.svg?react";
import MarketIcon from "../../../assets/MarketPlace_Icon.svg?react";
import GamingIcon from "../../../assets/Gaming_Icon.svg?react";
import MenuIcon from "../../../assets/Menu_Icon.svg?react";
import MessengerIcon from "../../../assets/Messenger_Icon.svg?react";
import NotificationIcon from "../../../assets/Notification_Icon.svg?react";
import styles from "./styles.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useLocation } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import SearchBar from "../../social/SearchBar/SearchBar";

const Header = () => {
  const { customNavbar, facebookLogo, NavIcon, active } = styles;
  let location = useLocation();

  return (
    <>
      <Navbar data-bs-theme="dark" expand="lg" className={customNavbar}>
        <Container fluid>
          <Navbar.Brand href="/" className={facebookLogo}>
            <Logo width="40" height="40" />
          </Navbar.Brand>
          <SearchBar />
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="justify-content-center ">
            <Nav>
              <Nav.Link className={NavIcon} as={NavLink} to="/">
                <HomeIcon width="22" height="22.5" className={location.pathname === "/" ? active : ""} />
              </Nav.Link>
              <Nav.Link className={NavIcon} as={NavLink} to="/videos">
                <VideoIcon width="22" height="22.5" className={location.pathname === "/videos" ? active : ""} />
              </Nav.Link>
              <Nav.Link className={NavIcon} as={NavLink} to="/marketplace">
                <MarketIcon width="22" height="22.5" className={location.pathname === "/marketplace" ? active : ""} />
              </Nav.Link>
              <Nav.Link className={NavIcon} as={NavLink} to="/games">
                <GamingIcon width="22" height="22.5" className={location.pathname === "/games" ? active : ""} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {/* Mega Menu */}
          <Nav>
          <Dropdown drop="down-centered" className="d-inline w-100">
        <Dropdown.Toggle style={{ backgroundColor: "#333334",padding:"10px" }} className="border-0 shadow-none rounded-circle d-flex justify-content-center mx-1" id="dropdown-autoclose-true">
          <MenuIcon  />
        </Dropdown.Toggle>
        <Dropdown.Menu >
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
          </Nav>
          <Nav>
          <Dropdown drop="down-centered" className="d-inline w-100">
        <Dropdown.Toggle style={{ backgroundColor: "#333334",padding:"10px" }} className="border-0 shadow-none rounded-circle d-flex justify-content-center mx-1" id="dropdown-autoclose-true">
          <MessengerIcon  />
        </Dropdown.Toggle>
        <Dropdown.Menu >
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
          </Nav>
          <Nav>
          <Dropdown drop="down-centered" className="d-inline w-100">
        <Dropdown.Toggle style={{ backgroundColor: "#333334",padding:"10px" }} className="border-0 shadow-none rounded-circle d-flex justify-content-center mx-1" id="dropdown-autoclose-true">
          <NotificationIcon  />
        </Dropdown.Toggle>
        <Dropdown.Menu >
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
          </Nav>
          <Nav>
          <Dropdown drop="start" className="d-inline w-100">
        <Dropdown.Toggle style={{ background: "none",margin:"0px",padding:"0px"}} className="border-0 shadow-none rounded-circle d-flex justify-content-center mx-1" id="dropdown-autoclose-true">
        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" className="rounded-circle" style={{ width:"40px",height:"40px"}}/>
        </Dropdown.Toggle>
        <Dropdown.Menu >
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
          </Nav>

        </Container>
      </Navbar>
    </>
  );
};

export default Header;
