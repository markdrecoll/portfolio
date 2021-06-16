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
          <CardTitle tag="h5">{props.projectTitle}</CardTitle>
          <CardSubtitle tag="p" className="mb-2">{props.projectSubtitle}</CardSubtitle>
        </CardBody>
        <img src={props.projectThumbnail} alt={props.projectThumbnailAlt} />
        <CardBody>
          {/* <CardText>Example Text</CardText> */}
          <CardLink href={props.deployedLink} className="btn btn-info btn-sm" target="_blank">Live Demo</CardLink>
          <CardLink href={props.codeUrl} className="btn btn-info btn-sm" target="_blank">Github</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default Project;