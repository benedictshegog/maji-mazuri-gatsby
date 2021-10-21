import React from "react";
import styled from "styled-components";
import { colors } from "../styles/styles";
import { navigate } from "gatsby";

import SignupForm from "./signupForm";

const Background = styled.div`
  width: 100%;
  background-color: ${colors.backgroundblue};
  margin-top: 148px;
  padding: 64px 32px;
`;

const FooterContent = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 700px) {
    flex-direction: row;
    /* align-items: center; */
  }
`;

const Link = styled.p`
  cursor: pointer;
`;

function handleNavigate(page) {
  return function () {
    console.log("Trying to handle");
    navigate(page);
  };
}

export default function Footer(props) {
  console.log(props);

  return (
    <Background>
      <FooterContent props={props}>
        <div>
          <Link onClick={handleNavigate("/terms-and-conditions")}>
            Terms and Conditions
          </Link>
          <Link onClick={handleNavigate("/privacy-policy")}>
            Privacy Policy
          </Link>
          <Link onClick={handleNavigate("/contact")}>Contact</Link>
        </div>
        <SignupForm />
      </FooterContent>
    </Background>
  );
}

/// Simplified version to use if media queries are broken in Gatsby build

// import React from "react";
// import styled from "styled-components";
// import { colors } from "../styles/styles";
// import { navigate } from "gatsby";

// import SignupForm from "./signupForm";

// const Background = styled.div`
//   width: 100%;
//   background-color: ${colors.backgroundblue};
//   margin-top: 148px;
// `;

// const FooterContent = styled.div`
//   width: 80%;
//   text-align: center;
//   margin-left: auto;
//   margin-right: auto;
//   padding-bottom: 64px;
// `;

// const Link = styled.p`
//   cursor: pointer;
// `;

// function handleNavigate(page) {
//   return function () {
//     navigate(page);
//   };
// }

// export default function Footer(props) {
//   console.log(props.width);

//   return (
//     <Background>
//       <FooterContent>
//         <SignupForm />
//         <div>
//           <Link onClick={handleNavigate("/terms-and-conditions")}>
//             Terms and Conditions
//           </Link>
//           <Link onClick={handleNavigate("/privacy-policy")}>
//             Privacy Policy
//           </Link>
//           <Link onClick={handleNavigate("/contact")}>Contact</Link>
//         </div>
//       </FooterContent>
//     </Background>
//   );
// }
