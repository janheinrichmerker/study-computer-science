import { Fragment, FunctionComponent } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import hsa from "../img/hsa.jpg";
import mlu from "../img/mlu.jpg";

export const UniversityBanners: FunctionComponent = () => {
  return (
    <Fragment>
      <Row>
        <Col>
          <Card className="universty-banner bg-dark text-white">
            <Card.Img src={hsa} alt="Hochschule Anhalt" />
            <Card.ImgOverlay>
              <Card.Title>Hochschule Anhalt</Card.Title>
              <Card.Text>
                Bits und Bytes sind Ihr Ding, innovative Techniken im Bereich
                Grafik und Animation lassen Ihr Herz höher schlagen. Zudem
                wollen Sie technischen und mathematischen Grundlagen der
                Medieninformatik auf den Grund gehen. Sie interessieren sich für
                Informationstechnologien der Zukunft und sind kontaktfreudig -
                dann bringen Sie ideale Voraussetzungen mit für das duale
                Studium der Angewandten Informatik - Digitale Medien und
                Spieleentwicklung. Im dualen Studiengang eignen Sie sich
                Informatik-Fachwissen und -Methodenkompetenz an.
              </Card.Text>
              <Button
                variant="primary"
                href="https://hs-anhalt.de/nc/studieren/orientierung/studienangebot/detail/angewandte-informatik-digitale-medien-und-spieleentwicklung-bachelor-of-science-1.html"
              >
                Weiter lesen
              </Button>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="universty-banner bg-dark text-white">
            <Card.Img src={mlu} alt="Martin-Luther-Universität" />
            <Card.ImgOverlay>
              <Card.Title>Martin-Luther-Universität</Card.Title>
              <Card.Text>
                Es steht außer Zweifel, dass die Informatik in unserer heutigen
                Gesellschaft eine zentrale Rolle spielt. Themen wie Big Data,
                Industrie 4.0, Internet der Dinge, Autonomes Fahren,
                Personalisierte Medizin sind in aller Munde. All diese Themen
                sind ohne Informationstechnologie nicht realisierbar. Mit einem
                Studium der Informatik kannst Du die digitale Zukunft
                mitgestalten.
              </Card.Text>
              <Button
                variant="primary"
                href="https://studieninfo.informatik.uni-halle.de/unsere-studiengaenge/informatik/"
              >
                Weiter lesen
              </Button>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};
