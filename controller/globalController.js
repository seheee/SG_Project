import { routes } from "../routes";
import {connection} from "../db"
import passport from "passport";
import "../config";
import crypto from "crypto"

//디비 작업은 이곳에서
export const homeController = (req, res) => {
    res.render("home.ejs", { title: "home" });

};
export const getLoginController = (req, res) => {
  
  res.render("singIn.ejs");
  //req == request 요청에서 아이디 비밀번호 받아오면
  //passport 인증을 수행 -- 디비정보 가져와서 일치시키는지 확인
  //get -> localstrategy -> post -> redirect(/getLogin) -> get 
};
export const postLoginController = passport.authenticate("local", {
  successRedirect: routes.home,
  failureRedirect: routes.login,
  failureFlash:false,
});
//local ---> localstrategy임

export const logoutController = (req, res) => {
  res.clearCookie('connect.sid')
  res.redirect(routes.home)
  //req==request 요청에서 회원가입 정보를 받아온다
  //디비서버에 insert 수행
};
export const getJoinController = (req, res) => {
  res.render("join.ejs");
  //겟 리퀘스트로 접근
};
export const postJoinController = async(req, res, next) => {
  const KEY = process.env.CRYPTO_KEY;
  console.log(KEY);
  //passport 로직 수행.
  const {body:{name,email,pwd}}=req;

  const cipher = crypto.createCipher('aes-256-cbc', KEY);
  let result = cipher.update(pwd, 'utf8', 'base64'); // 'HbMtmFdroLU0arLpMflQ'
  result += cipher.final('base64'); // 'HbMtmFdroLU0arLpMflQYtt8xEf4lrPn5tX5k+a8Nzw='
 ///암호화 작업

  const queryString = `insert into User(name,email,pwd) values ('${name}','${email}','${result}');`
  await connection.query(queryString, function (error, result) {
    if (error) throw error;
    console.log("회원가입 성공");
  });
  
  next(); //getLogin으로 가게한다.
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
  res.render("admin.ejs");
};
export const adminController = (req, res) => {
  res.render("admin.ejs");
};
