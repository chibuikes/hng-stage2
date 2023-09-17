import './App.css';
//import Card from './Components/Card/Card';
import {Routes, Route, useParams} from 'react-router-dom'
import React ,{Suspense}from 'react'

function App() {
 const Home =React.lazy(()=>{return import('./Components/Home/Home')})
 const Movie= React.lazy(()=>{return import('./Components/Movie/Movie')})
const params= useParams()
  return (
    <div className="App">
   <Suspense fallback={<p className='loading'>Loading...</p>}>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/movie/:id' element={<Movie key={params.id}/>}/>
    <Route path='*' element={<Home/>}/>
=======

  
  


   </Routes>
   </Suspense>
  

      {//<Movie/>
//<Card/>
}
    </div>
  );
}

export default App;
