import React,{useState,useEffect} from 'react'
import { makeStyles, Typography } from '@material-ui/core';
import axios from 'axios';

const Row = ({title, fetchUrl, isLargeRow}) => {
  
  const [movies,setMovies] = useState ([ ]);
  
    const classes = useStyles();
    const base_url= "https://image.tmdb.org/t/p/original/";
   

    useEffect(() => {
      const fetchData= async () => {
        const request = await axios.get(fetchUrl)
        setMovies(request.data.results)
        console.log(request)
        return request
      };
      fetchData();
    }, [fetchUrl])

    if(!movies){
      return null;
    }

    if(!base_url){
      return null;
    }

    return (
        <div className={classes.root}>
            <Typography variant ='h4'>{title}</Typography>
            <div className={classes.posters}>
             {
               movies.map((movie) => 
                 
                 (( isLargeRow && movie.poster_path ) ||
                 ( !isLargeRow && movie.backdrop_path )) && (
                   <img 
                   className={`${classes.poster} ${
                     isLargeRow && classes.posterLarge
                   }`}
                   key={movie.id}
                   src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                   alt={movie.name}
                   />
                 )
               )
             }
            </div>
        </div>
    )
}
const useStyles = makeStyles((theme) =>({
    root: {
      color:"#fff",
      marginLeft: theme.spacing(4),
    },
    posters:{
        display: "flex",
        overflowY:"hidden",
        overflowX: "scroll",
        "&::-webkit-scrollbar":{
          display:"none",
        }
    },
    poster:{
      maxHeight: "12rem",
      
      objectFit: "contain",
      marginRight: theme.spacing(1),
      transition: "transform 450ms",
      "&:hover": {
        transform: "scale(1.1)"
      },

    },
    posterLarge:{
      maxHeight: "15rem",
      "&:hover": {
        transform: "scale(1.15)"
      },
    },
  }));

export default Row
