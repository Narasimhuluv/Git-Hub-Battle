// import React from 'react';

// class Fetch extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             fetchdata : ""
//         }
//     }

//     componentDidMount(){
//         fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:JavaScript&sort=stars&order=desc&type=Repositories`)
//             .then((res) => res.json())
//             .then((data) => {
//                 this.setState({
//                     fetchdata : data.items
//                 })
//             })
//     }
//     render(){
//         if(!this.state.fetchdata){
//             return (
//                 <h2>Loading . . . . </h2>
//             )
//         }
        
//         var fetch = this.state.fetchdata;
//         console.log(fetch)

//         return(
//             <div className="flex flex_wrap justify_between">
//                 {
//                     fetch.map((each) => (
//                        <div className="flex_28 card ">
//                             <img src={each.owner.avatar_url} alt="" />
//                             <h2>{each.owner.login}</h2>
//                             <h3>{each.full_name}</h3>
//                             <h4>{each.forks_count}</h4>
//                             <h4>{each.open_issues_count}</h4>
//                             <h4>{each.stargazers_count}</h4>
//                        </div>
//                     ))
//                 }
//             </div>
//         )
//     }
// }

// export default Fetch;
import React from 'react';
class Fetch extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        var all = this.props.alldata
        console.log(all)
        return(
            <div className="flex flex_wrap justify_between">
                {
                    all.map((each) => (
                        <div className="flex_28 card" key={each.id}>
                            <img src={each.owner.avatar_url} alt="" />
                            <h2>{each.owner.login}</h2>
                            <h3>{each.full_name}</h3>
                            <h4>{each.forks_count}</h4>
                            <h4>{each.open_issues_count}</h4>
                            <h4>{each.stargazers_count}</h4>
                       </div>
                    ))
                }
            </div>
        )
    }
}
export default Fetch;