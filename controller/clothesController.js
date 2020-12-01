import express, { query } from "express";
import {routes} from "../routes";
import {connection} from "../db"

//디비 작업은 이곳에서
export const clothesController = (req, res) => {
    //옷들 렌더링하는 html
};
export const clothesOuterController = (req, res) => {
    //Outer라우터로 이동하면 Outer 프로덕트만 보여주는 html렌더링
    var pageSize = 16;
    var pageListSize = 0;
    var totalCnt = 0;
    var queryString = 'select count(*) as cnt from product where category="outer"';
    connection.query(queryString, function(error, data) {
        totalCnt = data[0].cnt;
        var curPage = req.params.cur;
        var pageListSize = Math.ceil(totalCnt / pageSize);
        var limit = (curPage - 1) * pageSize;
        var result2 = {
            "pageSize": pageSize,
            "pageListSize": pageListSize,
            "totalCnt": totalCnt,
        }
        queryString = 'select * from product where category="outer" order by idx desc limit ?,?'
        connection.query(queryString, [limit, pageSize], function(err, result) {
            res.render('products.ejs', {
                data: result,
                page: result2
            });
        })  
    })
};
export const clothesTopController = (req, res) => {
    //Top
    var pageSize = 16;
    var pageListSize = 0;
    var totalCnt = 0;
    var queryString = 'select count(*) as cnt from product where category="top"';
    connection.query(queryString, function(error, data) {
        totalCnt = data[0].cnt;
        var curPage = req.params.cur;
        var pageListSize = Math.ceil(totalCnt / pageSize);
        var limit = (curPage - 1) * pageSize;
        var result2 = {
            "pageSize": pageSize,
            "pageListSize": pageListSize,
            "totalCnt": totalCnt,
        }
        queryString = 'select * from product where category="top" order by idx desc limit ?,?'
        connection.query(queryString, [limit, pageSize], function(err, result) {
            res.render('products.ejs', {
                data: result,
                page: result2
            });
        })  
    })
};
export const clothesBottomController = (req, res) => {
    //Bottom
    var pageSize = 16;
    var pageListSize = 0;
    var totalCnt = 0;
    var queryString = 'select count(*) as cnt from product where category="bottom"';
    connection.query(queryString, function(error, data) {
        totalCnt = data[0].cnt;
        var curPage = req.params.cur;
        var pageListSize = Math.ceil(totalCnt / pageSize);
        var limit = (curPage - 1) * pageSize;
        var result2 = {
            "pageSize": pageSize,
            "pageListSize": pageListSize,
            "totalCnt": totalCnt,
        }
        queryString = 'select * from product where category="bottom" order by idx desc limit ?,?'
        connection.query(queryString, [limit, pageSize], function(err, result) {
            res.render('products.ejs', {
                data: result,
                page: result2
            });
        })  
    })
};
export const clothesShoesController = (req, res) => {
    //Shoes
    var pageSize = 16;
    var pageListSize = 0;
    var totalCnt = 0;
    var queryString = 'select count(*) as cnt from product where category="shoes"';
    connection.query(queryString, function(error, data) {
        totalCnt = data[0].cnt;
        var curPage = req.params.cur;
        var pageListSize = Math.ceil(totalCnt / pageSize);
        var limit = (curPage - 1) * pageSize;
        var result2 = {
            "pageSize": pageSize,
            "pageListSize": pageListSize,
            "totalCnt": totalCnt,
        }
        queryString = 'select * from product where category="shoes" order by idx desc limit ?,?'
        connection.query(queryString, [limit, pageSize], function(err, result) {
            res.render('products.ejs', {
                data: result,
                page: result2
            });
        })  
    })
};
export const clothesPopularController = (req, res) => {
    //Popular
    var data = {};
    var queryString = 'select * from product where category="outer" order by likeCnt desc limit 8';
    // connection.query(queryString, function (error, result) {
    //    res.render('products.ejs', {data: result});
    // })
    connection.query(queryString, function (error, result) {
        data.data_outer = result;
    })
    var queryString = 'select * from product where category="top" order by likeCnt desc limit 8';
    connection.query(queryString, function (error, result) {
        data.data_top = result;
    })
    var queryString = 'select * from product where category="bottom" order by likeCnt desc limit 8';
    connection.query(queryString, function (error, result) {
        data.data_bottom = result;
    })
    var queryString = 'select * from product where category="shoes" order by likeCnt desc limit 8';
    connection.query(queryString, function (error, result) {
        data.data_shoes = result;
        res.render('popular.ejs', {datas: data});
    })
};

export const clothesSaleController = (req, res) => {
    //Sale
    var queryString = 'select * from product order by discount desc limit 24';
    connection.query(queryString, function (error, result) {
       res.render('sale.ejs', {data: result});
    })
};
export const clothesDetailController = async(req, res) => {
    //옷 각개로 상세하게 보여주는 화면 html 렌더링
    
    const {url}=req;
    const productId = url.split('/')[3];
    console.log(productId);
    const queryString = `select * from product where idx=${productId}`
    console.log()
    await connection.query(queryString,(err,result)=>{
        if(err) throw err;
        console.log("detail");
        res.render('itemDetail.ejs',{result:result})
    })
};
export const insertCartController = async(req,res)=>{
    const {url}=req;
    const {
        user: { id },
      } = req;
      const productId = url.split('/')[3];
      const queryString = `insert into cart(user_id,product_idx) values(${id},${productId});`
      await connection.query(queryString,(err,result)=>{
          if(err)throw err
          console.log("insert succeess")
        
        res.redirect(routes.clothesDetail(productId))
    })
}
