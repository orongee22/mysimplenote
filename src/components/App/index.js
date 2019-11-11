import React from 'react';
import Header from '../Header'
import List from '../List'
import Note from '../Note'
import './index.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            // 노트 정보를 배열로 받을 것.
            notes: [
                {idx: 1, title: '제목1', contents: '내용1'},
                {idx: 2, title: '제목2', contents: '내용2'},
                {idx: 3, title: '제목3', contents: '내용3'},
            ],
            // 현재 활성화 된 노트의 idx
            activeIdx: 1,
        }
    }
    
    // 노트 리스트를 클릭했을 때, 활성화 노트 idx값을 현재 노트의 idx값으로 setting
    handleListItemClick = (idx) => {
        this.setState({
            activeIdx: idx
        })
    }
    render(){
        const { notes, activeIdx } = this.state;
        // 현재 활성화 된 idx값을 가진 노트의 정보만 filtering 처리하여 그 첫번째 값(인덱스 0번지)만 담음.
        const activeNote = notes.filter((item) => item.idx === activeIdx)[0];

        console.log("activeNote:");
        console.log(activeNote);

        return (
            <div className="app">
                <Header />
                <div className="container">
                    <List notes={notes} activeIdx={activeIdx}
                    onListItemClick={this.handleListItemClick} />
                    {
                        // state.note가 존재할 경우만 Note 컴포넌트 렌더링할 것!
                        notes.length > 0 && <Note note={activeNote} />
                    }
                </div>
            </div>
            
        );
    }
}

export default App;