import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    const theme = createTheme({
        palette: {
        primary: {
            // Purple and green play nicely together.
            main: '#301E67',
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
        },
        },
    });

  return (
    <div className='modalBtn'>
      <Button onClick={handleOpen} theme={theme} size='large' variant='contained'>Choose Event Type</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Choose a type
          </Typography>
          <Button variant='contained' size='small'>Event</Button>
        </Box>
      </Modal>
    </div>
  );
}