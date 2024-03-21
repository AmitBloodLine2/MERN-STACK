const nums = [3, 5, 8, 12, 6, 7, 9];
const sqrt = nums.map( (n) => { return n**2 } );
console.log(sqrt);

const prices = ['$46.234', '&879.99', '$9274.1', '$999.999'];
// [46, 879, 9724, 999]

console.log( parseInt('$46.324'.slice(1)) );

const newArr = prices.map((x) => { return parseInt(x.slice(1))});
console.log(newArr);

//find 10% discount on all prices

const discounted = newArr.map( (x)=>{ return x*0.9} );
console.log(discounted);

const names = ['warlord ct', 'itachi uchiha', 'samhil mw'];

//['warlord', 'itachi', 'samhil']

console.log('warlord ct'.split(' ')[0]);

const oddNums = nums.filter( (n) => { return n%2!==0 } );
console.log(oddNums);

// less than 5000 and greater than 1000

const prices2 = [740, 920, 450, 3500, 6400, 7200, 120 ];

const newPrices2=prices2.filter( (n)=> {
    if (n>1000 && n<5000) return n
})
console.log(newPrices2);

const phoneList = [
    { brand : 'Samsung', model : 'Galaxy s21', price : '56000', color : ['white', 'black', 'red'] },
    { brand : 'Mi', model : '10 Pro', price : '25000', color : ['silver', 'black'] },
    { brand : 'vivo', model : 'v7', price : '23000', color : ['gray', 'blue', 'black'] },
    { brand : 'oppo', model : 'neo 11', price : '36000', color : ['black', 'red'] },
];

const nicePhones = phoneList.filter ((phone) => {
    return (phone.prices > 30000 )
})

console.log(nicePhones);

const samsungPhones = phoneList.filter (( phone) => { return phone.prices > 30000});

console.log(samsungPhones);

const redPhones = phoneList.filter( (phone) => { return phone.color.includes('red')});
console.log(redPhones);

