import MailchimpSubscribe from "react-mailchimp-subscribe";
import React from "react";
import styled from "styled-components";
import { devices, colors } from "../styles/styles";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (min-width: 700px) {
    flex-direction: row;
    align-items: flex-start;
    margin-top: 0px;
  }
`;

const StyledButton = styled.button`
  margin-left: 0px;
  margin-top: 16px;
  @media (min-width: 700px) {
    margin-top: 0px;
    margin-left: 16px;
  }
`;

const StyledInput = styled.input`
  width: 200px;
  @media (min-width: 700px) {
    width: 250px;
  }
`;

const StyledSignupH2 = styled.p`
  padding-bottom: 4px;
  color: ${colors.grey500};
`;

const StyledSignupContent = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  @media (min-width: ${devices.tablet}) {
    flex-direction: column;
  }
`;

const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });

  return (
    <>
      <FormContainer>
        <StyledInput
          ref={(node) => (email = node)}
          type="email"
          placeholder="What's your email?"
          style={{
            margin: "0",
          }}
        />
        <StyledButton onClick={submit}>Submit</StyledButton>
      </FormContainer>
      <p style={{ maxWidth: "300px" }}>
        {status === "sending" && <p>Signing up...</p>}
        {status === "error" && (
          <p
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <p
            style={{ color: "green" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
      </p>
    </>
  );
};

export default function SignupForm() {
  const url =
    "https://gmail.us5.list-manage.com/subscribe/post?u=8bd8ee79ee838d8ea79c3d6b1&amp;id=d87dacb2df";
  return (
    <StyledSignupContent>
      <StyledSignupH2>Want to stay in touch?</StyledSignupH2>
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </StyledSignupContent>
  );
}
