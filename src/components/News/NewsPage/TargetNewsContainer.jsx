import React from "react";
import { connect } from "react-redux";
import { getTargetNews } from "../../../redux/target-news-reducer";
import Preloader from "../../../common/preloader";
import TargetNews from "./TargetNews";


class TargetNewsContainer extends React.Component {
  componentDidMount() {
    this.props.getTargetNews(this.props.props.match.params.id);
  }

  render() {
    return (
      <>
        {this.props.isFetchingTNR ? <Preloader /> : null}
        <TargetNews targetNews={this.props.targetNews} />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    targetNews: state.targetNewsPage.targetNews,
    isFetchingTNR: state.targetNewsPage.isFetchingTNR,
  };
};

export default connect(mapStateToProps, { getTargetNews })(TargetNewsContainer);
