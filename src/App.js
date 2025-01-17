import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import {  Routes, Route } from "react-router-dom";

import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

const App=()=>{


  const[progress,setProgress]=useState(0);
  const apikey=process.env.REACT_APP_NEWS_API_KEY;
 
    return (
      <div>
        <Navbar />
        <LoadingBar color="#f11946" progress={progress} style={{ height: "4px" }} // Adjust the height here  \
        />

        <Routes>
          {/* Default route */}
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}  api_key={apikey} 
                pagesize={5}
                country="us"
                category="business"
              />
            }
          />

          {/* Other category routes */}
          <Route
            path="/business"
            element={
              <News
                setProgress={setProgress}  api_key={apikey} 
                key="business"
                pagesize={5}
                country="us"
                category="business"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                setProgress={setProgress}  api_key={apikey} 
                key="science"
                pagesize={5}
                country="us"
                category="science"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                setProgress={setProgress}  api_key={apikey} 
                key="sports"
                pagesize={5}
                country="us"
                category="sports"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}  api_key={apikey} 
                key="entertainment"
                pagesize={5}
                country="us"
                category="entertainment"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                setProgress={setProgress}  api_key={apikey} 
                key="health"
                pagesize={5}
                country="us"
                category="health"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                setProgress={setProgress}  api_key={apikey} 
                key="technology"
                pagesize={5}
                country="us"
                category="technology"
              />
            }
          />
          <Route
            path="/general"
            element={
              <News
                setProgress={setProgress}  api_key={apikey} 
                key="general"
                pagesize={5}
                country="us"
                category="general"
              />
            }
          />
        </Routes>
      </div>
    );
}


export default App;