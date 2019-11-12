import React from 'react';
import './index.css';
import ListItem from '../ListItem';
import { notStrictEqual } from 'assert';

class List extends React.Component{
    render(){
        return(
            <div className="list">
                <div>
                    <div className="new-note" onClick={this.props.onAddNote}> 
                        <button title="노트 작성">+</button>
                    </div>
                    {this.props.notes.map((item) => {
                        const { idx, title, contents } = item;
                        return (                            
                            <ListItem 
                                key={idx}
                                id={idx}
                                active={idx === this.props.activeIdx}
                                title={title}
                                contents={contents}
                                onClick={() => this.props.onListItemClick(idx)}
                            />
                            
                        );
                    })}
                
                </div>
            </div>
        );
    }
}

export default List;