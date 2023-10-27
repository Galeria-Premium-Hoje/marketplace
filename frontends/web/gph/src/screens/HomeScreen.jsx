import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from "../components/common/Header"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Footer from "../components/common/Footer"

const HomeScreen = () => {
  return (
    <div>
      <Header />
      <main className="py-5">
        <Container fluid="md">
          <Tabs
            defaultActiveKey="imoveis"
            id="fill-tab-example"
            className="mb-5 categories"
            justify
          >
            <Tab eventKey="imoveis" title="Imóveis">
              Imóveis
            </Tab>
            <Tab eventKey="servicos" title="Serviços">
              Serviços
            </Tab>
            <Tab eventKey="veiculos" title="Veículos">
              Veículos
            </Tab>
            <Tab eventKey="compravenda" title="Compra & Venda">
              Compra & Venda
            </Tab>
            <Tab eventKey="pessoais" title="Pessoais">
              Pessoais
            </Tab>
          </Tabs>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default HomeScreen
