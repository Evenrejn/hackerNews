import React from "react";
import { connect } from "react-redux";
import { getNews } from "../../../redux/news-reducer";
import { getComments } from "../../../redux/comments-reducer";
import NewsPage from "./NewsPage";
import Preloader from "../../../common/preloader";
// import Comments from "./Comments";
// import { compose } from "redux";
// import { withRouter } from "react-router-dom";

class NewsPageContainer extends React.Component {
  componentDidMount() {
    this.props.getNews();
  }
// getNews = void 0;
  render() {
    //debugger;
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <NewsPage news={this.props.news} />
      </>
    );
  }
}
//debugger;
let mapStateToProps = (state) => {
  return {
    news: state.newsPage.news,
    isFetching: state.newsPage.isFetching
  };
};

// let WithUrlDataContainerComponent = withRouter(NewsPageContainer);
export default connect(mapStateToProps, { getNews })(NewsPageContainer);
