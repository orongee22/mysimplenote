import React, {Component} from 'react';
import logo from '../../static/falling-star.png'
import './index.css';

class Header extends Component{
    render(){
        return (
            <div className="header">
                <div className="title">
                    <span><a href=""><img src={logo} alt="logo" width="40" height="40" />한 줄 노트</a></span>
                </div>
                <div className="btn-group">
                    <button title="노트 작성">+</button>
                </div>
            </div>
        )
    }
}


export default Header;