import { Component } from "react";
import { withRouter } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.cjs';
AOS.init({
  offset:150,
  duration:500,
  delay:200
});

class Footer extends Component{
    render(){
        return(
            <div className="footer mx-0 row" data-aos="fade-up">
                <div className="footer-title">Pentagon Builders</div>
                <div className="footer-title2">Concreting reputation</div>
                <div className="footer-icons my-3">
                    <span className="footer-icon-space mx-4"><i className="bi bi-telephone"></i></span>
                    <span className="footer-icon-space mx-5"><i className="bi bi-facebook"></i></span>
                    <span className="footer-icon-space mx-4"><i className="bi bi-instagram"></i></span>
                </div>
                <div className="footer-address-title">Address</div>
                <div className="footer-address mt-1">Lorem ipsum dolor sit amet, consectetur adispsing elit Consetructor porta.</div>
            </div>
        )
    }
}
export default withRouter(Footer);