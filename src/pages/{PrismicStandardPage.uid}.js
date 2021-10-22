import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import NarrowPage from "../components/narrowPage";
import { RichText } from "prismic-reactjs";

const PageTemplate = ({ data }) => {
  if (!data) return null;
  const document = data.prismicStandardPage;

  return (
    <Layout lightMenu={false}>
      <NarrowPage>
        <h2>{document.data.page_title.text}</h2>
        <RichText render={document.data.page_content.raw} />
      </NarrowPage>
    </Layout>
  );
};

export const query = graphql`
  query PageQuery($id: String) {
    prismicStandardPage(id: { eq: $id }) {
      data {
        page_title {
          text
        }
        page_content {
          raw
        }
      }
    }
  }
`;

export default PageTemplate;
