import React ,{useState, useEffect}from 'react'
import { Link } from 'react-router-dom'
import  classes from './Home.module.css'
import logo from './Logo.svg'
import tomato from './tomato.svg'
import imdb from './imdb.svg'
import play from './Play.svg'
import search from './Search.svg'
import menu from './Menu.svg'
import fac from './facebook.svg'
import twi from './twitter.svg'
import ins from './instagram.svg'
import you from './youtube.svg'
import Card from '../Card/Card'
const Home =()=>{
  const [movies, setMovies]= useState([])
  const [movieData, setMovieData]= useState([])
  const [error, setError]= useState(null)
  const [loading,setLoading]=useState(false)
  const [val,setVal]= useState('')
  const [titles,setTitles]= useState([])
    //const API_KEY='5e85b3031c206b402313074754be8bae'//https://api.themoviedb.org/3/movie/top_rated// 
   
   // Define a mapping of genre IDs to names
   const genreMap= {
    28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary',  18: 'Drama',
    10751: 'Family',14: 'Fantasy',36: 'History',27: 'Horror',10402: 'Music',9648: 'Mystery',10749: 'Romance',878: 'Science Fiction',10770: 'TV Movie',
    53: 'Thriller', 10752: 'War', 37: 'Western',};

  // Map genre IDs to genre names


const fetchMovie= async ()=>{
    setLoading(true)
   try{
    const data = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=5e85b3031c206b402313074754be8bae`);
  if(!data.ok){
     throw  new Error('Something went wrong!')
  }
  const datajson= await data.json();
  const t= datajson.results.map((data)=>{ return data.title})
   const  movie1= datajson.results.map((data, index)=>{
  if(index<10){ return data}
  else{
    return ''
  }
     })
   setTitles(()=>{
    return [...t]
   })
    setMovies(()=>{
        return [...movie1]
    })
setMovieData(()=>{
    return [...datajson.results]
})
setLoading(false)

   }
   catch(error){
    setError(error.message)
  console.log(error.message)
  setLoading(false)

   }
}
useEffect(()=>{
    fetchMovie()
    
}, [])
const Change=(e)=>{
  setVal(e.target.value)
  if(e.target.value===''){
    const  movie2= movieData.map((data, index)=>{
      if(index<10){ return data}
      else{
        return ''
      }
         })
         setMovies(()=>{
          return [...movie2]
         })
  }
 
 }
 const Search=()=>{
    console.log(titles)
    const mam=titles.map((data)=>{
        if(data.toLowerCase().indexOf(val.toLowerCase())>=0){
          console.log(data)
          return data
        }
      
    })
    const filter1=movieData.filter((data)=>{return mam.indexOf(data.title)>=0 })
    
    console.log(filter1)
 setMovies(()=>{
  return [...filter1]
 })
 
 }
const str='https://image.tmdb.org/t/p/original/tmU7GeKVybMWFButWEGl2M4GeiP.jpg'

const title='The Godfather'
const overview=`Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.`
const voteavg= 8.7
//return <Card key={index} voteavg={data['vote_average']}  overview={data.overview} releaseDate={data['release_date']}/> John Wick is on the run after killing a member of the international assassin's guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.
const SeeMore=()=>{
   const  movie2= movieData.map((data, index)=>{
        if(index>=10){ return data}
        else{
          return ''
        }
           })
           setMovies(()=>{
            return [...movie2]
           })
}
const SeeMore1=()=>{
    const  movie2= movieData.map((data, index)=>{
         if(index<10){ return data}
         else{
           return ''
         }
            })
            setMovies(()=>{
             return [...movie2]
            })
 }
return <React.Fragment>
{loading&&<p className='loading'>Loading...</p>}
{!loading && error&& <p className='error'>{error}</p>}
{!loading&&!error&&<div><header className={classes.header} style={{backgroundImage:`url(${str})`}}>
<div className={classes.div1}>
<div className={classes.mm}>
<img src={logo} alt='logo' className={classes.img}/>
<div className={classes.div3an}>
<p className={classes.p3}>Sign in</p>
    <img src={menu} alt='menu' className={classes.img3}/>
</div>
</div>
<div className={classes.div2an}>
<input type='text' onChange={Change} value={val}  placeholder='What do you want to watch?' className={classes.input}/>
<img src={search} alt='search' onClick={Search}  className={classes.img2}/>
</div>
<p className={classes.p}>{title}</p>

<div className={classes.div1a}>
<div className={classes.div1b}>
    <img src={imdb}  className={classes.img1} alt='imdb'/><p className={classes.p1} >{voteavg}</p>
</div>
<div className={classes.div1b}>
<img src={tomato}  className={classes.img1} alt='tomato'/><p className={classes.p1} >{Math.round(voteavg*10)}%</p>
</div>
 </div> 
 <p className={classes.p2}>{overview}</p>
 <button type='button' className={classes.btn}>
<img src={play} alt='play'/>
WATCH TRAILER
</button>

</div>
<div className={classes.div2}>
<div className={classes.div2a}>
<input type='text'   onChange={Change} value={val}  placeholder='What do you want to watch?' className={classes.input}/>
<img src={search} alt='search' onClick={Search} className={classes.img2}/>
</div>
<div></div>
</div>
<div className={classes.div3}>
<div className={classes.div3a}>
<p className={classes.p3}>Sign in</p>
    <img src={menu} alt='menu' className={classes.img3}/>
</div>


</div>

</header>

<main className={classes.main}>
<div className={classes.maindiv}>
    <p className={classes.mainp} onClick={SeeMore1}>Featured Movie</p>
    <p onClick={SeeMore} className={classes.mainp1}>See more{'>'}</p>
</div>
<section className={classes.gridsec}>
   {
   movies.map((data, index)=>{
    if(data===''){
        return 
    }
    else{
        return <Card key={index} voteavg={data['vote_average']} id={data.id} genreid1={genreMap[data.genre_ids[0]]} genreid2={genreMap[data.genre_ids[1]]}  posterPath={data['poster_path']} title={data.title} overview={data.overview} releaseDate={data['release_date']}/>

    }
   })
   
   }
</section>
</main>





<footer className={classes.footer}>
<section className={classes.sec}>
<Link to='https://twitter.com/chibuikeikeoko5?t=ljzR1Gor8-UPNuPuSou3cw&s=08'  className={classes.a}><img src={fac} alt='facebook' className={classes.img4}/></Link>
<Link to='https://twitter.com/chibuikeikeoko5?t=ljzR1Gor8-UPNuPuSou3cw&s=08'  className={classes.a}><img src={ins} alt='facebook' className={classes.img4}/></Link>
<Link to='https://twitter.com/chibuikeikeoko5?t=ljzR1Gor8-UPNuPuSou3cw&s=08'  className={classes.a}><img src={twi} alt='facebook' className={classes.img4}/></Link>
<Link to='https://twitter.com/chibuikeikeoko5?t=ljzR1Gor8-UPNuPuSou3cw&s=08'  className={classes.a}><img src={you} alt='facebook' className={classes.img4}/></Link>
</section>
<div className={classes.footerdiv}>
    <p className={classes.footerp}>Conditions of use</p>
    <p className={classes.footerp}>Privacy & Policy</p>
    <p className={classes.footerp}>Press Room</p>
</div>
<p className={classes.footerp1}>© 2021 MovieBox by Adriana Eka Prayudha</p>
</footer>
</div>}
    </React.Fragment>
}
export default Home