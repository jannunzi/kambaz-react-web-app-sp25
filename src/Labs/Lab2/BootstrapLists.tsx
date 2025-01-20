import { ListGroup } from "react-bootstrap";

export default function BootstrapLists() {
  return (
    <div>
      <div id="wd-css-hyperlink-list">
        <h3>Favorite books</h3>
        <ListGroup>
          <ListGroup.Item
            href="https://en.wikipedia.org/wiki/Dune_(novel)"
            action
            active
          >
            Dune
          </ListGroup.Item>
          <ListGroup.Item
            href="https://en.wikipedia.org/wiki/The_Lord_of_the_Rings"
            action
          >
            Lord of the Rings
          </ListGroup.Item>
          <ListGroup.Item
            href="https://en.wikipedia.org/wiki/The_Forever_War"
            action
          >
            The Forever War
          </ListGroup.Item>
          <ListGroup.Item
            href="https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(novel)"
            action
          >
            2001 A Space Odyssey
          </ListGroup.Item>
          <ListGroup.Item
            action
            disabled
            href="https://en.wikipedia.org/wiki/Ender%27s_Game"
          >
            Ender's Game
          </ListGroup.Item>
          <ListGroup.Item action onClick={() => alert("New book added")}>
            Add another book
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div id="wd-css-styling-lists">
        <h2>Favorite movies</h2>
        <ListGroup>
          <ListGroup.Item active>Aliens</ListGroup.Item>
          <ListGroup.Item>Terminator</ListGroup.Item>
          <ListGroup.Item>Blade Runner</ListGroup.Item>
          <ListGroup.Item>Lord of the Ring</ListGroup.Item>
          <ListGroup.Item disabled>Star Wars</ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
}
