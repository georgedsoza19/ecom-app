import React, { useCallback } from "react";
import {
  CredentialResponse,
  GoogleLogin,
  GoogleOAuthProvider,
} from "@react-oauth/google";
import { Container, Paper } from "@mui/material";
import { styled } from "@mui/system";
import { setAppTokens } from "../utils/commanFunctions";

const { REACT_APP_GOOGLE_CLIENT_ID } = import.meta.env;

const StyledContainer = styled(Container)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
});

const StyledPaper = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "2rem",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
});

const GoogleSignIn: React.FC = () => {
  const handleLoginSuccess = useCallback(
    (credentialResponse: CredentialResponse) => {
      if (credentialResponse?.credential)
        setAppTokens(credentialResponse.credential);
    },
    []
  );

  const handleLoginError = useCallback(() => {}, []);
  return (
    <GoogleOAuthProvider clientId={REACT_APP_GOOGLE_CLIENT_ID}>
      <StyledContainer>
        <StyledPaper>
          <h2>Welcome to E-commerce App</h2>
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={() => handleLoginError}
          />
        </StyledPaper>
      </StyledContainer>
    </GoogleOAuthProvider>
  );
};

export default GoogleSignIn;
