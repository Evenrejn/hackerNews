import React from "react";
import { CardGroup, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom';
// import { withRouter } from "react-router-dom";
import TargetNews from "./TargetNews";

const NewsPage = (props) => {

    let getTargetNews = (news) => {
        <TargetNews news={news} />
    }

    return (
        <>
            {props.news.map((news) => (
                <NavLink to={"/news/" + news.id} key={news.id}>  
                    <CardGroup onClick={getTargetNews(news)}>
                        <Card>
                            <Card.Body>
                            <Card.Title>{news.title}</Card.Title>
                                <small className="text-muted">{news.score}</small>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">{news.by}</small>
                            <small className="text-muted">{news.time}</small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                </NavLink>
            ))}
        </>
    )
}

// let WithUrlDataContainerComponent = withRouter(NewsPage);

export default NewsPage;
