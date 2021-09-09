import { React } from "react";
import { CardGroup, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import "./NewsPage.css";
import timeConverter from "../../../utils/timeConverter/timeConverter";

const NewsPage = (props) => {
  return (
    <>
      {props.news.map((news) =>
        news ? (
          <NavLink to={"/" + news.id} key={news.id} props={props}>
            <CardGroup>
              <Card>
                <Card.Body>
                  <Card.Title>{news.title || "title"}</Card.Title>
                  <small className="text-muted">
                    <span>rating:</span> {news.score || "score"} |{" "}
                    <span>comments: </span>
                    {news.descendants || "0"}
                  </small>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    by: {news.by || "noName"} | added:{" "}
                    {timeConverter(news.time)}
                  </small>
                </Card.Footer>
              </Card>
            </CardGroup>
          </NavLink>
        ) : (
          <div>This news was deleted</div>
        )
      )}
    </>
  );
};

export default NewsPage;
