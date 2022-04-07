import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { FormControl,InputLabel,Input,FormHelperText } from '@mui/material';
import Grid from '@mui/material/Grid';
import { ButtonGroup,Button } from '@mui/material';
import Box from '@mui/material/Box';
// import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';
import '../App.css';
import { display } from '@mui/system';
import Popupbutton from './Popupbutton';



export class MainBody extends Component {
 
  // const { classes } = this.props


  render() {
    return (
    <>
   
    <Header/>
    <div  style={{backgroundColor:"lightblue"}}>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    <Grid  xs={6} >
  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="../image/technical-support-illustration-concept-modern-260nw-1329294863.webp"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
         UPLOAD FILES
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  
  </Grid>
 
  <Grid  xs={6} >
  <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="../image/technical-support-center-customer-service-internet-business-technology-concept-technical-support-center-customer-service-internet-102190919.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            PREVIEW
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>

</Grid>



<Grid  xs={6} >
  <Card sx={{ maxWidth: 345 }}  style={{padding:"20px",margin:"100",display: "flex",justifyContent:"center",alignItems:"center"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="../image/communication-stock-illustrations_csp0655695.webp"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
         UPLOADS COVER
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
  <div  style={{backgroundColor:"lightblue"}}>
  <h1 style={{color: "red" ,textAlign:"left"}}> Choose collection </h1>
 <div>


</div>

  <div>
    <Popupbutton/>
    
    </div>    
 
<form >
  <div className="col-sm-6">
  <label htmlFor="text">Title</label>
    <input type="email" className="form-control" placeholder="Enter  Title" id="email" />

  </div>
  <div className="col-sm-6">
  <label htmlFor="text"> Decription</label>
    <input type="text" className="form-control" placeholder="Enter description" id="pwd" />
   
  </div>
  <div className="col-sm-6">
    <label htmlFor="pwd"> Royalities </label>
    <input type="text" className="form-control" placeholder="Enter  Royalities" id="pwd" />
  </div>
 
  <button type="submit" className="btn btn-primary"> Hide Advance setting</button>
  <div className="col-sm-3">
    <label htmlFor="pwd">  Properties  </label>
 
  <div className="container">
  <div className="row -sm-6">
  <div className="col-sm-6">
    <input type="text" className="form-control" placeholder="Enter  properties" id="pwd" />
    </div>
    <div className="col-sm-6">
    <input type="text" className="form-control" placeholder="Enter  properties" id="pwd" />
    </div>
  </div>
  </div>
  </div>
  <button type="submit" className="btn btn-success"> Create Item </button>
</form>


</div>
</div>
    <Footer/>
    </>
    )
  }
}

export default MainBody