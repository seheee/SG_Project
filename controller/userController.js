import express from "express";
import {} from "../routes";
export const usersController = (req, res) => {
    //의미없는듯? 삭제할수도잇음
};
export const userDetailController = (req, res) => {
    //로그인한 유저의 상세 프로필 출력 --> 인증 정보 넘겨주어야함.
};
export const editProfileController = (req, res) => {
    //프로필 수정하는 화면
};
export const changePasswordController = (req, res) => {
    //비밀번호를 변경하는 창
};
export const shoppingBasketController = (req, res) => {
    //장바구니를 출력하는 
};

export const deliveryCheckController = (req, res) => {
    //전체 주문 상품에 대한 배송상황을 보여준다
}
export const detailDeliveryCheckController = (req, res) => {
    //전체 -> 클릭 -> 상세 배송상황을 볼 수 있다.
};
