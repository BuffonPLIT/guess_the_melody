import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Avatar, Badge, Grid } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { MUSIC_THEME_LIST } from '../constants/quastions';

function ThemeSelector({ selectThemeHandle, activeTheme }) {
  // Состояние для хранения информации о заблокированных темах
  const [blockedThemes, setBlockedThemes] = useState([]);

  const handleRightClick = (e, item) => {
    e.preventDefault(); // Предотвращаем стандартное поведение (контекстное меню)
    setBlockedThemes((prev) =>
      prev.includes(item.id) ? prev.filter((id) => id !== item.id) : [...prev, item.id]
    );
  };

  return (
    <Grid
      item
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {MUSIC_THEME_LIST.map((item) => (
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
              onClick={() => {
                if (!blockedThemes.includes(item.id)) {
                  selectThemeHandle(item);
                }
              }}
              onContextMenu={(e) => handleRightClick(e, item)} // Обработчик правой кнопки мыши
              overlap="circular"
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              badgeContent={
                <div
                  style={{
                    fontSize: 'large',
                    textShadow: 'rgb(255 255 255) -2px -2px 10px',
                    color: 'rgb(0 0 0)',
                    background:
                      'radial-gradient(circle, rgb(255 255 255 / 77%) 0%, rgb(255 255 255 / 77%) 50%, rgba(255, 255, 255, 0) 100%)',
                  }}
                >
                  {item.name}
                </div>
              }
            >
              <Avatar
                sx={{
                  width: 80,
                  height: 80,
                  boxShadow: activeTheme?.id === item.id ? `0px 0px 7px 7px ${item.color}` : null,
                  cursor: 'pointer',
                  background: blockedThemes.includes(item.id) ? 'gray' : item.color,
                  opacity: blockedThemes.includes(item.id) ? 0.5 : 1, // Полупрозрачность для заблокированных
                  pointerEvents: blockedThemes.includes(item.id) ? 'none' : 'auto', // Отключаем взаимодействие
                  '&:hover': {
                    boxShadow: blockedThemes.includes(item.id) ? null : `0px 0px 7px 7px ${item.color}`,
                  },
                }}
                alt={item.name}
              >
                <MusicNoteIcon />
              </Avatar>
            </Badge>
          </Box>
        </Box>
      ))}
    </Grid>
  );
}

export default ThemeSelector;
