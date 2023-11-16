                             
import './App.css';

//for funtion based we use rfc us se pehle ES& react redux daal lena us se he chalegi ye extension
//use react router  version 5.3.4 to support functionality
//use this command npm install react-router-dom@5.3.4

import React, { useState } from 'react'
import Navbar from './componets/Navbar';

import News from './componets/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
const App =()=> {
 

  const [progress, setProgress] = useState(0);
 
 
  
    return (

      <>
      <div style={{ 
      backgroundImage: `url("https://tse3.mm.bing.net/th?id=OIP.fTWDertodsPA2q91okaFhAHaE8&pid=Api&P=0&h=180")` 
    }}>
        <Router>
        <Navbar /> 
        <LoadingBar
        color='#f11946'
        height={2}
        progress={progress}
        
      />
         
        <Switch>
        <Route exact path ="/"><News setProgress={setProgress} key="general"  pagesize={16} country="in" category ="general" /></Route>             
          <Route exact path ="/general"><News setProgress={setProgress} key="general"  pagesize={16} country="in" category ="general" /></Route>
          <Route exact path ="/business"><News setProgress={setProgress} key="business"  pagesize={16} country="in" category ="business" /></Route>
          <Route exact path ="/Entertainment"><News setProgress={setProgress} key="Entertainment"  pagesize={16} country="in" category ="Entertainment" /></Route>
          <Route exact path ="/health"><News setProgress={setProgress} key="health"  pagesize={16} country="in" category ="health" /></Route>
          <Route exact path ="/science"><News setProgress={setProgress} key="science"  pagesize={16} country="in" category ="science" /></Route>
          <Route exact path ="/sports"><News setProgress={setProgress} key="sports"  pagesize={16} country="in" category ="sports" /></Route>
          <Route exact path ="/technology"><News setProgress={setProgress} key="technology"  pagesize={16} country="in" category ="technology" /></Route>

        </Switch>
        </Router>
        </div>
      </>
    )
  }


export default App;