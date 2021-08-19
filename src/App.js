import { useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {makeStyles} from '@material-ui/core';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Checkout from './components/checkout/Checkout';
import Home from './Pages/Home';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/UserSlice';




function App() {
  const user = useSelector(selectUser);
  const classes = useStyles();
   const dispatch = useDispatch();

  useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((userAuth) => {
     if (userAuth){
         dispatch(login({
           uid: userAuth.uid,
           email: userAuth.email
         }))
     } else {
       dispatch(logout)
     }
   })
   return unsubscribe;
  }, [dispatch])  

  return (
    <div className={classes.root}>
      <Router>{
        !user ? (<Login/>) :(

            <Switch>
            <Route path='/login'>
            <Login/>
            </Route>
            <Route path='/profile'>
            <Profile/>
            </Route>
            <Route path='/checkout'>
            <Checkout/>
            </Route>
            <Route path='/'>
            <Home/>
            </Route>
          </Switch>
        )
      }
          
        
      </Router>
    
      </div>
    
  );
}

const useStyles = makeStyles((theme) =>({
  root: {
    backgroundColor: '#111',
    minHeight: '100vh',
  },
}));
export default App;
