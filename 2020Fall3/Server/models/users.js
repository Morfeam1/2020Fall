


const mysql = require('./mysql');

//const data = [{name: 'Moshe', age: 43},
//{name: 'Biden', age: 78}]

 async function getAll(){
    //await Promise.resolve()
    //throw { status: 501, message: "This is a fake error"}
    console.log("Called Get All")
    return await mysql.query(`SELECT = FROM Users`);
}

async function get(id){
    return await mysql.query(`SELECT = FROM Users WHERE id=?`, [id]);
}

async function getTypes(){
    return await mysql.query(`SELECT id, Name FROM Types WHERE Type_id - 2`);
}
function add(name,age){
    data.push({name,age});
}

const search = async q => await mysql.query(`SELECT id, FirstName, LastName, FROM Users WHERE LastName LIKE ? OR FirstName LIKE ?; `, [`%${q}%`, `%${q}%`]);

module.exports = {rand, getAll,get,add,getTypes,search}

