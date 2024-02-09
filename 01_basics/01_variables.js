const accountId = 144553
let accountEmail = "darshu@gmail.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState;

// accountId = 2  

accountEmail = "dj@dj.com"
accountPassword= "123"
accountCity = "Bengluru"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope 
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])