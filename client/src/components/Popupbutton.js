import React from 'react'
import { ButtonGroup,Button } from '@mui/material';


import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const Popupbutton = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <div> 
      
  <div>
  <div className="row">
  <div className="col-sm-3" style={{Color: 'yellow'}}>
      <Button variant="outlined" onClick={handleClickOpen}>
      <Button variant="contained" color="success">
 +
</Button>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{backgroundColor:"lightblue" ,color:"red"}}>Collection</DialogTitle>
        <DialogContent>
         
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter  Symbol"
            type="text"
            fullWidth
            variant="standard"
          />
         
            <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter Description"
            type="text"
            fullWidth
            variant="standard"
          />
            <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter  Short Ur"
            type="text"
            fullWidth
            variant="standard"
          />
            <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Fungy.com"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleClose}> Create Collection</Button>
        </DialogActions>
      </Dialog>

    </div>
    <div className="col-sm-3" style={{Color: 'orange'}}><Button variant="contained" color="success">
 Fungy
 
</Button></div>
    </div>
    </div>
  </div>
  )
}

export default Popupbutton