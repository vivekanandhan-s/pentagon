import { Component } from "react";
import { withRouter } from "react-router-dom";
import {home_array} from "./home_array";
import Footer from "../Contact/footer";
import './Home.css';
import Header from "../Header";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Icon } from "@iconify/react";
import Modal from 'react-modal'
import AOS from 'aos';
import 'aos/dist/aos.cjs';
AOS.init({
  
  duration:500,
  delay:200
});



const customStyles = {
  content: {
  position: 'absolute',
  inset: '50% auto auto 50%',
  /* border: 2px solid tomato; */
  background: 'rgb(255, 255, 255)',
  overflow: 'auto',
  overflowX:'clip',
  borderRadius: '4px',
  outline: 'none',
  width: '70%',
  padding: '0px',
  marginRight: '-50%',
  transform: 'translate(-50%, -50%)',
  height: '450px'}
};

class Home extends Component{
    constructor(){
      super();
      this.state={
        isModalOpen:false,
        des:"",
        modalSource:''
      }
    }
    modalOpen=(index)=>{
      this.setState({
        isModalOpen:true,
        des:home_array[index].description,
        modalSource:home_array[index].source
      })
    }
    modalClose=()=>{
      this.setState({
        isModalOpen:false
      })
    }
    render(){
      const {isModalOpen,des,modalSource} = this.state;
        return(
            <div> 
             <Header/>
              <img className="background" src={require('../../Assets/background.jpg')} alt="homeImage"/>
              <div className="image-div" data-aos="fade-left">
                <div className="first-line">We expertise in</div>
                <div className="second-line">Construction</div>
                <div className="third-line">Interior Design</div>
                <div className="image-button-div"><span className="image-buttons mx-3">More About Us</span><span className="mx-3 image-buttons">Projects</span></div>
                <div className="scroll-to">Scroll to explore</div>
                <div className="down-arrow-div"><i class="bi bi-arrow-down"></i></div>
              </div>
              <div className="row mb-5" style={{'overflow':'hidden'}}>
                <div data-aos="fade-right" className="three-div col-lg-4 col-md-4 col-12" style={{"paddingLeft":"80px"}}>
                  <span className="number">01</span><br/>
                  <span className="three-div-title">Innovation</span>
                  <p className="three-div-para">Lorem ipsum dolor sit amet, consectetur adispsing elit Consetructor porta.</p>
                </div>
                <div data-aos="fade-up" className="three-div col-lg-4 col-md-4 col-12">
                  <span className="number">02</span><br/>
                  <span className="three-div-title">Creativity</span>
                  <p className="three-div-para">Lorem ipsum dolor sit amet, consectetur adispsing elit Consetructor porta.</p>
                </div>
                <div  data-aos="fade-left" className="three-div col-lg-4 col-md-4 col-12"style={{"paddingRight":"80px"}}>
                  <span className="number">03</span><br/>
                  <span className="three-div-title">Quality</span>
                  <p className="three-div-para">Lorem ipsum dolor sit amet, consectetur adispsing elit Consetructor porta.</p>
                </div>
              </div>
              <div className="showcase mb-lg-5"  data-aos="fade-right">
              <div className="showcase-background"></div>
              <div className="show">Our showcase</div>
              <div className="container my-4">
                <div className="row"  data-aos="fade-left">
               {
                
                home_array.map((item,index)=>{
                  let source = item.source;
                  return(
                    
                <div className="tilt-div col-lg-4 col-md-6 col-12" data-aos="fade-up">
                  <img key={index} className="tilt" src={source} alt="image1"onClick={()=>this.modalOpen(index)}/>
                
                  <div className="bottom-bar">
                 {/*    <i className="bi bi-envelope icon"></i>
                    <i className="bi bi-telephone icon"></i>
                    <i className="bi bi-facebook icon"></i>
                    <i className="bi bi-instagram icon"></i>
                  */}
                  Project Name
                  </div>
                  <Modal isOpen={isModalOpen} style={customStyles}>
                    
                    
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-12 px-0"  data-aos="fade-right">
                        <Carousel autoPlay={true} interval={2000} dynamicHeight={false} showThumbs={false} infiniteLoop={true}>
                        <div className="imag">
                                <img src={require('../../Assets/image1.jpeg')} alt="homeImage"/>
                            </div>
                            <div className="imag">
                                <img src={require('../../Assets/image2.jpeg')} alt="homeImage"/>
                            </div>
                            <div className="imag">
                                <img src={require('../../Assets/image3.jpeg')} alt="homeImage"/>
                            </div>
                            <div className="imag">
                                <img src={require('../../Assets/image4.jpeg')} alt="homeImage"/>
                            </div>
                            <div className="imag">
                                <img src={require('../../Assets/image1.jpeg')} alt="homeImage"/>
                            </div>
                        </Carousel>
                      </div>
                    
                    <div className="col-lg-6 col-md-6 col-12 px-0"  data-aos="fade-left">
                      <div className="portray_name">The Project Name</div>
                      <div className="portray_elements">
                        <span className="portray_elements-each">
                          <i class="bi bi-house-fill portray_icon"></i>
                          2400 SQFT
                          </span>
                        <span className="portray_elements-each">
                          <i class="bi bi-geo-alt-fill portray_icon"></i>
                          Vaiyaburi nagar
                          </span>
                        <span className="portray_elements-each">
                          <i class="bi bi-building portray_icon"></i>
                          Residential
                          </span>
                        <span className="portray_elements-each">
                          <i class="bi bi-star-fill portray_icon"></i>
                          Amenties
                          </span>
                        <span className="portray_elements-each">
                          <Icon icon="fa6-solid:indian-rupee-sign" className=" portray_icon" />
                          34,53,999 /-(Approx)
                          </span>
                      </div>
                      <div className="portray_description">
                        {des}
                      </div>
                    </div>
                    </div>
                    <i className="bi bi-x close" onClick={this.modalClose}></i>
                  </Modal>
                  
                </div>
                       
                  )
                })
               } 
              </div>
              </div>
              </div>
              <Footer/>
            </div>
        )
    }
}

export default withRouter(Home);