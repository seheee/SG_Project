import mysql from "mysql";
export const dbOptions = {
  host: "localhost",
  user: "root",
  password: "960713hj",
  database: "sgproject",
}
const connection = mysql.createConnection(dbOptions);
connection.connect(()=>{
    console.log("DB connect OK")
});
