import React from 'react'
import Header from './../Header/Header';
import Banner from './Banner';
import ByZone from './ByZone';
import ByStates from './ByStates';
import BySeason from './BySeason';
import TrendingHolidays from './TrendingHolidays';
import LatestTravel from './LatestTravel';
import HolidaysGuide from './HolidaysGuide';
import Footer from '../Footer.js/Footer';

const Home = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <ByZone/>
      <ByStates/>
      <BySeason/>
      <LatestTravel/>
      <HolidaysGuide/>
      <Footer/>
    </div>
  )
}

export default Home
