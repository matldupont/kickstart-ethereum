import { Container } from "semantic-ui-react";
import { Header } from "./Header";

export function Layout({ children }) {
  return (
    <Container>
      <Header />
      <main>{children}</main>
    </Container>
  );
}
