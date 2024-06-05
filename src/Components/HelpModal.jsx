import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IoHelpCircleOutline } from "react-icons/io5";
import '../Style/Components/HelpModal.css'

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

export default function TransitionsModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>
                <IoHelpCircleOutline className="icon" />
                <p>Let us help</p>
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box className='help-box' sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            <h3>Help</h3>
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            <h4>Get fastest service</h4>
                            <p>Our customer support is through whatsapp to feel comfortable. </p>
                            <div className="go-to-social">
                                <button>Go to Whatsapp</button>
                            </div>
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}