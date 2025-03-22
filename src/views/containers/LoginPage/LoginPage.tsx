import React from "react";
import { Container } from "@mui/material";
import ContentPaper from "../../components/ContentPaper";
import {Typography} from "@mui/material";

export const LoginPage = () => {
  return (
    <Container maxWidth="xl">
      <ContentPaper>
      <Typography variant="h3" align="center">This is Login Page</Typography>
      </ContentPaper>
    </Container>
  );
};
