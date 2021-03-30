// import { createStore } from 'redux';
// import { combineReducers } from 'redux';
import contactsReducer from './contacts/contact-reducer';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = configureStore({ reducer: rootReducer });

// const store = createStore(rootReducer, composeWithDevTools());

export default store;
