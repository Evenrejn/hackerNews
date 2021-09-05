import React from "react";
import { CardGroup, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from 'react-router-dom';
// import { withRouter } from "react-router-dom";

const TargetNews = (props) => {
console.log(props)
    return (
        <>
            <div>dddd {props.title}</div>
        </>
    )
}

// let WithUrlDataContainerComponent = withRouter(NewsPage);

export default TargetNews;
