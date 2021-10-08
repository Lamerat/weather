import React, {forwardRef} from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { dialogPrototype } from '../../common/const';


const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const InfoDialog = ({text, closeFunc}) => {
  return (
    <Dialog
      open={true}
      fullWidth
      TransitionComponent={Transition}
      keepMounted
      onClose={() => closeFunc(dialogPrototype)}
    >
      <DialogTitle>Error</DialogTitle>
      <DialogContent>
        <DialogContentText>{text}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant='contained' color='secondary' onClick={() => closeFunc(dialogPrototype)}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}

export default InfoDialog;