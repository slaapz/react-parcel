import React, { Component } from 'react';
import {
  ListGroup,
  ListGroupItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const { item } = this.props;

    // Parse directions
    let c = 0;
    let listItems = item.list.map(lItem => {
      c++;
      return <ListGroupItem key={c}>{`${c}. ${lItem}`}</ListGroupItem>;
    });

    // Parse links
    let buttons = item.links.map(link => {
      if (link.name !== '') {
        return (
          <a href={link.url} target="_blank" className="btn btn-success">{`${
            link.name
          }-Go to CRU Site`}</a>
        );
      } else {
        return;
      }
    });

    return (
      <ListGroupItem>
        <Button color="primary" block onClick={this.toggle}>
          {item.title}
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{item.title}</ModalHeader>
          <ModalBody>
            <ListGroup>{listItems}</ListGroup>
          </ModalBody>
          <ModalFooter>{buttons}</ModalFooter>
        </Modal>
      </ListGroupItem>
    );
  }
}

export default Card;
