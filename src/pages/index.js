import * as React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import HeaderImage from "../components/headerImage";
import HeaderContents from "../components/headerContents";
import NarrowPage from "../components/narrowPage";
import Card from "../components/card";

const StyledBodyArea = styled.div`
  text-align: center;
  //removed below because it messes with the hamburger menu's item's click areas
  position: relative;
  /* padding-top: 500px; */
`;

const CardContainer = styled.div``;

const IndexPage = () => {
  return (
    <>
      <HeaderImage>
        <HeaderContents />
      </HeaderImage>
      <Layout lightMenu={true} landingPage>
        <NarrowPage>
          <StyledBodyArea>
            <h3>Our work</h3>
            <h2>
              We operate a range of programmes including a 550 pupil school, an
              orphanage, and youth groups
            </h2>
            <CardContainer>
              <Card
                title="Children’s Centre"
                body="A center for disabled children which aims to rehabilitate individuals through physiotherapy, occupational therapy, and one-on-one special education."
                link={"/childrens-center"}
              />
              <Card
                title="Headstart School"
                body="Headstart is a school in Mathere, one of the largest slums in East Africa, which provides primary education and free school meals to over 500 children."
                link={"/headstart-school"}
              />
              <Card
                title="Youth Groups"
                body="The Youth Group is a grassroots programme including a UN-recognised environmental initiative and an anti-violence campaign focused on reducing the amount of political violence and rioting around election times."
                link={"/youth-group"}
              />
              <Card
                title="Teens Groups"
                body="The Maji Mazuri youth and teens groups were setup to give children and teenagers access to vocational and talent development which covers drama, sports, music, computer and environmentalism skills training"
                link={"/teens-group"}
              />
            </CardContainer>
          </StyledBodyArea>
        </NarrowPage>
      </Layout>
    </>
  );
};
export default IndexPage;
