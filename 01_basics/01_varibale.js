const accountId=1445
let accountEmail="hietst@gmaill.com"
var accountPassword="12323"
accountCity="Delhi"

// accountId=1000 not allowed as const cannot be reassigned
console.log(accountId);
accountEmail="jaggu@gmail.com"
accountPassword="123456"
accountCity="Mumbai"
let accountSalary;

console.log(accountId);


/*
prefer not use var as it has function scope and block scope is preferred
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountSalary]);
