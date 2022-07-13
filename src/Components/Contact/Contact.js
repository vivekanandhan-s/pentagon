import { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from 'axios';
import Header2 from "../Header2";
import './Contact.css';
import { GoogleMap,withScriptjs,withGoogleMap } from "react-google-maps";
import { Icon } from "@iconify/react";
import Google from "./GoogleMap";

import AOS from 'aos';
import 'aos/dist/aos.cjs';
AOS.init({
  offset:150,
  duration:500,
  delay:200
});
function Map(){
    return(
        <GoogleMap defaultZoom={10} 
        defaultCenter={{lat:45.421532,lng:-75.687189}}/>
    )
}
const WrappedMap = withScriptjs(withGoogleMap(Map))
class Contact extends Component{
    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };
    constructor(){
        super();
        this.state = {
            Name : '',
            Place:'',
            Mobile:'',
            Email:'',
            Image:''
        }
    }
    validate = () => {
        let name = document.getElementById("name").value;
        let pin = document.getElementById("email").value;
        let moblie = document.getElementById("mobile").value;
        let place = document.getElementById("place").value;
        
        var msg;
        console.log("Image ");
        if(name==""){
            msg="* This field is mandatory"
            document.getElementById("error").style.display = "inline-block";
            document.getElementById("error").innerHTML = msg;
        }
        if(moblie=="" || isNaN(moblie) || moblie < 999999999 || moblie > 10000000000 ){
            msg = "*It should be a 10 digit number";
            document.getElementById("errorMob").style.display = "inline-block";
             document.getElementById("errorMob").innerHTML = msg; 
       }
       if(pin==""){
            msg = "*It should be a valid email";
            document.getElementById("errorpin").style.display = "inline-block";
             document.getElementById("errorpin").innerHTML = msg; 
       }
       if(place==""){
        msg="*Mandatory";
        document.getElementById("errorplace").style.display = "inline-block";
        document.getElementById("errorplace").innerHTML = msg; 
       }
       
       else{
        this.setState({
            Name:document.getElementById("name").value,
            Place: document.getElementById("place").value,
            Mobile: document.getElementById("mobile").value,
            Email: document.getElementById("email").value,
           
           });
           this.handleContact();           
       }
       
    }

    handleContact=()=>{
        const{Name,Place,Mobile,Email,Image} = this.state;
        const obj = {
            Name:Name,
            Place:Place,
            Mobile:Mobile,
            Email:Email,
           
        }
        console.log("Called")
        axios({
            method:'POST',
            url:'http://localhost:4444/savecontact',
            header:{'Content-Type':'application/json'},
            data:obj
        }).then(result => {
            console.log("Success");
            console.log(result);
            alert("Form Submitted Successfully");
            document.location.reload(true)
        }).catch(error=>{
            console.log(error);
        })
        
       
    }

    render(){
        return(
            <div style={{'fontFamily':'Montserrat'}}>
                <Header2/>
                <div className="row" style={{'overflow':'hidden'}}>
                <div className="col-lg-6 mip col-12 p-0" data-aos="fade-right">
                    {/* AIzaSyACn4ZN3c-Xtj67OX_78IhDo_a8PcsL8Fs - API_KEY */}
                    <Google/>
                    </div>    
                <div className="col-lg-6 col-12 form" data-aos="fade-left">
                <div className="reac">Reach Us</div>
                <div className="joints">
                    <i class="bi bi-telephone round-icon"></i>
                    <span>+91 99966 85566 </span>/
                    <span> +91 88551 554478</span>
                </div>
                <div className="joints">
                    <i class="bi bi-envelope-fill round-icon"></i>
                    <span>pentagonbuilderskarur@gmail.com</span>
                </div>
                <div id="address_div" className="joints">
                   <i id="address_icon" class="bi bi-geo-alt-fill round-icon"></i>
                    <div id="address">No 9, Street Name,Locality Name, Karur, 639005</div>
                </div>
                <div className="actual_form">
                <div className="actual_form_heading">Fill the details. to get a call back</div>
                <label className="label">Name : </label>
                <input type="text" id="name"className="input"/><br/>
                <span id="error" style={{'display': 'none'}}></span><br/>
                <label className="label">Place : </label>
                <input type="text" id="place"className="input"/><br/>
                <div id="errorplace" style={{'display': 'none'}}></div><br/>
                <label className="label">Mobile No. : </label>
                <input type="text" id="mobile" className="input"/><br/>
                <div id="errorMob" style={{'display': 'none'}}></div><br/>
                <label className="label">Email : </label>
                <input type="text" id="email"className="input"/><br/>
                <div id="errorpin" style={{'display': 'none'}}></div><br/>
                
                {/*<label className="label">Additional Info :</label><br/>
                <textarea rows={3} cols={35} className="input"></textarea><br/>*/}
                <button type="button" className="button" onClick={()=>{
                    this.validate();
                }}>Submit</button>
                </div>
                </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Contact);