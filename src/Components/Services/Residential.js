import axios from "axios";
import { Component } from "react";
import { withRouter } from "react-router-dom";
import { Tab,TabList,TabPanel,Tabs} from 'react-tabs';
import './Service.css'
import Header2 from "../Header2";
class Residential extends Component{
    constructor(){
        super();
        this.state={
            residents:[]
        }
       
    }
    componentDidMount(){
        this.handleCurrent();
    }
    handleCurrent(){
        axios.get('http://localhost:4444/getResidentByStatus/Current')
        .then(result=>{
            this.setState({
                residents:result.data.resident
            })
            console.log(this.state.residents);
        }).catch(error=>{
            console.log(error);
        })
    }
    handleComplete(){
        axios.get('http://localhost:4444/getResidentByStatus/Completed')
        .then(result=>{
            this.setState({
                residents:result.data.resident
            })
            console.log(this.state.residents);
        }).catch(error=>{
            console.log(error);
        })
    }
    render(){
        const {
            residents
        }=this.state;
        return(
            <div>
                <h4 className="heading">Residential</h4>
                <Tabs>
                    <TabList>
                        <Tab className="reactTab mt-4" onClick={()=>this.handleCurrent()}>Current</Tab>
                        <Tab className="reactTab mx-4" onClick={()=>this.handleComplete()}>Completed</Tab>
                    </TabList>
                    <TabPanel>
                        {
                            residents.map((item,index)=>{
                                return(
                                    <div>{item.project}</div>
                                )
                            })
                        }
                    </TabPanel>
                    <TabPanel>{
                            residents.map((item,index)=>{
                                return(
                                    <div>{item.project}</div>
                                )
                            })
                        }</TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default withRouter(Residential);