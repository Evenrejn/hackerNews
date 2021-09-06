import React from "react";
import { Breadcrumb, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
// import { withRouter } from "react-router-dom";

const Comments = (props) => {
  //console.log(props.comments.data.kids);
  //debugger;
  //console.log(props.comments.data.kids);
  return (
    <>
      <Card className="text-center">
        {/* <Card.Header>{props.targetNews.by}</Card.Header> */}
        <Card.Body>
          <Card.Text>some text</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};

// let WithUrlDataContainerComponent = withRouter(NewsPage);

export default Comments;
