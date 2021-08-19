import React, { useEffect,useState } from 'react'
import { makeStyles, AppBar, Toolbar, Avatar, IconButton } from '@material-ui/core';
import {useHistory} from 'react-router-dom';
import logo from '../images/nt.png';
import avatar from '../images/avatar.png';

const Header = () => {
    const classes = useStyles();
    const [show, setShow] = useState(false);
    const history = useHistory();

    const hideHeader =() =>{
      if (window.scrollY > 100){
        setShow(true)
      } else {
        setShow(false)
      }
    }

    useEffect(()=> {
      window.addEventListener("scroll", hideHeader);
      return () => window.removeEventListener("scroll",hideHeader);
    },[])

    return (
        <AppBar position="sticky" elevation={0} className={ `${classes.root} ${show && classes.transparent}`} >
          <Toolbar className={classes.toolbar}>
             <IconButton onClick={() => history.push("/")}>
             <img src={logo} alt="logo"  className={classes.logo} />
             </IconButton>
              
              <Avatar variant="square" style={{cursor: "pointer"}}
              src={avatar}
                 onClick={() => history.push("/profile")}
              />
          </Toolbar>
          
        </AppBar>
    )
}
const useStyles = makeStyles((theme) =>({
  root:{
        backgroundColor: '#111',
        top: 0,
        right:0,
        left:0,
        width: "100%",
  },
  logo:{
       width: "100px",
       cursor: "pointer",
    },
    transparent:{
      backgroundColor: 'transparent',
      
      
   },
   toolbar:{
     display: "flex",
     justifyContent: "space-between",
      alignItems: "center", 

   }
  }));

export default Header
