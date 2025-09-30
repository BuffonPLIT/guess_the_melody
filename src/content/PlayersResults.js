import React from 'react';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { Avatar, Badge, Grid, Typography } from '@mui/material';
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';

function PlayersResults() {
  const playersList = useSelector((state) => state.playersList.value);
  console.log(playersList);
  return (
    <Grid
      item
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {playersList.map((item, index) => (
        <Box key={item.id} m={2}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              width: '80px',
            }}
          >
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              badgeContent={
                <div
                  style={{
                    fontSize: 'x-large',
                    textShadow: '-2px -2px 10px #000000',
                    color: '#fff',
                    background:
                      'radial-gradient(circle, rgba(156,156,156,0.7707457983193278) 0%, rgba(181,181,181,0.7707457983193278) 50%, rgba(255,255,255,0) 100%)',
                  }}
                >
                  {item.rightAnswers.length}
                </div>
              }
            >
              <Avatar sx={{ width: 80, height: 80 }} alt={item.name} src={item.avatar} />
            </Badge>
            {item.rightAnswers.map((answer, index) => (
              <Box display={'flex'}>
                <AcUnitRoundedIcon key={index} sx={{ color: answer.color }} />
                <Typography
                  sx={{
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    width: '80px',
                    textOverflow: 'ellipsis',
                    textAlign: 'left',
                  }}
                >
                  {answer.answer}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Grid>
  );
}

export default PlayersResults;
