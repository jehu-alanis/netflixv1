import React from 'react'
import { makeStyles,Typography } from '@material-ui/core';
import Header from '../components/Header';
import avatar from '../images/avatar.png';
import Plans from '../components/Plans';
import { NetflixButton } from '../styled/styledcomponents';
import { auth } from '../firebase';
import {useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/UserSlice';


const Profile = () => {
    const classes = useStyles();
    const history = useHistory();
    const user = useSelector(selectUser);

    const signout = () =>{
      auth.signOut();
      history.push("/login")
    }

    return (
        <div className={classes.root}>
        <Header></Header>
            <Typography variant='h3'>Edit profile</Typography>
            <div className={classes.info}>
             <img src={avatar} alt='avatar'/>
                <div className={classes.details}>
                  <div className={classes.plans}>
                     <Typography variant="h6">{user.email} </Typography>
                     <Typography className={classes.plansText} variant="h5" gutterBottom>plans</Typography>
                     <Plans cost={7.99}>Netflix Standar $7.99</Plans>
                     <Plans cost={11.99}>Netflix Basic $11.99</Plans>
                     <Plans  wide="medium" color="gray" cost={15.99}>Netflix Premiun $15.99</Plans>
                     <NetflixButton  onClick={signout} wide="fullWidth">Sign Out</NetflixButton>
                  </div>
                </div>
            </div>
            
        </div>
    )
}

const useStyles = makeStyles((theme) =>({
    root: {
     color: "#fff",
     
     display: "flex",
     flexDirection: "column",
     alignItems: "center"
    },
    info: {
      width: "80%",
      display: "flex",
      "& img":{
        height:"100px",
        [theme.breakpoints.down("xs")]:{
          display: "none"
        }
      },
    },
    details:{
       width: "100%",
       marginLeft: theme.spacing(3),
       "& h6":{
         backgroundColor: "#aaa",
         padding: theme.spacing(1),
         marginBottom: theme.spacing(1),
         fontSize: "18px",
       }
    },
    plans:{
      width: "100%",
    },
    plansText:{
      borderBottom: "1px solid lightgray",
       
    }

  }));

export default Profile
