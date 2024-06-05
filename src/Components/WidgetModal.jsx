import * as React from 'react';7
import PropTypes from 'prop-types';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSpring, animated } from '@react-spring/web';
import { FaWandMagicSparkles } from "react-icons/fa6";
import '../Style/Components/WidgetModal.css';
import { Link } from 'react-router-dom';


const Fade = React.forwardRef(function Fade(props, ref) {
    const {
        children,
        in: open,
        onClick,
        onEnter,
        onExited,
        ownerState,
        ...other
    } = props;

    const style = useSpring({

        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter(null, true);
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited(null, true);
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {React.cloneElement(children, { onClick })}
        </animated.div>
    );
});

Fade.propTypes = {
    children: PropTypes.element.isRequired,
    in: PropTypes.bool,
    onClick: PropTypes.any,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
    ownerState: PropTypes.any,
};

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

export default function SpringModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button className='widget' onClick={handleOpen}>
                <FaWandMagicSparkles />
                <p>widget</p>
            </Button>
            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        TransitionComponent: Fade,
                    },
                }}
            >
                <Fade in={open}>
                    <Box className='modal-box' sx={style}>
                        <Typography id="spring-modal-title" variant="h6" component="h2">
                            <h3>Widget</h3>
                        </Typography>
                        <Typography id="spring-modal-description" sx={{ mt: 2 }}>
                            <h4>Make your traffic worth</h4>
                            <p>To embed widget copy code below and paste into the page. <Link>Learn more</Link></p>
                            <div className="copy">
                                <button>
                                    <FaWandMagicSparkles />
                                    Copy
                                </button>
                            </div>
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}