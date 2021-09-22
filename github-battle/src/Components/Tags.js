import React from 'react';
import Fetch from './Fetch';
class Tags extends React.Component{
    constructor(props){
        super(props);
        this.state={
            fetchData : "",
            language : "javascript"
        }
    }
    componentDidMount(){
        fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:${this.state.language}&sort=stars&order=desc&type=Repositories`)
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    fetchdata : data.items
                })
            })
    }
    componentWillUnmount(){
        fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:${this.state.language}&sort=stars&order=desc&type=Repositories`)
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    fetchdata : ""
                })
            })
    }
    onChange = (eachLanguage) => {
        this.setState({
            language : eachLanguage
        })
    }
    render(){
        var fetch = this.state.fetchdata;
        let alldata = []
        var all = alldata.map((each) => {
            return alldata.push(each)
        })
        // console.log(alldata)
        // if(!this.state.fetchData){
        //     alldata = fetch
        // }
        if(this.state.language ===  "All"){
            alldata = fetch
        }if(this.state.language === "JavaScript"){
            alldata.map((each) => {
                console.log(each)
            })
        }
        

        if(!this.state.fetchdata){
            return (
                <img className="loadingImage" src="/images/loading.gif" alt="lading_image" />
            )
        }
        
        // console.log(fetch)   
        var languages = ["All", "JavaScript","Ruby","Java","CSS", "Python"] 

        return(
            <div className="container">
               <div className="allbuttons flex justify_between">
               {
                   languages.map((eachLanguage) => (
                       <button onClick={() => this.onChange(eachLanguage)}>{eachLanguage}</button>
                   ))
               }
               </div>
               <div>
                    {this.state.language ?  <Fetch alldata = {alldata}/> : "hello" }
               </div>
            </div>
        )
    }
}

export default Tags