



const data = [{name: 'Moshe', age: 43},
{name: 'Biden', age: 78}]

 async function getAll(){
    //await Promise.resolve()
    //throw { status: 501, message: "This is a fake error"}
    console.log("Called Get All")
    return data;
}
function add(name,age){
    data.push({name,age});
}


module.exports = {rand, getAll,add, search: q => data.filter(x=> x.name == q)}

