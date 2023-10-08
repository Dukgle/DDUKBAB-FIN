import React from 'react';
import {StarFilled, StarOutlined, StarTwoTone} from '@ant-design/icons';
import axiosInstance from '../../api';
//import './style.css'

class BookmarkButton extends React.Component{
    state = {
        isChecked: false,		//체크가 되었는지 확인하는 state
    };

    onClick = () => {				//버튼을 누를때마다
        const { isChecked } = this.state;
        // 즐겨찾기 버튼 클릭 시 즐겨찾기 생성 또는 삭제
        if (isChecked) {
          // 이미 즐겨찾기되어 있는 경우, 삭제
          this.deleteBookmark();
        } else {
          // 즐겨찾기가 되어 있지 않은 경우, 생성
          this.createBookmark();
        }
    }

    // API를 호출하여 즐겨찾기 생성
  createBookmark = () => {
    const { menu_name } = this.props; // 즐겨찾기할 메뉴 이름
    axiosInstance.post('/users/bookmarks/create', { menu_name })
      .then((response) => {
        console.log('즐겨찾기 생성 성공');
        this.setState({ isChecked: true });
      })
      .catch((error) => {
        console.error('즐겨찾기 생성 오류:', error);
      });
  };

  // API를 호출하여 즐겨찾기 삭제
  deleteBookmark = () => {
    const { bookmarkId } = this.props; // 삭제할 즐겨찾기 ID
    axiosInstance.delete(`/users/bookmarks/delete/${bookmarkId}`)
      .then((response) => {
        console.log('즐겨찾기 삭제 성공');
        this.setState({ isChecked: false });
      })
      .catch((error) => {
        console.error('즐겨찾기 delete 오류:', error);
      });
  };

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