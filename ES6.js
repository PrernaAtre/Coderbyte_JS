/*
var numbers = [1,2,3,4,5];
let sum=0;
numbers.forEach(function(number)
{
    sum += number;
})
console.log(sum);*/
/*
var numbers = [1,2,3];
var double_number = [];
var double = numbers.map(function(number)
{
    return number*2;
})
console.log(double);
*/
/*
var cars = [
    {model : "Buick", price : 'cheap'},
    {model : "BMW", price : 'expensive'},
]
prices = cars.map(function(car)
{
    return car.price;
})
console.log(prices);
*/
products = [
    {name : "mango",type:"fruit"},
    {name : "ladiefinger",type:"veg"},
    {name : "banana",type:"fruit"},
    {name : "cabage",type:"veg"},
]
/*filtered_data = products.filter(function(product)
{
    return product.type === 'fruit';
})
console.log(filtered_data);
*/
/*
product = products.find(function(product)
{
    return product.name === 'cabage'
})
console.log(product);*/
/*
var computers  = [
    {name : "Apple",ram : 24},
    {name : "Compag",ram : 40},
    {name : "Acer",ram : 64},
]

res = computers.every(function(comp)
{
    return comp.ram > 16;
})
console.log(res);
*/
/*
let numbers = [1,2,3,4,5];
let sum = 0;
let res = numbers.reduce(function(num,sum)
{
    return num + sum;
},0)
console.log(res);
*/
/*
function balancedPara(str)
{
    return str.split('').reduce(function(previous, char) 
    {
        if(char == '(')
        {
            return ++previous;
        }
        else
        {
            return --previous;
        }
        return previous;
    },0)
    
}
console.log(balancedPara('(())'));
*/
/*
const year = new Date().getFullYear();
console.log(`The year is ${year}`);
*/
/*
const add = (a,b) =>
{
    return a+b;
}
console.log(add(1,2));
*/
/*
function createBookShop(inventory)
{
    return{
        inventory : inventory,
        inventoryValue : function()
        {
            return this.reduce((total, book) => total + book.price, 0)
        }
    }
}
const inventory = [
    {title : 'Harry Potter', price : 10},
    {title : 'John', price : 20},
]
const bookShop = createBookShop(inventory);
console.log(bookShop);
*/
/*
function saveFile(url,data)
{
    $.ajax({
        url,
        data,
        method : 'POST'
    });
}
const url = "http://fileupload.com";
const data = {color : 'red'};
saveFile(url,data);
*/
/*
function add(...numbers)
{
   return  numbers.reduce((sum, number)=>
    {
        return sum + number;
    },0)
}
console.log(add(1,2,3,4,5,6,7,8,9))
*/
/*
var savedFile = 
{
    extension : 'jpg',
    name  : 'repost',
    size : 14040
};

function fileSummary({name, extension, size})
{
    return `the file ${name}.${extension} is of size ${size}`;
}
console.log(fileSummary(savedFile));
*/
/*
const companies = [
    'google',
    'facebook',
    'uber'
];
const [name, name2, name3] = companies;
console.log(name2);
*/
class Car{
    constructor(options)
    {
        this.title = options.title;
    }
    drive()
    {
        return 'vroom;'
    }
}
const car = new Car({title : 'Toyato'});
console.log(car.drive());