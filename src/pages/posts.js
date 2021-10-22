import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import NarrowPage from "../components/narrowPage";
import styled from "styled-components";
import { colors } from "../styles/styles";
import { navigate } from "gatsby";

const PostAuthor = styled.p`
  color: ${colors.grey200};
  line-height: 0px;
`;

const Post = styled.div`
  margin-bottom: 64px;
  cursor: pointer;
`;

function handleNavigate(page) {
  return function () {
    navigate(page);
  };
}

const Posts = ({ data }) => {
  if (!data) return null;
  const posts = data.allPrismicPost.edges;

  return (
    <>
      <Layout darkTextMenu={false}>
        <NarrowPage>
          {posts.map((post) => {
            return (
              <Post
                key={post.node.uid}
                onClick={handleNavigate(`/posts/${post.node.uid}`)}
              >
                <PostAuthor>Posted by {post.node.data.author.text}</PostAuthor>
                <h2>{post.node.data.title.text}</h2>
                <p>{post.node.data.description.text}</p>
              </Post>
            );
          })}
        </NarrowPage>
      </Layout>
    </>
  );
};

export const query = graphql`
  query MyQuery {
    allPrismicPost(sort: { order: DESC, fields: first_publication_date }) {
      edges {
        node {
          id
          data {
            title {
              text
            }
            description {
              text
            }
            author {
              text
            }
          }
          uid
        }
      }
    }
  }
`;

export default Posts;
