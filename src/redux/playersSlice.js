import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { DEFAULT_PLAYERS } from '../constants/constants';

export const playersSlice = createSlice({
  name: 'playersList',
  initialState: {
    value: DEFAULT_PLAYERS,
  },
  reducers: {
    incrementPlayers: (state) => {
      state.value.push({
        id: uuidv4(),
        name: '',
        avatar: '',
        rightAnswers: [],
      });
    },
    decrementPlayers: (state) => {
      state.value.pop();
    },
    updatePlayers: (state, actions) => {
      state.value = actions.payload;
    },
  },
});

export const { incrementPlayers, decrementPlayers, updatePlayers } = playersSlice.actions;

export default playersSlice.reducer;
