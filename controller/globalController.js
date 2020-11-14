import { routes } from "../routes";
import { connection } from "../app";
import passport from "passport";
//디비 작업은 이곳에서
export const homeController = (req, res) => {
    res.render("home.ejs", { title: "home" });

};
export const getLoginController = (req, res) => {
  var userId = "";
  if (req.cookies["loginId"] !== undefined) {
    console.log(req.cookies["loginId"]);
    userId = req.cookies["rememberId"];
  }
  res.render("singIn.ejs");
  //req == request 요청에서 아이디 비밀번호 받아오면
  //passport 인증을 수행 -- 디비정보 가져와서 일치시키는지 확인
};
export const postLoginController = passport.authenticate("local", {
  successRedirect: routes.home,
  failureRedirect: routes.login,
  failureFlash: false,
});
//local ---> localstrategy임

export const logoutController = (req, res) => {
  res.render("singIn.html");
  //req==request 요청에서 회원가입 정보를 받아온다
  //디비서버에 insert 수행
};
export const getJoinController = (req, res) => {
  res.render("join.html");
  //겟 리퀘스트로 접근
};
export const postJoinController = (req, res, next) => {
  //passport 로직 수행.

  next(); //postLogin (로그인 시킴)
};
export const searchController = (req, res) => {
  res.render("singIn.html");
};
export const uploadController = (req, res) => {
  var queryString =
    'insert into product(category, name, price, discount, gender, stock, likeCnt, main_img, detail_img) values("' +
    req.body.category +
    '","' +
    req.body.name +
    '",' +
    req.body.price +
    "," +
    req.body.discount +
    ',"' +
    req.body.gender +
    '",' +
    req.body.stock +
    "," +
    req.body.likeCnt +
    ',"' +
    req.body.main_img +
    '","' +
    req.body.detail_img +
    '");';

  connection.query(queryString, function (error, result) {
    if (error) throw error;
    console.log("Upload Successful");
  });
  res.render("admin.html");
};
export const adminController = (req, res) => {
  res.render("admin.html");
};
