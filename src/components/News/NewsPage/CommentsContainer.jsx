import React from "react";
import { connect } from "react-redux";
import Preloader from "../../../common/preloader";
import { Button, Card } from "react-bootstrap";
import { getComments } from "../../../redux/comments-reducer";
import { getMoreComments } from "../../../redux/parent-comment-reducer";
import timeConverter from "../../../utils/timeConverter/timeConverter";
import "./Comments.css"

class CommentsContainer extends React.Component {
  componentDidMount() {
    this.props.getComments(this.props.props.match.params.id);
  }

  getMoreComments(id) {
    this.props.getMoreComments(id);
  }

  render() {
    return (
      <div>
        {this.props.isFetchingCR ? <Preloader /> : null}
        {this.props.comment.length >= 1 ? (
          this.props.comment.map((comment) => (
            <>
              <Card key={comment.id} className="text-center">
                <Card.Header>{comment.by}</Card.Header>
                <Card.Body>
                  <Card.Text>{comment.text}</Card.Text>
                  <Card.Text>added: {timeConverter(comment.time)}</Card.Text>
                  {comment.kids ? (
                    <Button
                      onClick={(event) => {
                        event.target.style.display = "none";
                        this.getMoreComments(comment.id);
                      }}
                      variant="primary"
                    >
                      Show replies
                    </Button>
                  ) : null}
                  <div>
                    {this.props.moreComments
                      ? this.props.moreComments.map((comm) => {
                        return (comment.id === comm.parent) ? (
                            <div className="commentCard">
                              <div className="commentName"><span>{comm.by}</span></div>
                              <div className="commentText"><span>{comm.text}</span></div>
                              <div className="commentTime"><span>time: {timeConverter(comm.time)}</span></div>

                                {comm.kids ? (
                                <Button
                                  onClick={(event) => {
                                    event.target.style.display = "none";
                                    this.getMoreComments(comm.id);
                                  }}
                                  variant="primary"
                                >
                                  Show replies
                                </Button>
                                ) : null}
                            </div>) : null}
                      )
                      : null}
                  </div>
                </Card.Body>
              </Card>
            </>
          ))
        ) : (
          <div className="noComments">No comments yet</div>
        )}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    comment: state.comments.comment,
    moreComments: state.moreComment.moreComments,
    isFetchingCR: state.comments.isFetchingCR,
  };
};

export default connect(mapStateToProps, { getComments, getMoreComments })(
  CommentsContainer
);
