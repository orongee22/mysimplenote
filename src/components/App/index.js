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
                {idx: 0, title: '테스트', contents: '테스트용'},
            ],
            // 현재 활성화 된 노트의 idx
            activeIdx: 0,
        };

        console.log(this.handleAddNote);

    }

    // 노트 리스트를 클릭했을 때, 활성화 노트 idx값을 현재 노트의 idx값으로 setting
    handleListItemClick = (idx) => {
        this.setState({
            activeIdx: idx
        });
    }

    // 노트 삭제 이벤트 핸들러
    handleDeleteNote = () => {
        if(window.confirm("정말로 노트를 삭제하시겠어요?")){
            // 활성화된 노트를 제외한 요소를 notes 변수에 저장.
            const notes = this.state.notes.filter((item) => item.idx !== this.state.activeIdx);

            console.log(this.state.notes.idx);
            
            
            // 새로 정의된 notes 변수를 다시 setState해줌.
            // 활성화된 idx는 만약 노트가 존재하지 않을 경우 null, 
            this.setState({
                notes,
                activeIdx: notes.length === 0 ? null : notes[notes.length-1].idx
            });
        }
        
    }

    // 노트 추가 이벤트 핸들러
    handleAddNote = () => {
        const idx = this.state.notes.length + 1;
        console.log("idx : "+idx);
        console.log(this.state.notes.idx);

        // 새로 노트를 추가할 때마다 state.notes 배열에 요소 하나씩 추가, idx까지 설정.
        this.setState({
            notes: [
                ...this.state.notes,
                {
                    idx,
                    title: '제목을 입력하세요.',
                    contents: '내용을 입력해주세요!',
                },
            ],
            activeIdx: idx,
        });
    }
    
    // 노트 편집을 위한 이벤트 함수
    handleEditNote = (type, e) => {
        // 새로운 notes배열에 state.notes 객체를 담아 생성함.
        // 원본을 건드리지 않기 위해 새로 생성하는 것임.
        const notes = [...this.state.notes];

        // 현재 활성화된 노트찾기
        const note = notes.find((item) => item.idx === this.state.activeIdx);

        // 활성화 된 노트의 속성(제목 or 내용)에 사용자가 변경한  value값을 할당함. - 편집용
        note[type] = e.target.value;
        console.log(this.state);

        // state값을 새로 할당받은 const notes의 값으로 변경함.
        this.setState({
            notes
        });
    }

    render(){
        // const { notes, activeIdx } = this.state;
        // 현재 활성화 된 idx값을 가진 노트의 정보만 filtering 처리하여 그 첫번째 값(인덱스 0번지)만 담음.
        const activeNote = this.state.notes.filter((item) => item.idx === this.state.activeIdx)[0];

        console.log("activeNote:");
        console.log(activeNote);

        return (
            <div className="app">
                <Header />
                <div className="container">
                    <List 
                        onAddNote={this.handleAddNote}
                        notes={this.state.notes} 
                        activeIdx={this.state.activeIdx}
                        onListItemClick={this.handleListItemClick} />
                    {
                        // state.note가 존재할 경우만 Note 컴포넌트 렌더링할 것!
                        this.state.notes.length > 0 && <Note note={activeNote} onEditNote={this.handleEditNote}
                        onDeleteNote={this.handleDeleteNote} />
                    }
                </div>
            </div>
            
        );
    }
}

export default App;