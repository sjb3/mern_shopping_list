import React, { Component } from 'react';
import uuid from 'uuid';
import {
  Container,
  ListGroup,
  ListGroupItem,
  Button,
} from 'reactstrap';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getItems, deleteItems } from '../actions/itemActions';

class ShoppingList extends Component {
  state = {
    items: [
      {id: uuid(), name: 'Chanel'},
      {id: uuid(), name: 'Versace'},
      {id: uuid(), name: 'Gucci'},
    ]
  }
  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = (id) => {
    this.props.deleteItems(id);
  }

  render() {
    // this.props.item.items;
    const { items } = this.props.item;

    // Later will be updated with REDUX
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map((({
              id, name, URI, desc,
            }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  {/* <img alt="avatar" style={{ borderRadius: '50%', width: '50px', height: '50px' }} src={URI} />
                  <hr /> */}
                  {name}
                  {/* <p> */}

                  {/* </p> */}
                  <Button
                    style={{ alignContent: 'right' }}
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, id)}
                  >
&times;

                  </Button>
                </ListGroupItem>
              </CSSTransition>
            )))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

ShoppingList.prototypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  item: state.item,
});

export default connect(mapStateToProps, { getItems, deleteItems })(ShoppingList);
