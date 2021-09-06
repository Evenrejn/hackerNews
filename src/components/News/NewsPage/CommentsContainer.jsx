// import React from "react";
// import { connect } from "react-redux";
// // import { getTargetNews, getComments } from "../../../redux/target-news-reducer";
// // import Preloader from "../../../common/preloader";
// import Comments from "./Comments";
// // import Comments from "./Comments";
// //import CommentsContainer from "./CommentsContainer";

// class CommentsContainer extends React.Component {
//   componentDidMount() {
//     this.props.getAllComments(this.props.props.match.params.id);
//   }

//   render() {
    
//     return (
//       <>
//         {/* {this.props.isFetching ? <Preloader /> : null} */}
//         <TargetNews targetNews={this.props.targetNews} />
//         <CommentsContainer comments={this.props.comments} />
//       </>
//     );
//   }
// }

// let mapStateToProps = (state) => {
//   //debugger;

//   return {
//     targetNews: state.targetNewsPage.targetNews,
//     comments: state.commentsBlock.comments,
//     // isFetching: state.newsPage.isFetching,
//   };
// };

// // let WithUrlDataContainerComponent = withRouter(NewsPageContainer);
// export default connect(mapStateToProps, { getTargetNews, getComments })(CommentsContainer);




import React from "react";
import { Breadcrumb, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
// import { withRouter } from "react-router-dom";

const CommentsContainer = (props) => {

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

export default CommentsContainer;