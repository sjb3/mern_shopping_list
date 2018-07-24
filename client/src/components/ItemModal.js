import React, { Component } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input,
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItems } from '../actions/itemActions';
import uuid from 'uuid';

class ItemModal extends Component {
  state = {
    modal: false,
    name: '',
    desc: '',
    URI: ''
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  onChange = (e) => {
    // this.setState(e.target.value)
    this.setState({[e.target.name]: e.target.value, [e.target.desc]: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: uuid(), // later backend is hooked this uuid won't be needed
      name: this.state.name,
      desc: this.state.desc,
      // URI: this.state.URI
    }
    // Add item via AddItem action
    this.props.addItems(newItem);

    // Close the modal
    this.toggle();
    console.log(newItem)
  }

  render() {
    return (
      <div>
      <Button
        color= 'dark'
        style={{marginBottom: '2rem'}}
        onClick={this.toggle}
      >Add Item</Button>
      <Modal
        isOpen={this.state.modal}
        toggle={this.toggle}
      >
        <ModalHeader toggle={this.toggle}>Add To Shopping List</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <Label for='item'>Item</Label>
              <Input
                type='text'
                name='name'
                id='item'
                placeholder='Add Shopping Item'
                onChange={this.onChange}
              />
              <Label for='desc'>Descriptions</Label>
              <Input
                type='text'
                desc='desc'
                id='item'
                placeholder='Additional Item Info'
                onChange={this.onChange}
              />

              <Button
                color='dark'
                style={{marginTop: '2rem'}}
                block>
                Submit
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
      </div>
    );
  }
}

// ShoppingList.prototypes = {
//   getItems: PropTypes.func.isRequired,
//   item: PropTypes.object.isRequired,
// };

const mapStateToProps = state => ({
  item: state.item,
});

export default connect(mapStateToProps, {addItems})(ItemModal);
