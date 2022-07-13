import { Component } from "react";
import { withRouter } from "react-router-dom";
import Header2 from "../Header2";
import Footer from '../Contact/footer'

import './AboutUs.css';
import AOS from 'aos';
import 'aos/dist/aos.cjs';
AOS.init({
  offset:150,
  duration:500,
  delay:200
});

class AboutUs extends Component{
    render(){
        return(

            <div>
                <Header2/>
                <div><div className="about_heading" data-aos="fade-left"style={{'overflow':"clip"}}>About Pentagon Builders</div></div>
                <div className="row mx-0" style={{'overflow':'hidden'}}>
                    <div className="col-lg-6 col-md-7 col-12 founder"  data-aos="fade-right">
                        <div className="founder_title">The founders</div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                   </div>

                    <div className="col-lg-6 col-md-5 col-12 px-0"  data-aos="fade-left">
                        <img style={{'width':"100%"}} src={require('../../Assets/image4.jpeg')} alt="founder_image"/>
                    </div>
                </div>
                <div className="row mx-0" style={{'overflow':'hidden'}}>
                    <div className="col-lg-6 col-md-5 col-12 px-0"  data-aos="fade-right">
                        <img style={{'width':"100%"}} src={require('../../Assets/image3.jpeg')} alt="founder_image"/>
                    </div>
                    <div className="col-lg-6 col-md-7 col-12 founder"  data-aos="fade-left">
                        <div className="founder_title">About the firm</div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                   </div>
                </div>
                <div className="row counts mx-0" style={{'overflow':'hidden'}}>
                    <div className="col-lg-4 col-md-4 col-12 each_count"  data-aos="fade-right">
                        <span className="count">100+</span><br/>
                        <span className="count_name">Current clients</span>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12 each_count"  data-aos="fade-up">
                        <span className="count">100+</span><br/>
                        <span className="count_name">project completed</span>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12 each_count"  data-aos="fade-left">
                        <span className="count">5+</span><br/>
                        <span className="count_name">years of experience</span>
                    </div>

                </div>
                <Footer/>
            </div>
        )
    }
}

export default withRouter(AboutUs);