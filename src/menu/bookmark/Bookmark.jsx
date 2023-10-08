import React from 'react';
import {StarFilled, StarOutlined} from '@ant-design/icons';
import axiosInstance from '../../api';
//import './style.css'

class BookmarkButton extends React.Component{
    state = {
        isChecked: false,		//체크가 되었는지 확인하는 state
    };

    onClick = () => {				//버튼을 누를때마다
        const { isChecked } = this.state;
        const {menu_name} = this.props;
        console.log(menu_name);
        // 즐겨찾기 버튼 클릭 시 즐겨찾기 생성 또는 삭제
        if (isChecked) {
          // 이미 즐겨찾기되어 있는 경우, 삭제
          this.deleteBookmark(menu_name);
        } else {
          // 즐겨찾기가 되어 있지 않은 경우, 생성
          this.createBookmark(menu_name);
        }
    }

// 즐겨찾기 추가 함수
createBookmark = (menu_name) => {
  axiosInstance.post('/users/bookmarks/create', { menu_name })
    .then((response) => {
      console.log('즐겨찾기 생성 성공');
      this.setState({ isChecked: true });
      
      // 로컬 스토리지에 즐겨찾기 추가
      const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
      bookmarks.push(menu_name);
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    })
    .catch((error) => {
      console.error('즐겨찾기 생성 오류:', error);
    });
};

// 즐겨찾기 삭제 함수
deleteBookmark = (menu_name) => {
  axiosInstance.delete(`/users/bookmarks/delete/${menu_name}`)
    .then((response) => {
      console.log('즐겨찾기 삭제 성공');
      this.setState({ isChecked: false });
      
      // 로컬 스토리지에서 즐겨찾기 삭제
      const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
      const updatedBookmarks = bookmarks.filter(item => item !== menu_name);
      localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
    })
    .catch((error) => {
      console.error('즐겨찾기 delete 오류:', error);
    });
};


    render(){
        const { isChecked } = this.state;
        return(
            <div className="icons-list">
                {isChecked ?                                                                                         //삼항연산자_isChecked가 True면
                <StarFilled style={{ fontSize: '20px', color: '#FCCB6F'}} onClick={this.onClick}/>:		// 즐겨찾기 버튼 활성화, false면 비어있는 하트를 return
                <StarOutlined style={{ fontSize: '20px', color: '#40003A'}} onClick={this.onClick}/>}
            </div>
        )
    }
}

export default BookmarkButton;