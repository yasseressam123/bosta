import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
} from "react-bootstrap";
import "./header.css";

import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const handleLang = (event)=>{
    event.preventDefault();
    if(localStorage.getItem("lang") === 'en'){
      localStorage.setItem("lang","ar");
      i18n.changeLanguage("ar");
    }else{
      localStorage.setItem("lang","en");
      i18n.changeLanguage("en");
    }
  }
  return ( 
    <div className="header">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand id="bosta-logo" href="/">
            <img
              className="imgLogo"
              src="https://bosta.co/wp-content/uploads/2019/08/bosta_logo_en_red.svg"
              alt="bosta-logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">{t('header.Home')}</Nav.Link>
              <Nav.Link href="#action2">{t('header.Pricing')}</Nav.Link>
              <Nav.Link href="#action2">{t('header.ContactSales')}</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavDropdown title={t('header.TrackingShipment')} id="navbarScrollingDropdown">
                  {/* <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item> */}
                </NavDropdown>
                <Nav.Link href="#action2">{t('SignIn')}</Nav.Link>
                <Nav.Link id="language-btn" onClick={handleLang}>{t('lang')}</Nav.Link>
              </Nav>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

