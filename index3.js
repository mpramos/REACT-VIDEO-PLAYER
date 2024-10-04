const number=[0,3.14,9.81]
// var let const
console.log(number);
const diferentesTipos=['naranja',23,45,true,['😁','👈'],{name:'Juan',age:34}]
console.log(diferentesTipos.length);
console.log(frutas.length);

var nombre='Juan' //string
console.log(typeof nombre);
nombre='Juanita'
console.log(nombre);
var nombre='Rodrigo'
console.log(nombre);

correo='nana@gmail.com'
console.log(correo);
correo='nana1@gmail.com'
console.log(correo);



let nombre3='Luis'
console.log(typeof nombre3);
nombre3='Luisa'
{
    // let nombre3="Juan"
    console.log(nombre3);
}
console.log(nombre3);


const nombre2='Juana'
// nombre2='Juan'
console.log(typeof nombre2);
console.log( nombre2);



let js='JavaScript'
const charsInJavaScript = js.split('')
console.log(charsInJavaScript);

let companiesString = 'Facebook,Google,Microsoft,Apple, Oracle,Amazon'
let companies= companiesString.split(',')
console.log(companies);
let txt='I love teaching!. I teach HTML, CSS , JS, React'
const words=txt.split(' ')
console.log(words);

const frutas=['naranja','mango','limon']
console.log(frutas.reverse());


let primeraFruta= frutas[0]
console.log(primeraFruta);
// frutas.pop()
frutas.shift()
frutas.push('piña')
frutas.unshift('manzana')
console.log(frutas);

const firstList=[1,2,3]
const secondList=[4,5,6]
const thirdList= firstList.concat(secondList)
console.log(thirdList);
console.log(thirdList.length);

const numbers =[1,2,3,4,5]
// console.log(numbers.toString());

console.log(numbers.splice());
console.log(numbers.splice(0,3));







console.log(numbers.join());
console.log(numbers.join(''));
console.log(numbers.join(' '));
console.log(numbers.join(', '));


console.log(numbers.indexOf('😁'));
console.log(numbers.lastIndexOf('😁'));
console.log(numbers.includes(-1));
let num=3
console.log(Array.isArray(num));

const webTech=[
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
console.log(webTech.sort());

let num1=3
if (num1>0) {
    console.log(`${num1} es un numero positivo`);
}

let a=0
if (a>0) {
    console.log(`${a} es un numero positivo`);
    
} else if(a<0){
    console.log(`${a} es un numero negativo`);
    
}else if(a==0){
    
    console.log(`${a} es un numero cero`);
} else {
    console.log(`${a} no es un numero`);
}
for (let i = 0; i < 5; i++) {
    console.log(i);
    
}

let emojis=['😎','😁','😀']
for (const emoji of emojis) {
    console.log(emoji);
}

let foods=['🍞','🍔','🍪']
let [pan,hamburguesa,galleta]=foods
console.log(pan);
console.log(galleta);

let firstFood=foods[0]
console.log(firstFood);

// let foodsEmoji=foods.map( food=> food+'😎')
// console.log(foodsEmoji);
console.log(foods);

let filterFoods= foods.filter(food=>typeof food=='string')
console.log(filterFoods);

function sumar(a,b) {
    console.log(a+b);
}
sumar(3,4)

const suma=(a,b)=>{ return a+b}
console.log(suma(4,5));
let user={
    foto:'🧑',
    name:'Jorge',
    age:30
}
 
// let {foto:f,name:n,age:ag}=user
// console.log(f);
let mostrarNombreEdad=({name:n,age:e})=>{
    console.log(n);
    console.log(e);
}
mostrarNombreEdad(user)

let nums1=[1,2,3,4,5]
let nums2=[6,7,8,9,10]

let nums3=[nums1,...nums2]
console.log(nums3);


















console.log('fin del repaso de javascript');
