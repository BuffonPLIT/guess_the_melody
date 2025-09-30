import React from 'react';
import Box from '@mui/material/Box';
import { Button, ButtonGroup, Dialog, DialogContent, DialogTitle, Slide } from '@mui/material';
import Quastion from './Question';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Quastions({ activeTheme }) {
  let [questionIndex, setIndex] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [currentQuestion, setcurrentQuestion] = React.useState({});

  const handleClickOpen = (question, index) => {
    setcurrentQuestion(question);
    setOpen(true);
    setIndex(index);
  };

  const handleClose = () => {
    setOpen(false);
    setcurrentQuestion({});
  };

  const handleNexst = () => {
    if (activeTheme.list.length <= questionIndex + 1) return;
    setIndex(++questionIndex);
    setcurrentQuestion(activeTheme.list[questionIndex]);
  };

  const handlePrevious = () => {
    if (questionIndex <= 0) return;
    setIndex(--questionIndex);
    setcurrentQuestion(activeTheme.list[questionIndex]);
  };

  return (
    <Box className="Game" sx={{ background: '#ffeeee' }}>
      <Box>
        <Box key={activeTheme?.id}>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            sx={{ display: 'flex', flexWrap: 'wrap' }}
          >
            {activeTheme?.list.map((question, index) => (
              <Button
                sx={{
                  backgroundColor: activeTheme?.color + '!important' || 'blue',
                  fontSize: 'x-large',
                  textShadow: 'rgb(0 0 0) -2px -2px 10px',
                  color: 'rgb(255, 255, 255)',
                  minWidth: '95px!important',
                  borderColor: '#ffeeee!important',
                  borderRadius: '5px!important',
                }}
                onClick={() => handleClickOpen(question, index)}
                key={question.id}
              >
                #{index + 1}
              </Button>
            ))}
          </ButtonGroup>
          <Dialog
            maxWidth={'md'}
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{`${activeTheme?.name} | question № ${questionIndex + 1}`}</DialogTitle>
            <DialogContent sx={{ minHeight: '450px', margin: 'auto' }}>
              <Quastion
                id={currentQuestion.id}
                answer={currentQuestion.answer}
                color={activeTheme?.color}
                questionsType={activeTheme?.type}
                closePopup={handleClose}
                handlePrevious={handlePrevious}
                handleNexst={handleNexst}
              >
                {currentQuestion.questionNode}
              </Quastion>
            </DialogContent>
          </Dialog>
        </Box>
      </Box>
    </Box>
  );
}

export default Quastions;
