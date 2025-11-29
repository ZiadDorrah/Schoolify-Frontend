import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import egyptFlag from '../../assets/images/32209_egypt_flag_icon.png';
import styles from '../../assets/css/Nav.module.css';

const NavComponent = () => {
  
  return (
    <Navbar className={styles.navbar} data-bs-theme="dark" variant="dark" expand="lg">
      <div  className={`${styles.navbar} container`}>
        <Navbar.Brand className={styles.brand} href="/">
          Schoolify
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className={`ms-auto `}>
            <Nav.Link
              style={{ marginRight: '10px' }}
              className={styles.nav_link}
              href="#offer"
            >
              ماذا نقدم ؟
            </Nav.Link>
            <Nav.Link
              style={{ marginRight: '10px' }}
              className={styles.nav_link}
              href="#subjects"
            >
              المناهج الدراسية
            </Nav.Link>
            {/* <NavDropdown
              className={`${styles.nav_link} ${styles.dropdown}`}
              title=" المناهج الدراسية"
            >
              <NavDropdown.Item href="" >الصف الدراسى الاول</NavDropdown.Item>
              <NavDropdown.Item href="" >الصف الدراسى الاول</NavDropdown.Item>
              <NavDropdown.Item href="" >الصف الدراسى الاول</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link className={styles.nav_link} href="#Student_opinions">
              اراء الطلاب
            </Nav.Link>
            <Nav.Link className={styles.nav_link} href="">
              ارقامنا
            </Nav.Link>
          </Nav>
          <Nav  className={`m-auto `}>
            <NavDropdown
              className={`${styles.dropdown}  `}
              title={
                <div>
                  <img
                    src={egyptFlag}
                    alt="Arabic Flag"
                    style={{
                      width: '24px',
                      height: '24px',
                      marginLeft: '5px',
                      
                    }}
                  />
                  العربية
                </div>
              }
            >
            </NavDropdown>
            
              <button style={{padding:'0px'}} className={`${styles.commincation_button} `} >
                <Nav.Link href='#footer' >تواصل معنا </Nav.Link>
                </button>
            
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavComponent;
