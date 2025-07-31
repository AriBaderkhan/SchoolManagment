const pool = require('../db_connection')
const  {v4:uuidv4} = require('uuid')

const registerUser = (username, email , hashedPassword , age , address , role , callback)=>{
const id = uuidv4();
const query = `INSERT INTO users (id,username,email,password,age,address,role) VALUES ($1,$2,$3,$4,$5,$6,$7)`;
const values = [id,username,email,hashedPassword,age,address,role];
pool.query(query,values,callback)
}

const loginUser = (email, callback)=>{
const query = `SELECT * FROM users WHERE email=$1`;
const value = [email];
pool.query(query,value,callback)
}

module.exports = {registerUser , loginUser}