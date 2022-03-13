var userData = require('../../json/userData.json');
var fs = require('fs');
module.exports = function(){
    //save user data
    fs.writeFile('./json/userData.json', JSON.stringify(userData, null, "\t"), (err) => {if(err != null) console.log(err)});
}