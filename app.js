import express from "express";
import helmet from "helmet"; //미드웨어 헬멧 임포트
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router/userRouter";
import { homeRouter } from "./router/homeRouter";
import { clothesRouter } from "./router/clothesRouter";
import {routes} from "./routes"
import consolidate from "consolidate"//html engine

//express 객체 받아오기
const app = express();

//PORT dotenv에서 받아오기
//미드웨어들 사용
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("dev"));
app.set('views', __dirname + '/views');
app.engine('html',consolidate.mustache)
app.set('view engine','html')
// app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


//홈 라우터 관리


app.use(routes.home,homeRouter)
app.use(routes.home,userRouter)
app.use(routes.home,clothesRouter)

export default app;