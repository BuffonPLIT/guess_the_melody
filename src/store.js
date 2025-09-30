import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './redux/usersSlice';
import playersListReducer from './redux/playersSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    playersList: playersListReducer
  },
})