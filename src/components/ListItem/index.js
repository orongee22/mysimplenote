import React, {Component} from 'react';
import './index.css';

class ListItem extends Component{
    render(){
        return(
            <div className={this.props.active ? "list-item active" : "list-item"} onClick={this.props.onClick}>
                <div className="title">{this.props.title}</div>
                <div className="list-item-contents">{this.props.contents}</div>
            </div>
        )
    }
}

export default ListItem;