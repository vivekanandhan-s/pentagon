import { Component } from "react";
import { withRouter } from "react-router-dom";
import Header2 from "../Header2";
import './Service.css';
import Residential from "./Residential";
import {Tabs,TabList,Tab,TabPanel} from 'react-tabs'
import {home_array} from '../Home/home_array'
import Footer from "../Contact/footer";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Icon } from "@iconify/react";

import Modal from 'react-modal'
import AOS from 'aos';
import 'aos/dist/aos.cjs';
AOS.init({
  offset:100,
  duration:700,
  delay:0
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

class Service extends Component{
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
        document.getElementById("change").style.zIndex=0;
      }
      modalClose=()=>{
        this.setState({
          isModalOpen:false
        })
        document.getElementById("change").style.zIndex=1;
      }
    render(){
        const {isModalOpen,des,modalSource} = this.state;
        return(
            <div>
                <Header2/>
                <div><div className="about_heading"  data-aos="fade-left">OUR projects</div></div>
                <Tabs className="mb-2">
                    <TabList className="tabList" id="change">
                       <Tab className="reactTab">ALL</Tab>
                       <Tab className="reactTab mt-4">RESIDENTIAL</Tab>
                       <Tab className="reactTab mt-4">COMMERCIAL</Tab>
                       <Tab className="reactTab mt-4">INTERIORS</Tab>
                    </TabList>
                    <TabPanel  style={{'overflow':'hidden'}}>
                    <div className="row"  style={{'overflow':'hidden'}}>
               {
                
                home_array.map((item,index)=>{
                  let source = item.source;
                  return(
                    
                <div className="service-tilt-div col-lg-6 col-md-6 col-12" data-aos="fade-up">
                  <img key={index} className="service-tilt" src={source} alt="image1"onClick={()=>this.modalOpen(index)}/>
                
                  <div className="service-bottom-bar"onClick={()=>this.modalOpen(index)}>
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
                }
                )}
                </div>
                  
                    </TabPanel>
                    <TabPanel>
                        <Residential/>
                    </TabPanel>
                    <TabPanel>
                        <div>COMMERCIAL</div>
                    </TabPanel>
                    <TabPanel>
                        <div>Interior</div>
                    </TabPanel>
                </Tabs>
                <Footer/>
            </div>
        )
    }
}

export default withRouter(Service);