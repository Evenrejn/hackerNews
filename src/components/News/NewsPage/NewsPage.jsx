import React from "react";
import { CardGroup, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
// import { withRouter } from "react-router-dom";
// import TargetNews from "./TargetNews";

const NewsPage = (props) => {
  // let getTargetNews = (news) => {
  //     <TargetNews news={news} />
  // }

  return (
    <>
      {props.news.map((news) => (
        <NavLink to={"/" + news.id} key={news.id} props={props}>
          {/* <CardGroup onClick={getTargetNews(news)}> */}
          <CardGroup>
            <Card>
              <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                <small className="text-muted">
                  <span>rating:</span> {news.score} | <span>comments: </span>
                  {news.descendants || "0"}
                </small>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  by: {news.by} | added: {news.time}
                </small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </NavLink>
      ))}
    </>
  );
};

// let WithUrlDataContainerComponent = withRouter(NewsPage);

export default NewsPage;
