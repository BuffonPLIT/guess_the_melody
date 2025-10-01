import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useSelector, useDispatch } from 'react-redux';
import { updatePlayers } from '../redux/playersSlice';
import { Avatar, Button, ButtonGroup, IconButton } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

const icon = (
  <Paper elevation={4}>
    <Box sx={{ width: 560, height: 270, boxShadow: '0px 50px 0px 0px rgb(255 255 255 / 95%)' }}>
      <img
        src="https://img.freepik.com/free-vector/musical-pentagram-sound-waves-notes-background_1017-33911.jpg?w=2000"
        style={{ width: '560px', height: '270px' }}
        alt="performance"
      />
    </Box>
  </Paper>
);

export default function Question({
  id,
  answer,
  color,
  questionsType,
  closePopup,
  handleNexst,
  handlePrevious,
  children,
}) {
  const dispatch = useDispatch();
  const [checked, setChecked] = React.useState(false);
  const playersList = useSelector((state) => state.playersList.value);

  const handleChangeHidder = () => {
    // setChecked((prev) => !prev);
    setChecked(false);
  };

  const addCorrectAnsver = (userId) => {
    const playersListForUpdate = playersList.map((a) => ({ ...a }));
    playersListForUpdate
      .filter((x) => x.id === userId)
      .map((x) => {
        let answersForUpdate = x.rightAnswers.map((a) => ({ ...a }));
        answersForUpdate.push({ id: id, color: color, answer: answer });
        x.rightAnswers = answersForUpdate;
        return x;
      });
    dispatch(updatePlayers(playersListForUpdate));
  };

  const removeCorrectAnsver = (userId) => {
    const playersListForUpdate = playersList.map((a) => ({ ...a }));
    playersListForUpdate
      .filter((x) => x.id === userId)
      .map((x) => {
        let answersForUpdate = x.rightAnswers.map((a) => ({ ...a }));
        const index = answersForUpdate.findIndex((obj) => obj.id === id);
        if (index === -1) {
          return null;
        }
        answersForUpdate.splice(index, 1);
        x.rightAnswers = answersForUpdate;
        return x;
      });
    dispatch(updatePlayers(playersListForUpdate));
  };

  return (
    <>
      <IconButton
        aria-label="close"
        onClick={() => {
          closePopup();
          setChecked(false);
        }}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <Box sx={{ height: 315, display: 'flex' }}>
        <Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <FormControlLabel
              sx={{ margin: '0' }}
              control={<Switch sx={{ margin: '0' }} checked={checked} onChange={handleChangeHidder} />}
              label=""
            />
            {playersList.map((item, index) => (
              <ButtonGroup
                key={item.id}
                variant="outlined"
                aria-label="outlined button group"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <IconButton color="primary" aria-label="add" onClick={() => addCorrectAnsver(item.id)}>
                  <AddIcon />
                </IconButton>
                <Box key={item.id}>
                  {item.avatar && <Avatar alt={item.name} src={item.avatar} />}
                  {!item.avatar && <span>{item.name}</span>}
                </Box>
                <IconButton color="primary" aria-label="remove" onClick={() => removeCorrectAnsver(item.id)}>
                  <RemoveIcon />
                </IconButton>
              </ButtonGroup>
            ))}
            <FormControlLabel
              sx={{ margin: '0' }}
              control={<Switch sx={{ margin: '0' }} checked={checked} onChange={handleChangeHidder} />}
              label=""
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
            }}
          >
            <Button
              variant="outlined"
              onClick={() => {
                handlePrevious();
                setChecked(false);
              }}
            >
              {'<'}
            </Button>
            <Box
              sx={{
                '& > :not(style)': {
                  display: 'flex',
                  width: 560,
                  justifyContent: 'center',
                  height: 315,
                },
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  height: '0px',
                  display: questionsType === 'image' ? 'none' : '',
                }}
              >
                <Collapse in={checked} collapsedSize={1}>
                  {icon}
                </Collapse>
              </div>
              {questionsType === 'iframe' && children}
              {questionsType === 'image' && children && (
                <div>
                  <img src={children} alt="Img" />
                </div>
              )}
            </Box>
            <Button
              variant="outlined"
              onClick={() => {
                handleNexst();
                setChecked(false);
              }}
            >
              {'>'}
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
