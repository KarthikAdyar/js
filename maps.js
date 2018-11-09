var john={
    name:'I am john',
    age:24,
    isActive:true
}

var mary={
    name:'I am Mary',
    age:25,
    isActive:true
}

var sam={
    name:'I am Sam',
    age:30,
    isActive:false
}
let users=new Map();



users.set('John',john)
//users.set('Mary',mary)
//users.set('Sam',sam)
/*
console.log(users.keys())
console.log(users.values())
console.log(users.entries())*/

for (const value of users.values(john)) {
    console.log(value.name)
}

for (const [key,value] of users.entries()) {
    console.log(key+'='+value)
    
}