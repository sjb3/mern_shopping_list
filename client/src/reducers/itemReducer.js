// Where we keep the states
// items from the ShoppingList are moved here
// eventually these coming from the back-end

import {
  GET_ITEMS,
  ADD_ITEMS,
  DELETE_ITEMS,
  ITEMS_LOADING
  ,
} from '../actions/types';


const initialState = {
  items: [],
  loading: false,
  // items: [
  //   {
  //     id: uuid(), desc: 'No more craps', name: 'Dior Suit', URI: 'http://ftape.com/media/wp-content/uploads/2013/09/Dior-Homme-FW13-Suit.jpg',
  //   },
  //   {
  //     id: uuid(), desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', name: 'Givenchy Jacket', URI: 'https://monetanddolce.files.wordpress.com/2012/12/givenchy-haute-couture-2010-fall-winter.jpg',
  //   },
  //   {
  //     id: uuid(), desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', name: 'Chanel Suit', URI: 'https://totallist.files.wordpress.com/2013/01/chanel-suit.jpg',
  //   },
  //   {
  //     id: uuid(), desc: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna', name: 'Margiela Coat', URI: 'https://a.1stdibscdn.com/archivesE/upload/v_1402/21_15/img_9187/IMG_9187_l.jpeg',
  //   },
  // ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case DELETE_ITEMS:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload),
      };
    case ADD_ITEMS:
      return {
        ...state,
        items: [action.payload, ...state.items],
      };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
