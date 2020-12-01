import express from "express";
import { routes } from "../routes";
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
    if (error) throw error;

    res.render("mypage.ejs", { orderCount: result.length });
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
    if (productQueryString == "") {
      res.render("cart.ejs", { result, length: result.length });
    } else {
      await connection.query(productQueryString, async (error, result) => {
        if (error) throw error;
        console.log(result.length);
        res.render("cart.ejs", { result, length: result.length }); //carts 넣어주기
        
      });
    }
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
export const getOrderController = async (req, res) => {
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
    if (productQueryString == "") {
      res.render("order.ejs", { result, length: result.length });
    } else {
      await connection.query(productQueryString, async (error, result) => {
        if (error) throw error;

        res.render("order.ejs", { result, length: result.length, id });
      });
    }
  });
};
export const postOrderController = async(req, res) => {

  const {
    user: { id },
  } = req;
  var orderr = {
    user_id: id,
    name: req.body.Name ? req.body.Name : "a",
    email: req.body.email ? req.body.email : "a",
    address: req.body.address ? req.body.address : "a",
    address2: req.body.address2 ? req.body.address2 : "a",
    card_name: req.body.cc_name ? req.body.cc_name : "a",

    card_num: req.body.cc_number ? req.body.cc_number : "a",
    expiration: req.body.cc_expiration ? req.body.cc_expiration : "a",
    cvv: req.body.cc_cvv ? req.body.cc_cvv : "a",
    product_idx: 1,
    product_cnt: 123,
    order_status: "success",
    order_date: "abc",
  };

  const idQueryString = `select * from cart where user_id = ${id}`;

  await connection.query(idQueryString, async (error, result) => {
    if (error) throw error;
    let productQueryString = "";
    result.forEach(
      (item) =>
        (productQueryString += `select * from product where idx=${item.product_idx};`)
    );
    const cartData = result;
    console.log(cartData);
    if (productQueryString == "") {
      res.redirect("home.ejs")
    } else {
      await connection.query(productQueryString, async (error, result) => {
        if (error) throw error;
        let ordersQuery = ""
        result.forEach((item)=>(ordersQuery += `insert into orders(user_id,name,email,address,address2,card_name,card_num,expiration,cvv,product_idx,product_cnt,order_status,order_date) values(${id},'${orderr.name}','${orderr.email}','${orderr.address}','${orderr.address2}','${orderr.card_name}','${orderr.card_num}','${orderr.expiration}','${orderr.cvv}',${item[0].idx},1,'${orderr.order_status}','${orderr.order_date}');`))
        
        await connection.query(ordersQuery,async(error,result)=>{
          if(error)throw error;
          console.log("insert success")
          let cartsQuery = "";
          cartData.forEach((item)=>(cartsQuery += `delete from cart where  idx= ${item.idx};`))
          await connection.query(cartsQuery,async(error,result)=>{
            if(error) throw error
            console.log("delete success")
            res.redirect(routes.home)
          })
        })

      });
    }
  });
  // var queryString = "INSERT INTO orders SET ? ";

  // connection.query(queryString, orderr, function (error, result) {
  //   if (error) throw error;
  //   console.log("order complete");
  // });

  // res.render("home");


};
