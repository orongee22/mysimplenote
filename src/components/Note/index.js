import React from 'react';
import './index.css';

class Note extends React.Component{
    render(){
        // console.log(this.props.note.idx);
        // console.log(this.props.note.title);
        const { note } = this.props;
        // const{title, contents} = note;
        console.log(note);
        // console.log(title);
        return (
            <div className="note">
                <input type="text" className="title" value={this.props.note.title}></input>
                <textarea className="note-contents" value={this.props.note.title}></textarea>
            </div>
        )
    }
}

export default Note;