import express from "express";
import {} from "../routes";
//디비 작업은 이곳에서
export const homeController = (req, res) => {
  res.render("home.html");
};
export const getLoginController = (req, res) => {
  res.render("singIn.html");
  //req == request 요청에서 아이디 비밀번호 받아오면
  //passport 인증을 수행 -- 디비정보 가져와서 일치시키는지 확인
};
export const postLoginController = (req,res)=>{
  console.log(req);
}
export const logoutController = (req, res) => {
  res.render("singIn.html");
  //req==request 요청에서 회원가입 정보를 받아온다
  //디비서버에 insert 수행
};
export const getJoinController = (req, res) => {
  res.render("join.html");
  //겟 리퀘스트로 접근
};
export const postJoinController = (req,res,next)=>{
  //passport 로직 수행.

  next();//postLogin (로그인 시킴)
}
export const searchController = (req, res) => {
  res.render("singIn.html");
};
export const uploadController = (req, res) => {
  res.render("singIn.html");
};
