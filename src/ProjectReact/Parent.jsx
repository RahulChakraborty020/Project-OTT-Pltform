import React from "react";
import { BrowserRouter as Router, Routes , Route, } from "react-router-dom";
import NavBar from "./Nav"
import Home from "./Pages/Home";
import Footer from "./Footer";
import Error from "./Pages/Error";
import Subcribe from "./Pages/Subcribs";
import ForYou from "./Pages/ForYou";
import Sports from "./Pages/Sports";
import Movies from "./Pages/Movies";
import TvShow from "./Pages/TvShow";
import News from "./Pages/News";
import Logo from "./Pages/Logo";
import Motu from "./Pages/Motu";
import Footbal from "./Pages/Footbal";
import South from "./Pages/South";
import Serial from "./Pages/Serial";
import King from "./Pages/King";
import Today from "./Pages/Today";
import Yuvi from "./Pages/Yuvi";
import TopSport from "./Pages/TopSport";
import WestSouth from "./Pages/WestSouth";
import Bolywood from "./Pages/Bolywood";

const Parent = () =>{

    return (

        <>
       <Router>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/subcribe" element={<Subcribe/>}/>
            <Route path="/forYou" element={<ForYou/>} />
            <Route path="/sports" element={<Sports/>} />
            <Route path="/movies" element={<Movies/>} />
            <Route path="/tvshow" element={<TvShow/>} />
            <Route path="/news" element={<News/>} />
            <Route path="/logo" element={<Logo/>} />
            <Route path="/motu" element={<Motu/>} />
            <Route path="/footbal" element={<Footbal/>} />
            <Route path="/south" element={<South/>} />
            <Route path="/serial" element={<Serial/>} />
            <Route path="/king" element={<King/>} />
            <Route path="/kho" element={<Today/>} />
            <Route path="/yvi" element={<Yuvi/>} />
            <Route path="/topsport" element={<TopSport/>} />
            <Route path="/sou" element={<WestSouth/>} />
            <Route path="/boly" element={<Bolywood/>} />
            <Route path="*" element={<Error/>} />
            
            

            
        </Routes>
        <Footer/>
       </Router>
        
        </>
    )
}

export default Parent;