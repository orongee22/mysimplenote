import React from 'react';
import './index.css';

class Note extends React.Component{
    render(){
        const { note, onEditNote } = this.props;
        const {title, contents} = note;
        return (
            <div className="note">
                <div className="title-wrap">
                    <input 
                        type="text" className="title" 
                        value={title} 
                        onChange={(e) => onEditNote('title', e)} 
                    />
                    <button type="button" className="remove-btn" onClick={this.props.onDeleteNote} />
                </div>
                <textarea
                    className="note-contents" 
                    value={contents} 
                    onChange={(e) => onEditNote('contents', e)} 
                />
            </div>
        )
    }
}

export default Note;