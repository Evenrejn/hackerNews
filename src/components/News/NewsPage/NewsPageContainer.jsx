import React from "react";
import { connect } from "react-redux";
import { getNews } from "../../../redux/news-reducer";
import NewsPage from "./NewsPage";
import Preloader from "../../../common/preloader";

class NewsPageContainer extends React.Component {
  componentDidMount() {
    this.props.getNews();
    this.refresh = setInterval(() => this.props.getNews(), 60000)
  }

  componentWillUnmiunt() {
    clearInterval(this.refresh);
  }

  render() {
    return (
      <>
        {this.props.isFetchingNR ? <Preloader /> : null}
        <NewsPage news={this.props.news} />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    news: state.newsPage.news,
    isFetchingNR: state.newsPage.isFetchingNR,
  };
};


export default connect(mapStateToProps, { getNews })(NewsPageContainer);
