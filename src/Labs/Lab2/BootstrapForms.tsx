import {
  Button,
  Col,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
  FormText,
  InputGroup,
  Row,
} from "react-bootstrap";
import FormRange from "react-bootstrap/esm/FormRange";

export default function BootstrapForms() {
  return (
    <div>
      <div id="wd-css-styling-forms">
        <h2>Forms</h2>
        <div id="wd-css-styling-switches">
          <h3>Switches</h3>

          <Form.Check
            type="switch"
            id="custom-switch"
            label="Unchecked switch checkbox input"
            checked={false}
          />
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Checked switch checkbox input"
            checked={true}
          />
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Unchecked disabled switch checkbox input"
            checked={false}
            disabled
          />
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Checked disabled switch checkbox input"
            checked={true}
            disabled
          />

          <hr />

          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="switch1" />
            <label className="form-check-label" htmlFor="switch1">
              Default switch checkbox input
            </label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="switch2"
              checked
            />
            <label className="form-check-label" htmlFor="switch2">
              Checked switch checkbox input
            </label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="switch3"
              disabled
            />
            <label className="form-check-label" htmlFor="switch3">
              Disabled switch checkbox input
            </label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="switch4"
              checked
              disabled
            />
            <label className="form-check-label" htmlFor="switch4">
              Disabled checked switch checkbox input
            </label>
          </div>
        </div>
        <hr />
        <div id="wd-css-responsive-forms-1">
          <h3>Responsive forms</h3>

          <Form.Group as={Row} className="mb-3" controlId="email1">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="email" value="email@example.com" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="password1">
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="password" />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="textarea2">
            <Form.Label column sm={2}>
              Bio
            </Form.Label>
            <Col sm={10}>
              <Form.Control as="textarea" style={{ height: "100px" }} />
            </Col>
          </Form.Group>

          <hr />

          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="email" placeholder="Email" />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalPassword"
            >
              <Form.Label column sm={2}>
                Password
              </Form.Label>
              <Col sm={10}>
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>
            <fieldset>
              <Form.Group as={Row} className="mb-3">
                <Form.Label as="legend" column sm={2}>
                  Radios
                </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="first radio"
                    checked
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                  />
                  <Form.Check
                    type="radio"
                    label="second radio"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                  />
                  <Form.Check
                    type="radio"
                    label="third radio"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                  />
                </Col>
              </Form.Group>
            </fieldset>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalCheck"
            >
              <Col sm={{ span: 10, offset: 2 }}>
                <Form.Check label="Remember me" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Col>
                <Button type="submit">Sign in</Button>
              </Col>
            </Form.Group>
          </Form>
          <hr />
          <Row>
            {/* <Col> */}
            <FormLabel sm={2}>Email</FormLabel>
            {/* </Col> */}
            <Col sm={10}>
              <FormControl type="email" />
            </Col>
          </Row>
          <hr />
          <div className="mb-3 row">
            <label htmlFor="email1" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="email1" />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="password1" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input type="password" id="password1" className="form-control" />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="textarea2" className="col-sm-2 col-form-label">
              Bio
            </label>
            <div className="col-sm-10">
              <textarea
                className="form-control"
                id="textarea2"
                rows={3}
              ></textarea>
            </div>
          </div>
        </div>

        <hr />
        <div id="wd-css-styling-addons">
          <h3>Addons</h3>
          <InputGroup className="mb-3">
            <InputGroup.Text>@</InputGroup.Text>
            <InputGroup.Text>0.00</InputGroup.Text>
            <FormControl />
          </InputGroup>
          <InputGroup>
            <FormControl />
            <InputGroup.Text>$</InputGroup.Text>
            <InputGroup.Text>0.00</InputGroup.Text>
          </InputGroup>
        </div>
        <br />
        <div id="wd-css-styling-range-and-sliders">
          <h3>Range</h3>
          <FormGroup controlId="wd-range1">
            <FormLabel>Example range</FormLabel>
            <FormRange min="0" max="5" step="0.5" />
          </FormGroup>
          <label htmlFor="range1" className="form-label">
            Example range
          </label>
          <input
            type="range"
            className="form-range"
            min="0"
            max="5"
            step="0.5"
            id="range1"
          />
        </div>

        <div id="wd-css-styling-dropdowns">
          <h3>Dropdowns</h3>
          <FormSelect>
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </FormSelect>
        </div>
        {/* <Form></Form> */}
        {/* <Form>*/}

        <FormGroup className="mb-3" controlId="exampleForm.ControlInput1">
          <FormLabel>Email address</FormLabel>
          <FormControl type="email" placeholder="name@example.com" />
        </FormGroup>
        <FormGroup className="mb-3" controlId="exampleForm.ControlTextarea1">
          <FormLabel>Example textarea</FormLabel>
          <FormControl as="textarea" rows={3} />
        </FormGroup>
        <br />

        <FormGroup className="mb-3" controlId="formBasicEmail">
          <FormLabel>Email address</FormLabel>
          <FormControl type="email" placeholder="Enter email" />
          <FormText className="text-muted">
            We'll never share your email with anyone else.
          </FormText>
        </FormGroup>
        <FormGroup>
          <FormLabel>Example Textarea</FormLabel>
          <FormControl as="textarea" rows={3} placeholder="" />
        </FormGroup>
        <FormGroup className="mb-3" controlId="formBasicPassword">
          <FormLabel>Password</FormLabel>
          <FormControl type="password" placeholder="Password" />
        </FormGroup>
        <FormGroup className="mb-3" controlId="formBasicCheckbox">
          <FormCheck type="checkbox" label="Check me out" />
        </FormGroup>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        {/*</Form> */}

        <div className="mb-3">
          <label htmlFor="input1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="input1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="textarea1" className="form-label">
            Example textarea
          </label>
          <textarea className="form-control" id="textarea1" rows={3}></textarea>
        </div>
      </div>
    </div>
  );
}
