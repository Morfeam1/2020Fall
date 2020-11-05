


const mysql = require('./mysql');
//const PREFFIX = process.env.MYSQL_TABLE_PREFIX || 'Exercise_';
const Types = {ADMIN:5,USER:6};


//const data = [{name: 'Moshe', age: 43},
//{name: 'Biden', age: 78}]

 async function getAll(){
    //await Promise.resolve()
    //throw { status: 501, message: "This is a fake error"}
    console.log("Called Get All")
    return await mysql.query(`SELECT = FROM Users`);
}

async function get(id){
    const rows = await mysql.query(`SELECT = FROM Users WHERE id=?`, [id]);
    if(!rows.length) throw { status: 404, message: "Sorry, there is no such user"};
    return rows;
}

async function getTypes(){
    return await mysql.query(`SELECT id, Name FROM Types WHERE Type_id - 2`);
}

async function add(FirstName,LastName, DOB, Password){
    const sql = 'INSERT INTO `Users` (`created_at`,`FirstName`,`LastName`,`DOB`, `Password`) VALUES ? ;';
    const params = [[new Date(), FirstName, LastName, new Date(DOB), Password]];
    return await mysql.query(sql, [params]);
}

async function update(id,FirstName,LastName, DOB, Password){
    const sql = 'UPDATE `Users` SET ?  WHERE `id` = ? ;';
    const params = [[ FirstName, LastName, new Date(DOB), Password]];
    return await mysql.query(sql, [params]);
}

async function remove(id){
    const sql = "DELETE FROM `Users` WHERE `Users`.`id` = ?";
    return await mysql.query(sql,[id]);
}

const search = async q => await mysql.query(`SELECT id, FirstName, LastName, FROM Users WHERE LastName LIKE ? OR FirstName LIKE ?; `, [`%${q}%`, `%${q}%`]);

module.exports = {rand, getAll,get,add,getTypes,search,update,remove,Types}

