import React, { Component } from 'react';
import {
  Container, ListGroup, ListGroupItem, Button,
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class ShoppingList extends Component {
  state = {
    items: [
      {id: uuid(), desc:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', name: 'Dior Suit', URI: 'http://ftape.com/media/wp-content/uploads/2013/09/Dior-Homme-FW13-Suit.jpg'},
      {id: uuid(), desc:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', name: 'Givenchy Jacket', URI: 'https://monetanddolce.files.wordpress.com/2012/12/givenchy-haute-couture-2010-fall-winter.jpg'},
      {id: uuid(), desc:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', name: 'Chanel Suit', URI: 'https://totallist.files.wordpress.com/2013/01/chanel-suit.jpg'},
      {id: uuid(), desc:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', name: 'Margiela Coat', URI: 'https://a.1stdibscdn.com/archivesE/upload/v_1402/21_15/img_9187/IMG_9187_l.jpeg'},
    ]
  }

  render() {
    const {items} = this.state;

    // Later will be updated with REDUX
    return (
      <Container>
        <Button
          color='dark'
          style={{marginBottom: '2rem'}}
          onClick={() => {
            const name = prompt('Enter Item');
            const img = prompt('Image URL please')

            if(name && img){
              this.setState(state => ({
                items: [...state.items, { id: uuid(), name, URI: img }]
              }));
            }
          }}
        >Add Item</Button>
        <ListGroup>
          <TransitionGroup className='shopping-list'>
            {items.map((({id, name, URI, desc}) => (
              <CSSTransition key={id} timeout={500} classNames='fade'>
                <ListGroupItem>
                  <img alt='avatar' style={{borderRadius: '50%', width: '50px', height: '50px'}} src={URI} />
                  <hr />
                  {name}
                  <p>{desc}</p>
                  <Button
                    style={{alignContent: 'right'}}
                    className='remove-btn'
                    color='danger'
                    size='sm'
                    onClick={() => {
                      this.setState(state => ({items: state.items.filter(item => item.id !== id)}))
                    }}
                  >&times;</Button>
                </ListGroupItem>
              </CSSTransition>
            )))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}


export default ShoppingList;
