import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import NarrowPage from "../../components/narrowPage";
import { RichText } from "prismic-reactjs";
import styled from "styled-components";
import { colors } from "../../styles/styles";

const PostAuthor = styled.p`
  color: ${colors.grey200};
  line-height: 0px;
`;

const BannerImage = styled.img`
  width: 100%;
`;

const PageTemplate = ({ data }) => {
  if (!data) return null;
  const document = data.prismicPost;

  return (
    <>
      <Layout darkTextMenu={true}>
        <NarrowPage>
          <div style={{ paddingTop: "10%" }} />
          <PostAuthor>Posted by {document.data.author.text}</PostAuthor>
          <h2>{document.data.title.text}</h2>
          <BannerImage src={document.data.image.url} />
          <RichText render={document.data.body.raw} />
        </NarrowPage>
      </Layout>
    </>
  );
};

export const query = graphql`
  query PostQuery($id: String) {
    prismicPost(id: { eq: $id }) {
      data {
        author {
          text
        }
        body {
          raw
        }
        title {
          text
        }
        image {
          url
        }
      }
    }
  }
`;

export default PageTemplate;
