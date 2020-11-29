import express from "express";
import {} from "../routes";
import { connection } from "../db";
export const usersController = (req, res) => {
  //의미없는듯? 삭제할수도잇음
};
export const userDetailController = async (req, res) => {
  const {
    user: { id },
  } = req;
  const idQueryString = `select * from orders where user_id = ${id}`;
  await connection.query(idQueryString, async (error, result) => {
    if(error) throw error;
    
    res.render("mypage.ejs",{orderCount:result.length});

  });

  //로그인한 유저의 상세 프로필 출력 --> 인증 정보 넘겨주어야함.
};
export const editProfileController = (req, res) => {
  //프로필 수정하는 화면
};
export const changePasswordController = (req, res) => {
  //비밀번호를 변경하는 창
};

export const shoppingBasketController = async (req, res) => {
  const {
    user: { id },
  } = req;
  const idQueryString = `select * from cart where user_id = ${id}`;
  await connection.query(idQueryString, async (error, result) => {
    if (error) throw error;
    let productQueryString = "";
    result.forEach(
      (item) =>
        (productQueryString += `select * from product where idx=${item.product_idx};`)
    );
    await connection.query(productQueryString, async (error, result) => {
      if (error) throw error;

      res.render("cart.ejs", { result, length: result.length }); //carts 넣어주기
    });
  });
  //장바구니를 출력하는
};

export const deliveryCheckController = async (req, res) => {
  const {
    user: { id },
  } = req;
  console.log(id);
  const idQueryString = `select * from orders where user_id = ${id}`;
  await connection.query(idQueryString, async (error, result) => {
    if (error) throw error;
    let ordersQueryString = "";
    const orders = result;
    result.forEach(
      (item) =>
        (ordersQueryString += `select * from product where idx=${item.product_idx};`)
    );
    await connection.query(ordersQueryString, async (error, result) => {
      if (error) throw error;
      console.log(result);
      console.log(orders);
      res.render("delivery.ejs", {
        result,
        orders: orders,
        length: result.length,
      }); //carts 넣어주기
    });
  });
  //전체 주문 상품에 대한 배송상황을 보여준다
};
export const detailDeliveryCheckController = (req, res) => {
  //전체 -> 클릭 -> 상세 배송상황을 볼 수 있다.
};
