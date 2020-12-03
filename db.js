import mysql from "mysql";
import "./config";
const DB_PW = process.env.DB_PW;
export const dbOptions = {
  host: "localhost",
  user: "root",
  password: DB_PW,
  database: "sgproject",
  multipleStatements:true
  
}
export const connection = mysql.createConnection(dbOptions);
connection.connect(()=>{
    console.log("DB connect OK")
});
