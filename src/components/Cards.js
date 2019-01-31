import React from 'react';
import { Container, Row, Col, ListGroup } from 'reactstrap';

import Card from './Card';
const Cards = props => {
  const { macros } = props;
  let items = macros.map(item => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <Container className="mt-5">
      <Row>
        <Col sm="12" md="6">
          <ListGroup>{items}</ListGroup>;
        </Col>
      </Row>
    </Container>
  );
};

export default Cards;
