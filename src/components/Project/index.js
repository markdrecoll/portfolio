import React from "react";
import "./style.css";
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

const Project = (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h3">{props.projectTitle}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2">{props.projectSubtitle}</CardSubtitle>
        </CardBody>
        <img width="100%" src={props.projectThumbnail} alt={props.projectThumbnailAlt} />
        <CardBody>
          {/* <CardText>Example Text</CardText> */}
          <CardLink href={props.deployedLink} className="btn btn-info">Live Demo</CardLink>
          <CardLink href={props.codeUrl} className="btn btn-info">Github</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default Project;