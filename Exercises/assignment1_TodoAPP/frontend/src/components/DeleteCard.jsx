import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide, { SlideProps } from '@mui/material/Slide';
import { MdDeleteOutline } from "react-icons/md";
import axios from 'axios';

interface IDeleteCard {
    id: string;
    getData: () => void;

}

const Transition = React.forwardRef<HTMLDivElement, SlideProps>(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const PORT = 8000

const DeleteCard: React.FC<IDeleteCard> = ({ id, getData }) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`http://127.0.0.1:${PORT}/books/post/${id}`);
            getData()
            setOpen(false);
        } catch (error) {
            console.error("Failed to delete the book:", error);
        }
    };

    React.useEffect(() => {

    }, [

    ])

    return (
        <React.Fragment>
            <Button variant="contained" sx={{ bgcolor: "red" }} onClick={handleClickOpen}>
                <MdDeleteOutline className='text-xl' />
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Confirm Delete"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Are you sure you want to delete this book?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button sx={{ color: 'gray' }} onClick={handleClose}>Cancel</Button>
                    <Button sx={{ color: 'red' }} onClick={handleDelete}>Delete</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default DeleteCard