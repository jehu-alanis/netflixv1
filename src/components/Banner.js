import React,{useEffect, useState} from 'react'
import { makeStyles, Typography, Button } from '@material-ui/core';
import axios from 'axios';
import requests from '../Requests';

const Banner = () => {
  const classes = useStyles();
    const [movie,setMovie] = useState ([ ]);
    
    
    useEffect(() => {
      const fetchData= async () => {
        const request = await axios.get(requests.fetchNetflixOriginals);
        const ramdon = Math.floor(Math.random()*request.data.results.length - 1 );
        setMovie(
          request.data.results[ramdon    
        ]
        );
        return request
      };
      fetchData();
    }, [])

    if (!movie){
      return null
    }

 
    return (
        <div className={classes.root} style={{
          backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
          position: "relative",
          height: "440px",
          objectFit: "contain",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color:"#fff",
          
        }}>
            <div className={classes.content}>
               <Typography variant="h2" component="h1" className={classes.title}>
                {movie.title || movie.name || movie.original_name}
               </Typography>
               <div className={classes.buttons}>
               <Button>Play</Button>
               <Button>My list</Button>
               </div>
               
            </div>
            <Typography style={{ wordWrap: "reak-word"}} variant="h6" className={classes.description} >
            {
              movie.overview
            }
                 
            </Typography>
            <div className={classes.fadeBottom}>
            </div>
        </div>
    )
}
const useStyles = makeStyles((theme) =>({
    root: {
      
      position: "relative",
      height: "400px",
      objectFit: "contain",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color:"#fff",
    },
    buttons:{
      "& button":{
        left:"3rem",
      
        position: "relative",
       marginTop: "10rem",
        cursor: "pointer",
        color: "#fff",
        fontWeight: 700,
        borderRadius: "5px",
        padding: theme.spacing(1, 4, 1, 4),
        marginRight: "3rem",
        backgroundColor: "rgba(51,51,51,0.5)",
      },
      "& button:hover":{
        color: "#000",
        backgroundColor: "#e6e6e6",
      }
    },
    description:{
      left:"3rem",
      
      position: "absolute",
      marginTop: "1rem",
      maxWidth: "120vh"
      
    },
    title:{
      left:"3rem",
      
      position: "absolute",
      marginTop: "5rem",
    },
    fadeBottom:{
     position: "absolute",
     top: "30vh",
     bottom: 0,
     left: 0,
     right: 0,
     zIndex: 99,
     backgroundImage:
     "linear-gradient(180deg, transparent, rgba(37,37,37,0.61), #111)",
    },
  }));
export default Banner
