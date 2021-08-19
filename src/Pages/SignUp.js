import {useState, React} from 'react';
import { Typography,makeStyles } from '@material-ui/core';
import { auth } from '../firebase';
import {useHistory} from 'react-router-dom';
import { NetflixInput, NetflixButton } from '../styled/styledcomponents';

const SignUp = () => {
    const classes = useStyles();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
 
    const SignIn = (e) => {
      e.preventDefault();
      auth.signInWithEmailAndPassword(email, password)
      .then((authUser) => history.push("/"))
        .catch((err) => alert (err.message))
    }

    const Register = (e) => {
     e.preventDefault();
     auth.createUserWithEmailAndPassword(email, password)
     .then((authUser) => history.push("/"))
       .catch((err) => alert (err.message))
    }
    return (
        <div className={classes.root}>
            <Typography variant='h5' align='left'>  Sign in</Typography>
            <form className={classes.form}>
            <NetflixInput  
            type="email"
            value={email} 
            onChange={(e)=>setEmail(e.target.value)} 
            placeholder="Email" 
            className={classes.email}
            />           
            <NetflixInput 
            type="password"
            value={password} 
            onChange={(e)=>setPassword(e.target.value)} 
            placeholder="Password"
            className={classes.password}
            />
            <NetflixButton onClick={SignIn}
            type="submit" 
            wide={"medium"} 
            radius
            >Sign in</NetflixButton>
            <Typography variant="subtitle2">
               New to netflix ? {" "}
               <span className={classes.signupLink}
               onClick={Register}>
                Sign Up now.{" "}
               </span>
            </Typography>           
             </form>
        </div>
    )
}
const useStyles = makeStyles((theme) =>({
    root: {
      maxWidth: "350px",
      width: "20rem",
      height: "25rem",
      background: "rgba(0,0,0,0.65)",
      display: "flex",
      justifyContent: "space-evenly",
      flexDirection: "column",
      alignItems: "center",
      "& h5": {
        marginTop: theme.spacing(2),
        width: "70%",
      }
    },
    form:{
      width: "80%",
    },
    email: {
      marginBottom: theme.spacing(2),
    },
    password:{
      marginBottom: theme.spacing(4),
    },
    signupLink:{
      color: "#fff",
      cursor: "pointer",
      "&:hover":{
        textDecoration: "underline"
      }
    }
  }));

export default SignUp
