import React from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import TopStories from '../components/TopStories';
import MonthMood from '../components/MonthMood';

function Accueil() {

  return (
  <>
    <NavBar />
    <Header />
    <TopStories />
    <MonthMood />
  </>
  )
}

export default Accueil;