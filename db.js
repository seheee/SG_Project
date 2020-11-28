import mysql from "mysql";
export const dbOptions = {
  host: "localhost",
  user: "root",
  password: "960713hj",
  database: "sgproject",
  multipleStatements:true
  
}
export const connection = mysql.createConnection(dbOptions);
connection.connect(()=>{
    console.log("DB connect OK")
});
