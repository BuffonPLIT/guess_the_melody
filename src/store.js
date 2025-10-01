import { configureStore } from '@reduxjs/toolkit';
import playersListReducer from './redux/playersSlice';

export default configureStore({
  reducer: {
    playersList: playersListReducer,
  },
});
