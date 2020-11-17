import mysql from "mysql";
export const dbOptions = {
  host: "localhost",
  user: "root",
  password: "sehee",
  database: "sgproject",
}
export const connection = mysql.createConnection(dbOptions);
connection.connect(()=>{
    console.log("DB connect OK")
});
