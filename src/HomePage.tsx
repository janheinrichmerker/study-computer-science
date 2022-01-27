import { FunctionComponent } from "react";
import { Container } from "react-bootstrap";
import { StoryPlayer, UniversityBanners } from "./components";
import { config } from "./config";

export const HomePage: FunctionComponent = () => {
  return (
    <Container>
      <StoryPlayer {...config} />
      <UniversityBanners/>
    </Container>
  );
};
