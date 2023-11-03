import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-dark header" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><div className="title">GPH</div></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#responsabilidade" className="text-primary-emphasis">Responsabilidade Corporativa</Nav.Link>
              <Nav.Link href="#blog" className="text-primary-emphasis">Blog</Nav.Link>
              <Nav.Link href="#minhaconta" className="text-primary-emphasis">Minha Conta</Nav.Link>
              <Nav.Link href="#ajuda" className="text-primary-emphasis">Ajuda</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#anuncio">
                <Button className="btn btn-secondary">
                  Publique seu Anúncio
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="d-grid gap-2 search-bar">
        <p>O que você está procurando?</p>
        <Form.Select>
          <option>Todas Categorias</option>
        </Form.Select>
        <br />
        <Form.Select>
          <option>Todo Brasil</option>
        </Form.Select>
        <br />
        <Button className="btn btn-secondary">
          Pesquisar
        </Button>
      </div>
    </>
  );
}

export default Header;