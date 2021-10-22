import React from "react";
import queryString from "query-string";

import Layout from "../components/layout";
import NarrowPage from "../components/narrowPage";

const PostDonation = () => {
  const url = typeof window === "undefined" ? null : window.location.href;
  // Example post-donation URL: https://majimazuri.org/?id=16794628&amount=0.61&currency=GBP&form_id=278214&form_name=Maji+Mazuri+Donations&first_name=Benedict&last_name=Shegog&email=benedict.shegog%40gmail.com&country=GB&Would+you+like+to+receive+%28very+occasional%29+email+updates%3F=yes#/donation-received
  const values = queryString.parse(url);
  const first_name = values.first_name
    ? ", " +
      values.first_name.charAt(0).toUpperCase() +
      values.first_name.slice(1)
    : "!";

  return (
    <>
      <Layout darkTextMenu={false}>
        <NarrowPage>
          <h2>Thank You{first_name}</h2>
          <p>
            Your generosity will make a real difference to the people that Maji
            Mazuri supports. We thank you on their behalf!
          </p>
          <p style={{ paddingBottom: "64px" }}>
            If you have any questions about your donation, please
            <a href="mailto:info@majimazuri.org"> email us</a>.
          </p>
        </NarrowPage>
      </Layout>
    </>
  );
};

export default PostDonation;
