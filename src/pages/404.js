import React from "react";
import Layout from "../components/layout";
import NarrowPage from "../components/narrowPage";

const FourZeroFour = () => {
  return (
    <>
      <Layout darkTextMenu={false}>
        <NarrowPage>
          <h2>Hmmm. This page is missing</h2>
          <a style={{ cursor: "pointer", fontWeight: "normal" }} href={"/"}>
            Click here to go home...
          </a>
          <div style={{ marginBottom: "50%" }} />
        </NarrowPage>
      </Layout>
    </>
  );
};

export default FourZeroFour;
