import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardGroup } from "react-bootstrap";
import MyCv from "../assets/myData";

export default function Cv() {
  return (
  <>
    <h1>CV</h1>

    <h2>Experience</h2>
    <CardGroup>
      {MyCv.experience.map((experience) => {
        return (
          <Card>
            <Card.Body>
              <Card.Title>{experience.position}</Card.Title>
              <Card.Text>{experience.company}</Card.Text>
              <Card.Text>{experience.location} | {experience.date}</Card.Text>
              <Card.Text>{experience.description}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </CardGroup>


    <h2>Education</h2>
    <CardGroup>
      {MyCv.education.map((education) => {
        return (
          <Card>
            <Card.Body>
              <Card.Title>{education.school}</Card.Title>
              <Card.Text>{education.degree}</Card.Text>
              <Card.Text>{education.date}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </CardGroup>


    </>
  );
}
