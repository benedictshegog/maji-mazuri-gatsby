import * as React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import { devices } from "../styles/styles";

const PageWrapper = styled.div`
  margin-top: 100px;
  @media (min-width: ${devices.tablet}) {
    margin-left: 30%;
    margin-top: 50px;
  }
`;

const IndexPage = () => {
  return (
    <Layout darkTextMenu={true}>
      <PageWrapper>
        <script
          src="https://donorbox.org/widget.js"
          paypalExpress="false"
        ></script>

        <div
          position="relative"
          padding-bottom="56.25%"
          padding-top="25px"
          height="0"
        >
          <iframe
            src="https://donorbox.org/embed/maji-mazuri-donations"
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="850px"
            seamless="seamless"
            frameborder="0"
            max-height="none!important"
            title="donorbox"
          ></iframe>
        </div>
      </PageWrapper>
    </Layout>
  );
};
export default IndexPage;
