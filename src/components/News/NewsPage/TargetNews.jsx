import React from "react";
import { Breadcrumb, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import timeConverter from "../../../utils/timeConverter/timeConverter";
import "./TargetNews.css";

const TargetNews = (props) => {

  return (
    <>
      <Breadcrumb>
        <NavLink to={"/"}>
          <Breadcrumb.Item active>Back</Breadcrumb.Item>
        </NavLink>
      </Breadcrumb>
      <Card className="text-center">
        <Card.Header>{props.targetNews.by || "No author"}</Card.Header>
        <Card.Body>
          <Card.Title>{props.targetNews.title || "No title"}</Card.Title>
          <Card.Text>
            {!!props.targetNews.url ? (
              <>
                link:{" "}
                <a target="_blank" rel="noreferrer" href={props.targetNews.url}>
                  {props.targetNews.url}
                </a>
              </>
            ) : (
              "No link for this news"
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          added: {timeConverter(props.targetNews.time)} | score:{" "}
          {props.targetNews.score} | comments: {props.targetNews.descendants}
        </Card.Footer>
        <Button variant="primary">Refresh comments</Button>
      </Card>
    </>
  );
};


export default TargetNews;
