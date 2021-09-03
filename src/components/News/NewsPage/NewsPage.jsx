import React from "react";
import { CardGroup, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NewsPage(props) {
  return (
    <CardGroup>
      <Card>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body>
          <Card.Title>title</Card.Title>
          {/* <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text> */}
          <small className="text-muted">score</small>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">by</small>
          <small className="text-muted">time</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default NewsPage;
