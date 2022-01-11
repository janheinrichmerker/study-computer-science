import { FunctionComponent } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { v4 as uuid } from "uuid";
import "./AppNav.scss";

/**
 * Main app navigation component.
 *
 * Displays a navigation bar at the top of the screen,
 * containing most frequently used links,
 * structured in dropdowns.
 *
 * A search bar is included to start a search from any page.
 */
export const AppNav: FunctionComponent = () => {
  const id = uuid();

  return (
    <Navbar
      sticky="top"
      bg="primary"
      variant="dark"
      expand="lg"
      className="AppNav"
    >
      <Container>
        <Navbar.Brand>Informatik studieren</Navbar.Brand>
        <Navbar.Toggle aria-controls={`${id}-collapse`} />
        <Navbar.Collapse id={`${id}-collapse`}>
          <Nav className="mr-auto">
            <Nav.Link>Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
