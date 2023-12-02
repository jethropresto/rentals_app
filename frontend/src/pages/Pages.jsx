import React from 'react'
import { Route, Routes } from 'react-router-dom';
import InterestList from './InterestList';
import Home from './Home';
import Calendar from './Calendar';
import Documents from './Documents';
import Settings from './Settings';
import Upcoming from './Upcoming';
import Analytics from './Analytics';

function Pages(){
  return (
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/interest_list" element={ <InterestList/> } />
        <Route path="/calendar" element={ <Calendar/> } />
        <Route path="/documents" element={ <Documents/> } />
        <Route path="/settings" element={ <Settings/> } />
        <Route path="/upcoming" element={ <Upcoming/> } />
        <Route path="/analytics" element={ <Analytics/> } />
    </Routes>
  )
}

export default Pages