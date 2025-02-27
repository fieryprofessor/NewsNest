import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Home from './components/Home';

const App = ()=> {
  const pageSize = 9
  
  const[progress,setProgress] = useState(0);

    return (
      <>
      <Router>
      <div>
       <Navbar/>
       <LoadingBar
  color="linear-gradient(135deg, #ff7e5f, #feb47b)" // Gradient effect
  progress={progress}
  height={5}
  shadow={true} // Gives a slight glow effect
  transitionTime={300} // Smooth loading animation
/>
       <Routes>
              <Route  path="/" element={<Home category="home" />} /> 
              <Route exact path="/general" element={<News setProgress={setProgress}  key="general" pageSize={pageSize} country="us" category="general" />} />
              <Route exact path="/business" element={<News setProgress={setProgress}  key="business" pageSize={pageSize} country="us" category="business" />} />
              <Route exact path="/entertainment" element={<News setProgress={setProgress}  key="entertainment" pageSize={pageSize} country="us" category="entertainment" />} />
              <Route exact path="/general" element={<News setProgress={setProgress}  key="general" pageSize={pageSize} country="us" category="general" />} />
              <Route exact path="/health" element={<News setProgress={setProgress}  key="health" pageSize={pageSize} country="us" category="health" />} />
              <Route exact path="/science" element={<News setProgress={setProgress}  key="science" pageSize={pageSize} country="us" category="science" />} />
              <Route exact path="/sports" element={<News setProgress={setProgress}  key="sports" pageSize={pageSize} country="us" category="sports" />} />
              <Route exact path="/technology" element={<News setProgress={setProgress}  key="technology" pageSize={pageSize} country="us" category="technology" />} />
       </Routes>
      </div>
      </Router>
        
      </>
    );
}

export default App;