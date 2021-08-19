import { useState, } from 'react'
import { makeStyles,Typography } from '@material-ui/core';
import banner from '../images/Banner.jpg';
import logo from '../images/nt.png';
import { NetflixButton, NetflixInput } from '../styled/styledcomponents';
import SignUp from '../Pages/SignUp';

const Login = () => {
    const classes = useStyles();
    const [signIn, setSignIn] = useState(true);



   
    return (
        <div className={classes.root}>
           <img src={logo} className={classes.logo} alt='logo' />
            <NetflixButton className={classes.session}  >Iniciar sesion</NetflixButton>
            <div className={classes.info}>
            {
              signIn ? ( <SignUp/> ) :(
                <>
                <Typography variant="h4" gutterBottom>
                Peliculas y Series ilimitadas
                </Typography>
            <Typography variant="h5" gutterBottom>
                Watch anywhere. Cancel at any time 
                </Typography>
            <Typography variant="h5" gutterBottom>
                Ready to watch ? Enter whit you email to create or restart your membership
                </Typography>
                <div className={classes.inputBlock}>
                <NetflixInput placeholder="Email addres"/>
                  
              <NetflixButton > Get Started</NetflixButton>
                    
                </div>
                </>
              )
            }
                
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) =>({
    root: {
      position: "relative",
      height:"100vh",
      backgroundImage: `url(${banner})`,
      objectFit: "contain",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    logo: {
      position: "fixed",
      top: 0,
      left: 20,
      width: "150px",
      cursor: "pointer",
    },
    session:{
      position: "fixed",
      zIndex: 15,
      right: 20,
      top:20,
    },
    info:{
      color: "#fff",
      zIndex: 15,
      textAling: "center",
      "& h4":{
        fontWeight: 800,
      },
      "& h5":{
        fontWeight: 400,
      },
    }
  }));

export default Login
