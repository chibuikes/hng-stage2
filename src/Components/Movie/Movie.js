import React  from "react";
import classes from "./Movie.module.css";
import { useParams,Link  } from "react-router-dom";
import logo from "./Logo.svg";
import home from "./Home.svg";
import cal from "./Calendar.svg";
import tv from "./TV Show.svg";
import mp from "./Movie Projector.svg";
import logout from "./Logout.svg";
import list from "./List.svg";
import tt from "./Two Tickets.svg";
import listw from "./List-white.png";
import dark from "./image-about-dark.jpg";
import star from "./2107957.png";
import { useEffect, useState } from "react";
const Movie = () => {
  const params= useParams()
  const [arr, setArr]= useState(JSON.parse(localStorage.getItem('car')))
  const [director, setDirector]= useState({})
  const [writers, setWriters]=useState([])
  const [loading, setLoading]= useState(true)
  const [error,setError]= useState(null)
  const [str, setStr]= useState(dark)
  const [str1, setStr1]= useState(dark)
  const [str2, setStr2]= useState(dark)
  const [str3, setStr3]= useState(dark)
const API_KEY='5e85b3031c206b402313074754be8bae'
const id= params.id
const API_URL=`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=credits`
 console.log(id)
 const fetchDetails= async()=>{
  setLoading(true)

  try{
    const data = await fetch(`${API_URL}`);
    if(!data.ok){
      throw new Error('Something went wrong')
    }
    const datajson= await data.json();
    console.log(datajson)
    const dataj= JSON.stringify(datajson)
    localStorage.setItem( 'car',dataj)
    setArr((val)=>{
      return val={...datajson}
     })
  const direct=arr.credits?arr.credits.crew.filter((data)=>{return data.job==='Director' }):['John']
    const direct1=datajson.credits?datajson.credits.crew.filter((data)=>{return data.known_for_department==='Writing' }):['Carmen','Lilian','Jenny']
    setStr((val)=>{ 
      
      return val= 'https://image.tmdb.org/t/p/original'+datajson.backdrop_path})
    setStr1((val)=>{ return val= 'https://image.tmdb.org/t/p/original'+datajson.poster_path})
    setStr2((val)=>{
      if(datajson.belongs_to_collection){
        return val= 'https://image.tmdb.org/t/p/original'+datajson.belongs_to_collection.poster_path
      }
      return dark
    })
    setStr3((val)=>{ 
       if(datajson.belongs_to_collection){
        return val= 'https://image.tmdb.org/t/p/original'+datajson.belongs_to_collection.backdrop_path
       }
      return dark

    })

   setDirector(()=>{
    return [...direct]
   })
   setWriters(()=>{
    return [...direct1]
   })
    setLoading(false)
  }
  catch(error){
    setError(error.message)
    setLoading(false)


  }
 }


 useEffect(()=>{
   fetchDetails()
 },[])

 



 

  return (
    <React.Fragment>
      {loading&&<p className='loading'>Loading...</p>}
    {!loading && error&& <p className='error'>{error}</p>}
      {  !loading&& !error&&<section className={classes.sec}>
        <div className={classes.div1}>
          <div className={classes.flex}>
          <Link to='/home'>
          <img src={logo} className={classes.img} alt="logo" />
            </Link> 
          </div>

          <li className={classes.li}>
            <img src={home} alt="home" className={classes.img2} />
            <p className={classes.p2}>Home</p>
          </li>

          <li className={classes.li1}>
            <img src={mp} alt="mp" className={classes.img2} />
            <p className={classes.p21}>Movie</p>
          </li>

          <li className={classes.li}>
            <img src={tv} alt="tv" className={classes.img2} />
            <p className={classes.p2}>TV Series</p>
          </li>

          <li className={classes.li}>
            <img src={cal} alt="calender" className={classes.img2} />
            <p className={classes.p2}>Upcoming</p>
          </li>

          <div className={classes.div1a}>
            <p className={classes.p3}>
              PLay movie quizzes and earn free tickets
            </p>
            <p className={classes.p4}>50k people are playing now </p>
            <p className={classes.p5}>Start playing</p>
          </div>

          <div className={classes.div1b}>
            <img src={logout} alt="logout" />
            <p className={classes.p9}>Log out</p>
          </div>
        </div>
        <div className={classes.div2}>
          <div className={classes.div3}  style={{backgroundImage:`url(${str})`}}></div>
          <div className={classes.div4}>
            <div className={classes.div5}>
              <div className={classes.div51}>
                <div className={classes.p10}>
                <p data-testid='movie-title' className={classes.inlinet}> {arr.title}</p> · <p className={classes.inline} data-testid='movie-release-date'>{arr.release_date.split('').map((data,index)=>{if(index<4){return data}}).join('')}</p> · <p style={{display:'inline'}}>PG-13</p> · <p data-testid='movie-runtime' className={classes.inline}>{arr.runtime}m</p>
                </div>{" "}
             
<div className={classes.row}>
{arr.genres.map((data)=>{return  <p className={classes.p11}>{data.name}</p>})}

</div>
             
              </div>
              <p className={classes.div5p} data-testid='movie-overview'>
                    {arr.overview}
              </p>
              <div className={classes.div52}>
                <p className={classes.div5p1}> Director: </p>
                <p className={classes.div5p2}> {director[0].name
                }
                </p>
              </div>
              <div className={classes.div52}>
                <p className={classes.div5p1}>Writers: </p>
                <p className={classes.div5p2}>
                  {writers.map((data)=>{return data.name+', '})}
                </p>
              </div>
              <div className={classes.div52}>
                <p className={classes.div5p1}>Budget: </p>
                <p className={classes.div5p2}>
                  ${arr.budget}
                 
                </p>
              </div>
              <div className={classes.div53}>
                <p className={classes.p12}>Top rated movie #65</p>{" "}
                <select name="nominations" className={classes.select}>
                  <option value="default">Awards 9 nomination</option>
                  <option value="1st nomination">1st nomination</option>
                  <option value="2nd nomination">2nd nomination</option>
                  <option value="3rd nomination">3rd nomination</option>
                  <option value="4th nomination">4th nomination</option>
                  <option value="5th nomination">5th nomination</option>
                  <option value="6th nomination">6th nomination</option>
                  <option value="7th nomination">7th nomination</option>
                  <option value="8th nomination">8th nomination</option>
                  <option value="9th nomination">9th nomination</option>
                </select>
              </div>
            </div>
            <div className={classes.div6}>
              <div className={classes.div60}>
                <img src={star} alt="star" className={classes.star} />{" "}
                <p className={classes.dp}>{arr.vote_average.toFixed(1)
                }</p>{" "}
                <p className={classes.dp1}> | {Math.round(arr.vote_count/1000) 
                }k</p>
              </div>
              <div className={classes.div61}>
                <img src={tt} alt="two tickets" className={classes.img3} />
                <p className={classes.div6p}> See Showtimes</p>
              </div>

              <div className={classes.div62}>
                <img src={list} alt="list" className={classes.img3} />
                <p className={classes.div6p1}> More Watch Options</p>
              </div>
              <div className={classes.grid}>
                <div
                  className={classes.img4}
                  style={{
                    backgroundImage: `url('${str2}')`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div
                  style={{
                    backgroundImage: `url('${str1}')`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div
                  className={classes.img5}
                  style={{
                    backgroundImage: `url('${str3}')`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className={classes.post}>
                  <img src={listw} alt="list-white" />
                  <p className={classes.p123}>
                    {" "}
                    THe Best Movies and Shows September
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>}
    </React.Fragment>
  );
};
export default Movie;
