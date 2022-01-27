import { FunctionComponent } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { StoryPlayer, UniversityBanners } from "./components";
import { config } from "./config";

export const HomePage: FunctionComponent = () => {
  return (
    <Container>
      <StoryPlayer {...config} />
      <Row>
        <Col>
          Du hast auch Lust auf's Informatikstudium bekommen? Vielleicht willst
          du ja&#8230;
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Informatik studieren an der&#8230;</h2>
        </Col>
      </Row>
      <UniversityBanners />
    </Container>
  );
};
