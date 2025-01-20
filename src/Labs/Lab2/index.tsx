import { Container } from "react-bootstrap";
import BootstrapGrids from "./BootstrapGrids";
import BootstrapNavigation from "./BootstrapNavigation";
import BootstrapLists from "./BootstrapLists";
import BootstrapForms from "./BootstrapForms";

export default function Lab2() {
  return (
    <Container>
      <h2>Lab 2</h2>
      <BootstrapForms />
      <BootstrapLists />
      <BootstrapGrids />
      <BootstrapNavigation />
    </Container>
  );
}
