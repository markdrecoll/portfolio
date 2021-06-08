import React from "react";
import "./style.css";

// function Project(props) {
//   return (
//     <div className="project">
//       <img src={props.projectThumbnail} height="300" width="300" />
//       <a href={props.codeUrl}>Github</a>
//       <a href={props.deployedLink}>Live Demo</a>
      
//       </div>
//   );
// }

// import React from 'react';
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

// export default Example;







export default Project;