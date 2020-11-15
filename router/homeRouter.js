import express from "express";
import {
  homeController,
  getJoinController,
  postJoinController,
  getLoginController,
  postLoginController,
  logoutController,
  searchController,
  uploadController,
  adminController,
} from "../controller/globalController";
import { routes } from "../routes";

export const homeRouter = express.Router();

homeRouter.get(routes.home, homeController);
homeRouter.get(routes.logout, logoutController);
homeRouter.get(routes.login, getLoginController);
homeRouter.post(routes.login, postLoginController);//로그인 시 post로
homeRouter.get(routes.join, getJoinController);
homeRouter.post(routes.join, postJoinController,getLoginController);// post join요청 -> post Login 로직수행
homeRouter.get(routes.search, searchController);
homeRouter.post(routes.upload, uploadController);
homeRouter.get(routes.admin, adminController);
