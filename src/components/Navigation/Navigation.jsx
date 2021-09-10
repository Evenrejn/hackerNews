import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Navigation.css";
import logo from "../../common/logo.gif";
import store from "../../redux/redux-store";

function refreshInt() {
  setInterval(() => store.getState(), 60000);
}

function resetInt() {
  clearInterval(store.getState());
}

refreshInt();

const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            HackerNews
          </Navbar.Brand>
          <Nav.Link href="#"><button onClick={() => {resetInt(); refreshInt()}}>Refresh news</button></Nav.Link>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
