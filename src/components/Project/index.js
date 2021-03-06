import React from "react";
import "./style.css";
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, CardDeck
} from 'reactstrap';

const Project = (props) => {
  return (
    <div>
      <CardDeck>
        <Card>
          <CardBody>
            <CardTitle tag="h5" className="text-white">{props.projectTitle}</CardTitle>
            {/* <CardSubtitle tag="p" className="mb-2">{props.projectSubtitle}</CardSubtitle> */}
          </CardBody>
          <img src={props.projectThumbnail} alt={props.projectThumbnailAlt} />
          <CardBody>
            <CardText>{props.projectDescription}</CardText>
            <CardLink href={props.deployedLink} className="btn btn-info btn-sm" target="_blank">Live Demo</CardLink>
            <CardLink href={props.codeUrl} className="btn btn-info btn-sm" target="_blank">Github</CardLink>
          </CardBody>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Project;