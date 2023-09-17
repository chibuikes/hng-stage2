import React from "react";
import classes from './Card.module.css'
import {Link } from 'react-router-dom'
import fav from './Favorite.svg'
import imdb from './imdb.svg'
import tomato from './tomato.svg'
import dark from './image-about-dark.jpg'

const Card=(props)=>{
  const str=props.posterPath?'https://image.tmdb.org/t/p/original'+props.posterPath:dark
  
    return <Link  data-testid='movie-card' className={classes.div} to={`/movie/${props.id}`}>
    <div className={classes.div1}  data-testid='movie-poster' style={{backgroundImage:`url(${str})`}}>
 <img src={fav} alt='favorite' className={classes.img}/>

    </div>
  <div className={classes.div2}>
    <p className={classes.p } data-testid='movie-release-date'>{props.releaseDate}</p>
    <p className={classes.p1} data-testid='movie-title'>{props.title}</p>
  <div className={classes.div2a}>
  <div className={classes.div2b}>
    <img src={imdb} alt='imdb' className={classes.img1}/>
    <p className={classes.p3}> {props.voteavg}</p>
  </div>
  <div className={classes.div2b}>
  <img src={tomato} alt='tomato' className={classes.img1}/>
    <p className={classes.p3}> 97%</p>
  </div>
    </div>
    <p className={classes.p2}>{props.genreid1}, {props.genreid2} </p>
  </div>
    
  </Link>
}
export default Card