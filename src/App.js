import './App.css';
import styled from "styled-components"
import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Switch, Link, RouterProvider } from "react-router-dom";

import Splash from "./verification/Splash";
import Login from "./verification/Login";
import SignUp from "./verification/SignUp";

import MyPage from './inform/MyPage';
import MyPageSale from "./inform/MyPageSale";
import Information from './inform/Information';
import Reservation from './reservation/Reservation';
import TwoFourPage from './reservation/TwoFourPage';
import ResModal from './reservation/ResModal';
import ReviewMain from "./review/ReviewMain";

import Cart from './cart/Cart';
import CartBookmark from './cart/CartBookmark';
import CartOrder from './cart/CartOrder';

import Tournament from "./tournament/Tournament";
import TournamentVote from "./tournament/TournamentVote";
import TournamentVoteWin from "./tournament/TournamentVoteWin";

// 메뉴 페이지
import MenuMain from './menu/MenuMain';
import TodayA from './menu/menuPage/TodayA';
import TodayB from './menu/menuPage/TodayB';
import Pasta from './menu/pastaPage/Pasta';
import Katsu from './menu/katsuPage/Katsu';
import Masung from './menu/masungPage/Masung';
import Malatang from './menu/malatangPage/Malatang';
import Toast from './menu/toastPage/Toast';
import Cafe from './menu/cafePage/Cafe';

//메뉴 상세 페이지(파스타)
import Oil from './menu/pastaPage/Oil';
import Olio from './menu/pastaPage/Olio';
import Tomato from './menu/pastaPage/Tomato';
import Mushroom from './menu/pastaPage/Mushroom';
import Kimchi from './menu/pastaPage/Kimchi';
import Daepae from './menu/pastaPage/Daepae';
import Rose from './menu/pastaPage/Rose';
import Filaf from './menu/pastaPage/Filaf';
import Coke from './menu/pastaPage/Coke';
import Sprite from './menu/pastaPage/Sprite'

//메뉴 상세 페이지(토스트)
import Ham from './menu/toastPage/Ham';
import French from './menu/toastPage/French';
import French_drink from './menu/toastPage/French_drink';
import Cookie from './menu/toastPage/Cookie';
import Scone from './menu/toastPage/Scone';
import Biscuit from './menu/toastPage/Biscuit';
import Taiwan from './menu/toastPage/Taiwan';
import Prezle from './menu/toastPage/Prezle';
import Glaze from './menu/toastPage/Glaze';
import Barbarian from './menu/toastPage/Barbarian';
import Strawberry from './menu/toastPage/Strawberry';
import Choco from './menu/toastPage/Choco';
import Smore from './menu/toastPage/Smore';
import Tiramisu from './menu/toastPage/Tiramisu';

//메뉴 상세 페이지(군산카츠)
import Curry from './menu/katsuPage/Curry';
import Cheese from './menu/katsuPage/Cheese';
import KatsuCurry from './menu/katsuPage/KatsuCurry';
import Shrimp from './menu/katsuPage/Shrimp';
import Double from './menu/katsuPage/Double';
import Sale from './menu/katsuPage/Sale';

//메뉴 상세 페이지(마성떡볶이)
import AloneSet from './menu/masungPage/AloneSet';
import MasungSet from './menu/masungPage/MasungSet';
import FamilySet from './menu/masungPage/FamilySet';
import Bokki from './menu/masungPage/Bokki.jsx';
import Chicken_bokki from './menu/masungPage/Chicken_bokki';
import Ramen_masung from './menu/masungPage/Ramen_masung';
import Ramen_mandu from './menu/masungPage/Ramen_mandu';
import Ramen_cheese from './menu/masungPage/Ramen_cheese';
import Busan from './menu/masungPage/Busan';
import Red from './menu/masungPage/Red';
import Sundae from './menu/masungPage/Sundae';
import Spam from './menu/masungPage/Spam';
import Butter from './menu/masungPage/Butter';
import Chicken_bab from './menu/masungPage/Chicken_bab';
import Kimbab_masung from './menu/masungPage/Kimbab_masung';
import Kimbab_tuna from './menu/masungPage/Kimbab_tuna';
import Fried_vege from './menu/masungPage/Fried_vege';
import Fried_mandu from './menu/masungPage/Fried_mandu';
import Fried_pepper from './menu/masungPage/Fried_pepper';
import Fried_all from './menu/masungPage/Fried_all';
import Kim_roll from './menu/masungPage/Kim_roll';
import Fried_squid from './menu/masungPage/Fried_squid';

//메뉴 상세 페이지(마라탕)
import Mala_tang from './menu/malatangPage/Mala_tang';
import Mala_xiangguo from './menu/malatangPage/Mala_xiangguo';
import Small from './menu/malatangPage/Small';
import Big from './menu/malatangPage/Big';
import Tea_mala from './menu/malatangPage/Tea_mala';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Splash />} />             {/* 첫 번째 페이지 */} 
        <Route path='/login' element={<Login />} />
        <Route path='/review' element={<ReviewMain />} />   {/* 후기게시판 메인 페이지 */}
        <Route path='/signup' element={<SignUp />} />       {/* 회원가입 */}
        <Route path="/mypage" element={<MyPage />} />             {/* 마이페이지 - 학생/교직원 */}
        <Route path="/mypagesale" element={<MyPageSale />} />     {/* 마이페이지 - 판매자 */}
        <Route path='/information' element={<Information />} />   {/* 내 정보 */}
        <Route path='/reservation' element={<Reservation />} />   {/* 자리 예약 */}
        <Route path="/twofourpage" element={<TwoFourPage />} />
        <Route path="/resmodal" element={<ResModal />} />
        <Route path='/tournament' element={<Tournament />} />     {/* 토너먼트 */}
          <Route path="/tournament/votes" element={<TournamentVote />} />
          <Route path="/tournament/votes/win" element={<TournamentVoteWin />} />
        <Route path='/cart' element={<Cart />} />                 {/* 장바구니 */}
        <Route path='/bookmark' element={<CartBookmark />} />     {/* 장바구니 즐겨찾기 */}
        <Route path='/order' element={<CartOrder />} />           {/* 장바구니 결제창 */}
        <Route path='/menu' element={<MenuMain />} />             {/* 메뉴 메인 페이지 */}
        <Route path='/todayA' element={<TodayA />} />
        <Route path='/todayB' element={<TodayB />} />
        <Route path='/pasta' element={<Pasta />} />
        <Route path='/katsu' element={<Katsu />} />
        <Route path='/masung' element={<Masung />} />
        <Route path='/malatang' element={<Malatang />} />
        <Route path='/toast' element={<Toast />} />
        <Route path='/cafe' element={<Cafe />} />

        <Route path='/menu/고기리들기름파스타' element={<Oil />} />   {/* 파스타 페이지 */}
        <Route path='/menu/우삼겹알리올리오' element={<Olio />} />
        <Route path='/menu/클래식토마토파스타' element={<Tomato />} />
        <Route path='/menu/트러플버섯크림파스타' element={<Mushroom />} />
        <Route path='/menu/돼지김치파스타' element={<Kimchi />} />
        <Route path='/menu/대패삼겹크림파스타' element={<Daepae />} />
        <Route path='/menu/매콤로제파스타' element={<Rose />} />
        <Route path='/menu/김치삼겹필라프' element={<Filaf />} />
        <Route path='/menu/콜라' element={<Coke />} />
        <Route path='/menu/사이다' element={<Sprite />} />

        <Route path='/menu/햄치즈토스트' element={<Ham />} />        {/* 토스트 페이지 */}
        <Route path='/menu/프렌치토스트' element={<French />} />
        <Route path='/menu/프렌치토스트_음료수' element={<French_drink />} />
        <Route path='/menu/마카다미아쿠키' element={<Cookie />} />
        <Route path='/menu/스콘' element={<Scone />} />
        <Route path='/menu/비스킷슈' element={<Biscuit />} />
        <Route path='/menu/대만샌드위치' element={<Taiwan />} />
        <Route path='/menu/크림치즈프렛즐' element={<Prezle />} />
        <Route path='/menu/글레이즈도넛' element={<Glaze />} />
        <Route path='/menu/바바리안크림도넛' element={<Barbarian />} />
        <Route path='/menu/딸기크림도넛' element={<Strawberry />} />
        <Route path='/menu/초코케익링도넛' element={<Choco />} />
        <Route path='/menu/스모어쿠키' element={<Smore />} />
        <Route path='/menu/티라미수스틱케익' element={<Tiramisu />} />

        <Route path='/menu/카레덮밥' element={<Curry />} />           {/* 군산카츠 페이지 */}
        <Route path='/menu/고구마치즈돈까스' element={<Cheese />} />
        <Route path='/menu/돈카츠카레덮밥' element={<KatsuCurry />} />
        <Route path='/menu/새우카레덮밥' element={<Shrimp />} />
        <Route path='/menu/더블돈카츠' element={<Double />} />
        <Route path='/menu/할인행사_돈카츠' element={<Sale />} />
        
        <Route path='/menu/혼족세트' element={<AloneSet />} />        {/* 마성떡볶이 페이지 */}
        <Route path='/menu/마성세트' element={<MasungSet />} />
        <Route path='/menu/패밀리세트' element={<FamilySet />} />
        <Route path='/menu/마성떡볶이' element={<Bokki />} />
        <Route path='/menu/치킨꼬치떡볶이' element={<Chicken_bokki />} />
        <Route path='/menu/마성라면' element={<Ramen_masung />} />
        <Route path='/menu/만두라면' element={<Ramen_mandu />} />
        <Route path='/menu/치즈라면' element={<Ramen_cheese />} />
        <Route path='/menu/부산어묵' element={<Busan />} />
        <Route path='/menu/빨간어묵' element={<Red />} />
        <Route path='/menu/찰순대' element={<Sundae />} />
        <Route path='/menu/스팸참치덮밥' element={<Spam />} />
        <Route path='/menu/버터장조림덮밥' element={<Butter />} />
        <Route path='/menu/치킨마요덮밥' element={<Chicken_bab />} />
        <Route path='/menu/마성김밥' element={<Kimbab_masung />} />
        <Route path='/menu/참치김밥' element={<Kimbab_tuna />} />
        <Route path='/menu/야채튀김' element={<Fried_vege />} />
        <Route path='/menu/삼각잡채말이만두' element={<Fried_mandu />} />
        <Route path='/menu/고추튀김' element={<Fried_pepper />} />
        <Route path='/menu/모듬튀김' element={<Fried_all />} />
        <Route path='/menu/통통김말이' element={<Kim_roll />} />
        <Route path='/menu/오징어튀김' element={<Fried_squid />} />
        
        <Route path='/menu/한우사골마라탕' element={<Mala_tang />} />   {/* 마라탕 페이지 */}
        <Route path='/menu/마라샹궈' element={<Mala_xiangguo />} />
        <Route path='/menu/꿔바로우_소' element={<Small />} />
        <Route path='/menu/꿔바로우_대' element={<Big />} />
        <Route path='/menu/빙홍차' element={<Tea_mala />} />
      </Routes>
    </>
  );
}

export default App;
