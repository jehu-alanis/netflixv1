import React from 'react'
import { makeStyles } from '@material-ui/core';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Row from '../components/Row';
import requests from '../Requests';

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header/>
            <Banner/>
            <Row title="Netflix Originals" 
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
            />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
            <Row title="Actions Moivies" fetchUrl={requests.fetchActionMovies}/>
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
            <Row title="Trending" fetchUrl={requests.fetchTrending}/>
            
        </div>
    )
}


const useStyles = makeStyles((theme) =>({
    root: {
      backgroundColor: '#111',
      minHeight: '100vh',
    },
  }));

export default Home
