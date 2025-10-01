import React, { useState } from 'react';
import Questions from './QuestionList';
import { Container, Grid } from '@mui/material';
import PlayersResults from './PlayersResults';
import ThemeSelector from './ThemeSelector';
import { Box } from '@mui/system';

function Game() {
  const [activeTheme, setActiveTheme] = useState(null);

  const selectThemeHandle = (theme) => {
    setActiveTheme(theme);
  };

  return (
    <Container
      component="main"
      maxWidth="lg"
      sx={{
        background: '#ffeeee',
        boxShadow: '0px 0px 25px 25px #ffeeee',
      }}
    >
      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            flexGrow: '1',
            flexBasis: '0',
            maxWidth: '65%',
          }}
        >
          <ThemeSelector selectThemeHandle={selectThemeHandle} activeTheme={activeTheme} />
          <Questions activeTheme={activeTheme} />
        </Box>
        <Box
          sx={{
            flexGrow: '1',
            flexBasis: '0',
            maxWidth: '35%',
          }}
        >
          <PlayersResults />
        </Box>
      </Grid>
    </Container>
  );
}

export default Game;
