import { Card, Button, Nav } from "react-bootstrap";

export default function BootstrapNavigation() {
  return (
    <div>
      <div id="wd-css-navigating-with-tabs">
        <h2>Tabs</h2>
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link href="#/Labs/Lab2/Active">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#/Labs/Lab2/Link1">Link 1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#/Labs/Lab2/Link2">Link 2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#/Labs/Lab2/Disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <hr />
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Active
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
      </div>

      <div id="wd-css-navigating-with-cards">
        <h2>Cards</h2>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="images/stacked.jpg" />
          <Card.Body>
            <Card.Title>Stacking Starship</Card.Title>
            <Card.Text>
              Stacking the most powerful rocket in history. Mars or bust!
            </Card.Text>
            <Button variant="primary">Boldly Go</Button>
          </Card.Body>
        </Card>

        <div className="card" style={{ width: "18rem" }}>
          <img src="images/stacked.jpg" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Stacking Starship </h5>
            <p className="card-text">
              Stacking the most powerful rocket in history. Mars or bust!
            </p>
            <a href="#" className="btn btn-primary">
              Boldly Go
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
