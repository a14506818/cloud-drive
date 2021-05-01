import React from "react";
import { Container } from "react-bootstrap";

export default function CenterDiv({ children }) {
  return (
    <Container
      className="d-flex align-items-center justify-content-center "
      style={{
        minHeight: "100vh",
        maxWidth: "500px",
        flexDirection: "column",
      }}
    >
      {children}
    </Container>
  );
}
