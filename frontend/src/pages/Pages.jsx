import React from 'react'
import { Route, Routes } from "react-router-dom";
import InterestList from './InterestList';
import Home from './Home';

function Pages(){
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/interest_list" element={<InterestList />}/>
    </Routes>
  )
}

export default Pages