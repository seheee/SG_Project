import express from "express";
import { routes } from "../routes";
import {connection} from "../db";

//디비 작업은 이곳에서
export const clothesController = (req, res) => {
    //옷들 렌더링하는 html
};
export const clothesOuterController = (req, res) => {
    //Outer라우터로 이동하면 Outer 프로덕트만 보여주는 html렌더링
    var queryString = 'select * from product where category="outer" order by idx desc';
    connection.query(queryString, function (error, result) {
       res.render('products.ejs', {data: result});
    })
};
export const clothesTopController = (req, res) => {
    //Top
    var queryString = 'select * from product where category="top" order by idx desc';
    connection.query(queryString, function (error, result) {
       res.render('products.ejs', {data: result});
    })
};
export const clothesBottomController = (req, res) => {
    //Bottom
    var queryString = 'select * from product where category="bottom" order by idx desc';
    connection.query(queryString, function (error, result) {
       res.render('products.ejs', {data: result});
    })
};
export const clothesShoesController = (req, res) => {
    //Shoes
    var queryString = 'select * from product where category="shoes" order by idx desc';
    connection.query(queryString, function (error, result) {
       res.render('products.ejs', {data: result});
    })
};
export const clothesPopularController = (req, res) => {
    //Popular
    var queryString = 'select * from product order by likeCnt desc limit 10';
    connection.query(queryString, function (error, result) {
       res.render('products.ejs', {data: result});
    })
};

export const clothesDetailController = async(req, res) => {
    //옷 각개로 상세하게 보여주는 화면 html 렌더링
    const {url}=req;
    const productId = url.split('/')[2];
    const queryString = `select * from Product where idx=${productId}`
    await connection.query(queryString,(err,result)=>{
        if(err) throw err;
        res.render('itemDetail.ejs',{result:result})
    })
};
export const insertCartController = async(req,res)=>{
    const {url}=req;
    const {
        user: { id },
      } = req;
    const productId = url.split('/')[2];
    const queryString = `insert into cart(user_id,product_idx) values(${id},${productId});`
    await connection.query(queryString,(err,result)=>{
        if(err)throw err
        
        res.redirect(routes.clothesDetail(productId))
    })
}
