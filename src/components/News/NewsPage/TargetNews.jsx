import React from "react";
import { Breadcrumb, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import { NavLink } from "react-router-dom";
// import CommentsContainer from "./CommentsContainer";
// import { withRouter } from "react-router-dom";

const TargetNews = (props) => {
  // console.log(props);
  //debugger;
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Back</Breadcrumb.Item>
        <Breadcrumb.Item active>News</Breadcrumb.Item>
      </Breadcrumb>
      <Card className="text-center">
        <Card.Header>{props.targetNews.by}</Card.Header>
        <Card.Body>
          <Card.Title>{props.targetNews.title}</Card.Title>
          <Card.Text>some text</Card.Text>

          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
        <Card.Footer className="text-muted">
          added: {props.targetNews.time} | score: {props.targetNews.score} |
          comments: {props.targetNews.descendants}
        </Card.Footer>
        <Button variant="primary">some button</Button>
        {/* <CommentsContainer id={props.targetNews.id} /> */}
      </Card>
    </>
  );
};

// let WithUrlDataContainerComponent = withRouter(NewsPage);

export default TargetNews;
