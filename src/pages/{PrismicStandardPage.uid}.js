import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import StandardPage from "../components/standardPage";
import { RichText } from "prismic-reactjs";

const PageTemplate = ({ data }) => {
  if (!data) return null;
  const document = data.prismicStandardPage;

  return (
    <Layout>
      <StandardPage>
        {console.log(document.data)}
        <h2>{document.data.page_title.text}</h2>
        <RichText render={document.data.page_content.raw} />
      </StandardPage>
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
