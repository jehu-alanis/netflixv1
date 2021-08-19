import React from 'react'
import { Typography,makeStyles } from '@material-ui/core';
import { NetflixButton } from '../styled/styledcomponents';
import { useDispatch } from 'react-redux';
import { setPrice } from '../features/PriceSlice';
import {useHistory} from 'react-router-dom';

const Plans = ({cost, children, color, wide}) => {
    const classes = useStyles();
     const dispatch = useDispatch();
     const history = useHistory();
   
     const handleclick = (cost) =>{
        dispatch (setPrice(cost))
        history.push("/checkout")

    }
    return (
        <div className={classes.root}>
            <Typography className={classes.standar} variant='h5'>
            {children}
            </Typography> 
            <NetflixButton 
            color={color} 
            wide={wide}
            onClick={()=> handleclick(cost)}
            >Subscribe
            </NetflixButton>
        </div>
    )
}
const useStyles = makeStyles((theme) =>({
    root: {
     marginTop: theme.spacing(3),
     marginBottom: theme.spacing(3),
     display: "flex",
     justifyContent: "space-between",
     alignItems:"center",
     "& button":{
       marginBottom: theme.spacing(2),
     }
    },
    standar:{
      fontSize: "1.2rem",
    }
  }));

export default Plans
