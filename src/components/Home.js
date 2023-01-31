import React, { Component } from 'react';
import HomeChart from './HomeChart';
import HomeDetail from './HomeDetail';
import { Container, Row, Col } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col><HomeChart /></Col>
          <Col><HomeDetail /></Col>
        </Row>
      </Container>
    );
  }
}

export default Home;