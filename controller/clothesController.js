import express, { query } from "express";
import {} from "../routes";
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
    var queryString = 'select count(*) as cnt from product where category="'+req.params.category+'"';
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
        queryString = 'select * from product where category="'+req.params.category+'" order by idx desc limit ?,?'
        connection.query(queryString, [limit, pageSize], function(err, result) {
            res.render('products.ejs', {
                data: result,
                pasing: result2
            });
        })  
    })
};
export const clothesTopController = (req, res) => {
    //Top
    var queryString = 'select * from product where category="top" order by idx desc';
    connection.query(queryString, function (error, result) {
        console.log(result);
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
export const clothesDetailController = (req, res) => {
    //옷 각개로 상세하게 보여주는 화면 html 렌더링
};

