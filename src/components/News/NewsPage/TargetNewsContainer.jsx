import React from "react";
import { connect } from "react-redux";
import { getTargetNews, getComments } from "../../../redux/target-news-reducer";
// import Preloader from "../../../common/preloader";
import TargetNews from "./TargetNews";
// import Comments from "./Comments";
import CommentsContainer from "./CommentsContainer";

class TargetNewsContainer extends React.Component {
  componentDidMount() {
    this.props.getTargetNews(this.props.props.match.params.id);
    debugger;
    // if ((this.props.comments).length !== 0) {
    //   this.props.getComments(this.props.comments.data.kids);
    // }

    
  }

  // getTargetNews = void 0;
  render() {
    //debugger;
    return (
      <>
        {/* {this.props.isFetching ? <Preloader /> : null} */}
        <TargetNews targetNews={this.props.targetNews} />
        <CommentsContainer comments={this.props.targetNews} />
        {/* <CommentsContainer comments={this.props.targetNews.kids} /> */}
      </>
    );
  }
}


//debugger;
let mapStateToProps = (state) => {
  //debugger;

  return {
    targetNews: state.targetNewsPage.targetNews,
    comments: state.commentsBlock.comments,
    // isFetching: state.newsPage.isFetching,
  };
};

// let WithUrlDataContainerComponent = withRouter(NewsPageContainer);
export default connect(mapStateToProps, { getTargetNews, getComments })(TargetNewsContainer);
