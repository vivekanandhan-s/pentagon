import { Component } from "react";
import { NavItems } from "./NavItems";
import {withRouter} from 'react-router-dom';
import queryString from 'query-string';

import './Header.css'
class Header extends Component{
    constructor(){
        super();
        this.state={
           clickedNavMenu : false,
           current : "/"
        }
    }
    componentDidMount(){
        const qs = queryString.parse(this.props.location.pathname);
        let array=Object.keys(qs);
        this.setState({
            current:array[0]
        })
       
        this.changeCss()
    }
    

    handleClick=()=>{
        this.setState({
            clickedNavMenu : !this.state.clickedNavMenu
        })
    }
     changeCss(){
        
       
        const navElement = document.getElementById("navi");
        const navLinks = document.getElementsByClassName("navLinks");
        var len = navLinks.length,i;
        
        if(this.scrollY > 500){ 
           
            navElement.style.background = "white"
            navElement.style.color="black"
            navElement.style.boxShadow="black 0px -4px 9px"
            for(i=0;i<len;i++){
                navLinks[i].style.color="black"
            }
            
        }
        else{
         navElement.style.background = "transparent";
         navElement.style.color="white"
         navElement.style.boxShadow="none"
         for(i=0;i<len;i++){
            navLinks[i].style.color="white"
        }

        }
      }
     
    render(){
        const {current} = this.state;
        return(
            
            <div id="navi"className={"NavBar "}>
                {
                     window.addEventListener("scroll", this.changeCss , false)
                }
                <div class="wrapper">
                    <div class="typing-demo">
                       Pentagon Builders.
                </div>
            </div>
                <div className="NavIcon" onClick={this.handleClick}>
                    <i className={this.state.clickedNavMenu ? 'bi bi-x' : 'bi bi-list'}></i>
                </div>
                <ul className={this.state.clickedNavMenu ? 'nav-menu active' : 'nav-menu'}>
                    {
                        NavItems.map((item,index)=>{
                            return(
                            <li key={index} style={{'position':'relative'}}
                            onClick={()=>{
                                const url = `${item.url}`;
                                this.props.history.push(url);
                                this.setState({
                                    current:item.url
                                })
                            
                                this.handleClick();
                                document.location.reload(true);
                            }}
                            >
                                <div className="dropdown">
                                <a className={"navLinks" + (current === item.url ? " yes" : "" )}>{item.name}</a>
                                {/*
                                    item.name === 'Services/Projects'
                                    ?
                                    <div className="dropdown-content">
                                    <a href="/residential">{item.category}</a>
                                    <a>{item.category2}</a>
                                    <a>{item.category3}</a>
                                   </div>
                                    :
                                    <div></div>
                        */}
                                
                                </div>
                            </li>
                            );
                        })
                        
                    }
                    
                </ul>
            </div>
        )
    }
}
export default withRouter(Header);