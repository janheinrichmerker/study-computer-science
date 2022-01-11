import { FunctionComponent } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { StoryPlayer } from "./components";
import { config } from "./config";


export const HomePage: FunctionComponent = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h2>Studiere Informatik!</h2>
        </Col>
      </Row>
      <StoryPlayer {...config} />
    </Container>
  );
};
