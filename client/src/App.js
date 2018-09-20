import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { Container } from 'reactstrap';
import AppNavBar from './components/AppNavBar';
import ShoppingList from './components/ShoppingList';
import store from './store';
import ItemModal from './components/ItemModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div
          className="App"
          style={{
            backgroundImage: 'url("https://theredlist.com/media/database/fine-art2/17-18/southern_european_baroque/andrea_pozzo/005_andrea_pozzo_theredlist.jpg")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <AppNavBar />
          <Container>
            <ItemModal />
            <ShoppingList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
