import React, {Component} from 'react';
import './index.css';

class ListItem extends Component{
    render(){
        return(
            <div className={this.props.active ? "list-item active" : "list-item"} onClick={this.props.onClick}>
                <div className="title">{this.props.title ? this.props.title : '제목'}</div>
                <div className="list-item-contents">{this.props.contents ? this.props.contents : '내용'}</div>
            </div>
        )
    }
}

export default ListItem;