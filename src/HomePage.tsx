import { FunctionComponent } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { StoryPlayer } from "./components";
import { config } from "./config";

export const HomePage: FunctionComponent = () => {
  return (
    <div className="div-full">
      <div className="background" />
      <Container style={{ position: "absolute" }}>
        <div className="container-background" />
        <Row>
          <Col>
            <StoryPlayer {...config} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
