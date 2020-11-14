import passport, { serializeUser } from "passport";
import local from "passport-local";
import mysql from "mysql";
import { dbOptions } from "./db";

const LocalStrategy = local.Strategy;
const connectedMysql = mysql.createConnection(dbOptions)
passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "pwd",
    },
    function (username, password, done) {
      var sql = "SELECT * FROM USER WHERE EMAIL=? AND PWD=?";
      connectedMysql.query(sql, [username, password], function (err, result) {
        if (err) console.log("mysql 에러");

        // 입력받은 ID와 비밀번호에 일치하는 회원정보가 없는 경우
        if (result.length === 0) {
          console.log("결과 없음");
          return done(null, false, { message: "Incorrect" });
        } else {
          console.log("로그인 성공")
          var json = JSON.stringify(result[0]);
          var userinfo = JSON.parse(json);
          return done(null, userinfo); // result값으로 받아진 회원정보를 return해줌
        }
      });
    }
  )
);
passport.serializeUser(function (user, done) {
  done(null, user.email);
});

passport.deserializeUser(function (id, done) {
  var userinfo;
  var sql = "SELECT * FROM USER WHERE EMAIL=?";
  connectedMysql.query(sql, [id], function (err, result) {
    if (err) console.log("mysql 에러");

    var json = JSON.stringify(result[0]);
    userinfo = JSON.parse(json);
    done(null, userinfo);
  });
  //id === email
});


//serializeUser --> 로그인 성공
//deserializeUSer --> 요청시마다