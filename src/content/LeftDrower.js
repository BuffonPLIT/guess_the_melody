import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import { ButtonGroup, IconButton } from '@mui/material';
import PlayerProfile from './PlayerProfile';
import { useSelector, useDispatch } from 'react-redux';
import { decrementPlayers, incrementPlayers, updatePlayers } from '../redux/playersSlice';
import MenuIcon from '@mui/icons-material/Menu';

function LeftDrower() {
  const [state, setState] = React.useState({ left: false });
  const dispatch = useDispatch();
  const playersList = useSelector((state) => state.playersList.value);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const addPlayer = () => {
    dispatch(incrementPlayers());
  };

  const removePlayer = () => {
    dispatch(decrementPlayers());
  };

  const onNameChange = (value, id) => {
    const playersListForUpdate = playersList.map(a => ({...a}));
    playersListForUpdate.filter((x) => x.id === id).map((x) => (x.name = value));
    dispatch(updatePlayers(playersListForUpdate));
  };

  const onAvaChange = (value, id) => {
    const playersListForUpdate = playersList.map(a => ({...a}));
    playersListForUpdate.filter((x) => x.id === id).map((x) => (x.avatar = value));
    dispatch(updatePlayers(playersListForUpdate));
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 500 }}
      role="presentation"
    >
      <List>
        <ListItem key='count-btns'>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& > *": {
              m: 1,
            },
          }}
        >
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button onClick={removePlayer} disabled={playersList.length < 4}>-</Button>
            <Button disabled>{playersList.length}</Button>
            <Button onClick={addPlayer}>+</Button>
          </ButtonGroup>
        </Box>
        </ListItem>
           {playersList.map((item, index) => (
            <ListItem key={item.id}>
              <PlayerProfile
                id={item.id}
                avalink={item.avatar}
                name={item.name}
                onAvaChange={onAvaChange}
                onNameChange={onNameChange}
              />  
            </ListItem>
          ))}
        </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {(['left']).map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton sx={{float: 'left'}} onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default LeftDrower;