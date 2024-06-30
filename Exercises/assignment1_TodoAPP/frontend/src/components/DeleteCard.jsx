import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import MdDeleteOutline from 'react-icons/md';
import axios from 'axios';

const Transition = React.forwardRef((props, ref) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PORT = 8000; // API bağlantı noktası

const DeleteCard = ({ id, getData }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://127.0.0.1:${PORT}/books/post/${id}`);
      getData(); // Verileri tekrar yükle
      setOpen(false);
    } catch (error) {
      console.error('Kitap silinemedi:', error);
    }
  };

  return (
    <React.Fragment>
      <Button variant="contained" sx={{ bgColor: 'red' }} onClick={handleClickOpen}>
        <MdDeleteOutline className="text-xl" />
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Silmeyi Onayla</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Bu kitabı silmek istediğinize emin misiniz?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button sx={{ color: 'gray' }} onClick={handleClose}>İptal</Button>
          <Button sx={{ color: 'red' }} onClick={handleDelete}>Sil</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default DeleteCard;