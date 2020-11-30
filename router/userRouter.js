import express from "express";
import {
  changePasswordController,
  deliveryCheckController,
  getOrderController,
  postOrderController,
  detailDeliveryCheckController,
  editProfileController,
  shoppingBasketController,
  userDetailController,
  usersController,
} from "../controller/userController";
import { routes } from "../routes";

export const userRouter = express.Router();

userRouter.get(routes.users, usersController);
userRouter.get(routes.userDetail(), userDetailController); //id인자로 넣어준다
userRouter.get(routes.editProfile, editProfileController); //마찬가지
userRouter.get(routes.changePassword, changePasswordController); //비밀번호 변경 창
userRouter.get(routes.shoppingBasket(), shoppingBasketController); //장바구니
userRouter.get(routes.deliveryCheck(), deliveryCheckController); // 전체 상품 배송조회 상황
userRouter.get(routes.detailDeliveryCheck, detailDeliveryCheckController); //상세 상품 배송조회
userRouter.get(routes.insertCart);

userRouter.get(routes.order, getOrderController);
userRouter.post(routes.order, postOrderController);
