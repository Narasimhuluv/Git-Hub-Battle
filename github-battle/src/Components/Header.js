import React from 'react';


class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <header className="header">
                <div className="container flex justify_between">
                    <div className="headings flex items_center">
                        <h2>Popular</h2>
                        <h2 className="battle">Battle</h2>
                    </div>

                    <img className="tourch" src="https://img-premium.flaticon.com/png/512/4020/premium/4020460.png?token=exp=1632294427~hmac=e4517c581e8694acc9ec2a687c88a397" alt="Tourch_Image" />
                </div>
            </header>
        )
    }
}

export default Header;