// import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React, { Component, useState } from 'react'
import Navbar from './Components/Navbar';
import NewsComponent from './Components/NewsComponent';
import LoadingBar from 'react-top-loading-bar';

const App = ()=> {
  // c = 'Shashwat'
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)

  // 0= {
  //   progress:0
  // }
  // setProgress = (progress)=> {
  //   setState({
  //     progress:progress
  //   })
  // }
  // render() {
    return (
      <div>
        {/* <NewsComponent pageSize='9' category='general' country='in' /> */}
         <Router>
          <Navbar />
          <LoadingBar
          height={3.5}
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
          <Routes>
            <Route exact path='/' element={<NewsComponent setProgress={setProgress} apiKey={apiKey} key="general" pageSize='9' category='general' country='in' />}></Route>
            <Route exact path='/bussiness' element={<NewsComponent setProgress={setProgress} apiKey={apiKey} key="bussiness" pageSize='9' category='business' country='in'/>}/>
            <Route exact path='/entertainment' element={<NewsComponent setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize='9' category='entertainment' country='in' />}></Route>
            <Route exact path='/general' element={<NewsComponent setProgress={setProgress} apiKey={apiKey} key="generalize" pageSize='9' category='general' country='in' />}></Route>
            <Route exact path='/health' element={<NewsComponent setProgress={setProgress} apiKey={apiKey} key="health" pageSize='9' category='health' country='in' />}></Route>
            <Route exact path='/science'element={<NewsComponent setProgress={setProgress} apiKey={apiKey} key="science" pageSize='9' category='science' country='in' />}></Route>
            <Route exact path='/sports' element={<NewsComponent setProgress={setProgress} apiKey={apiKey} key="sports" pageSize='9' category='sports' country='in' />}></Route>
            <Route exact path='/technology' element={<NewsComponent setProgress={setProgress} apiKey={apiKey} key="technology" pageSize='9' category='technology' country='in' />}></Route>
        </Routes>
        </Router> 
      </div>
    )
  }
// }
export default App;


