import express from "express";
import helmet from "helmet"; //미드웨어 헬멧 임포트
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router/userRouter";
import { homeRouter } from "./router/homeRouter";
import { clothesRouter } from "./router/clothesRouter";
import { routes } from "./routes";
import session from "express-session";
import "./passport";
import "./config";
import { dbOptions } from "./db";
import passport from "passport";
import { localsMiddleware } from "./localMiddleware";

var MYSQLStore = require("express-mysql-session")(session);
//express 객체 받아오기
const app = express();
const SECRET_KEY = process.env.SECRET_KEY;
//PORT dotenv에서 받아오기
//미드웨어들 사용
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));
app.set("views", __dirname + "/views");
// app.engine("html", consolidate.mustache);
// app.set("view engine", "html");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(
  session({
    secret: SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    store: new MYSQLStore(dbOptions)
  })
);
app.use(passport.initialize());//express구동시마다 passport가 개입
app.use(passport.session());//session --> 
app.use(localsMiddleware);

//홈 라우터 관리

app.use(routes.home, homeRouter);
app.use(routes.home, userRouter);
app.use(routes.home, clothesRouter);

export default app;

//NodeJs --> 서버의 구동방식
//express -> use (라우터, 라우터 처리함수) === app.use(routes.home,homeRouter)
//use -> router함수 -> 각 라우터별로 -> Controller를 달아서 처리한다
// app -> router -> controller 이런 방향으로 데이터 처리 이루어짐 (MVC패턴을 구현한것임)
