import { Component } from "react";
import {Route,BrowserRouter} from 'react-router-dom';

import Header from "./Components/Header";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs/AboutUs";
import Contact from "./Components/Contact/Contact";
import Service from "./Components/Services/Service";
import Residential from "./Components/Services/Residential";
import Google from "./Components/Contact/GoogleMap";
class Router extends Component{
    render(){
        return(
            <BrowserRouter>
            <Route exact path="/" component={Home}/>
            <Route path="/home" component={Home}/>
            <Route path="/aboutus" component={AboutUs}/>
            <Route path ="/contact" component={Contact}/>
            <Route path="/services" component={Service}/>
            <Route path="/residential" component={Residential} />
            <Route path="/map" component={Google} />
            </BrowserRouter>
        );
    }
}

export default Router;