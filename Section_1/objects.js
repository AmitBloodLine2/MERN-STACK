const user = { name : 'amit', email : 'bloodline9026@gmail.com', password : 'wasd4343' };
console.log(user);

console.log(user.name);
console.log(user['password']);

user.password = 'gaara';
console.log(user);

console.log(user);
console.log( Object.keys(user) );
console.log( Object.values(user) );

const smartphone = {
    brand : 'Samsung',
    model : 'Galaxy s21',
    price : '5600',
    color : ['white', 'black', 'red']
};

console.log( smartphone.color[2] );

const phoneList = [
    { brand : 'Samsung', model : 'Galaxy s21', price : '5600', color : ['white', 'black', 'red'] },
    { brand : 'Mi', model : '10 Pro', price : '25000', color : ['silver', 'black'] },
    { brand : 'vivo', model : 'v7', price : '23000', color : ['gray', 'blue', 'black'] },
    { brand : 'oppo', model : 'neo 11', price : '36000', color : ['black', 'red'] },
]

console.log(phoneList[0]);

console.log( phoneList[0].color[0] );
console.log( phoneList[0].price );
console.log( phoneList[0].color[1]);

//syntax to access 2nd color of third phone

console.log( phoneList[2].color[1]);

phoneList[3].color.push('skyblue');
console.log(phoneList);