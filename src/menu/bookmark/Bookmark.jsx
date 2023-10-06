import React from 'react';
import {StarFilled, StarOutlined, StarTwoTone} from '@ant-design/icons';
//import './style.css'

class BookmarkButton extends React.Component{
    state = {
        isChecked: false,		//체크가 되었는지 확인하는 state
    };

    onClick = () => {				//버튼을 누를때마다
        this.state.isChecked ?		//isChecked가 True면(즐겨찾기 버튼 비활성화)
        this.setState({
            isChecked: false,		//isChecked를 false로 초기화
        })
        :
        this.setState({				//isChecked가 false면(즐겨찾기 버튼 활성화)
            isChecked: true,		//isChecked를 true로 초기화
        });
    }

    render(){
        return(
            <div className="icons-list">
                {this.state.isChecked ?                                                                                         //삼항연산자_isChecked가 True면
                <StarFilled style={{ fontSize: '20px', color: '#FCCB6F'}} onClick={this.onClick}/>:		// 즐겨찾기 버튼 활성화, false면 비어있는 하트를 return
                <StarOutlined style={{ fontSize: '20px', color: '#40003A'}} onClick={this.onClick}/>}
            </div>
        )
    }
}

export default BookmarkButton;