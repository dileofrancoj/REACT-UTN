import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { fetchPosts } from "./redux/actions/postsAction";
const Posts = (props) => {
  useEffect(() => {
    //fetchPosts();
    fetchPosts(props.dispatch);
    console.log(props);
  }, []);
  return (
    <>
      <Container>
        <Row>
          <Col>
            {props.state.posts.posts.map((post) => (
              <p key={post.id}>{post.title}</p>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps)(Posts);
