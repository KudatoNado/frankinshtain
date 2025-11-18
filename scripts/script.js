

console.log('ПРивет, мир');
let message;

message ='hello!';

alert(message);



let favoriteFood = 'птицца';
console.log(favoriteFood);
   favoriteFood = 'суши';
   console.log(favoriteFood);
   const planet = "Земля";
   console.log(planet);





const pi = 3.14;

console.log(pi);

let userName;
let test123;

let $ = 1;
let P_dor = 2;
alert($ + P_dor);

let n = 123;
n = 12.342;
alert(2);
alert(1);
alert (1/0);
alert (1/0)



let box = null;
let anotherBox;
console.log(box, anotherBox)

let colors = ["красный","зелёный","синий"];
console.log(colors[0]);


let text = "ррррр";
console.log(typeof text);

let color = "blue";
console.log(`sdfsefasfwfe - ${color} !`)


let buttonPressed = false;

if (buttonPressed) {
   console.log("кнопка Нажата")
} 

// let isAdult = true;
// let isAdult = false;

// 5>3
// 10===10
// 7<2
//  f = a
//  10 == 3 
// 10 === g


// 51 === "3"

let namber = -10;

if (namber > 0)
{
   console.log("Позетивно")
}
else
{
   if(namber)
   console.log("отрецательно")
}


let grede = 4;
if(grede >=9){
   console.log("Отлично");
}
else if(grede >=7){
   console.log("Хорошо");
}
else if(grede >=5){
   console.log("Удолетворительно");
}
else {
   console.log("Нужно подкочаться");
}


let рр = 4;
if(рр >=30){
   console.log("Жара");
}
else if(рр >=20){
   console.log("тепло");
}
else if(рр >=10){
   console.log("Прохладно");
}
else {
   console.log("Холодно");
}


let age = 20;
let hasTicket = true;
 if (age >= 18 && hasTicket)
 { console.log("Добро");}
 else if (age >= 18 && !hasTicket)
 {
   console.log("Пошел от сюда шегол");
 }
else{
   console.log ("Шелб ты от сюда");
}


let day = 3
switch (day) {
   case 1:
      console.log("Понедельник");
      break;
         case 2:
            console.log("Вторник");
            break;
            case 3:
               console.log("Среда");
               break;
               case 4:
                  console.log("Четверг");
                  break;
                  case 5:
                     console.log("Пятница");
                     break;
                     case 6:
                        console.log("Субота");
                        break;
                        case 7:
                           console.log("Воскресенье");
                           break;
      default:
         console.log("это что за день?");
         
                           
}

let krto = "admin"
switch (krto) {
   case "admin":
      console.log("O я тебя знаю");
      break;
         case "ghost":
            console.log("AAAAAAAAAAAAA");
            break;
            case "user":
               console.log("Ладно");
               break;
              
      default:
         console.log("Кто ты");
}


let is0line = true;
let status = is0line ? "В сети" : "Не в сети";
console.log("status:", status);

// let is0line = true;
// let status = is0line ? "ГОтов" : "не готов";
// console.log("status:", status);


for (let i = 1 ; i <= 5; i++) {
   console.log("Повтор " + i); 
}

for (let i = 5 ; i <= 15; i++) {
   console.log(i); 
}

for (let i = 5 ; i <= 15; i++) {
   console.log(Math.random()); 
}

let i = 1;

while (i <= 5)
{
   console.log("Шаг" + i);
   i++
}

let maney = 110;

while (maney>0){
   console.log("Покупвю мороженое!");
   maney -= 20;
}

let b=10
while ( b > 0){
   console.log(b);
   b--
}


let pasword;

do{
   pasword = prompt("Введите пароль:");
} while (pasword !== "1234");

console.log("Пароль принят!");




do{
   pasword = prompt(" Ещё Введите пароль:");
} while (pasword !== "5");

console.log("Пароль принят!");


let fruits =["Яблоки","Банана","Глуша"];
for (let fruit of fruits) {
   console.log(fruit);
   
}

for (let letter of "ПРИвет") {
  console.log(letter);
   
}

let animal =["Яблоконя","Бананафтор","Глуша"];
for (let anomal of animal) {
   console.log(anomal);
   
}

let person ={ nami: "Даниил", age: 17, city: "Минск"};
for (let key in person) {
   
   console.log(key + ": " + person[key]);
}

let I ={ nami: "Анна", age: 15, city: "Минск"};
for (let key in I) {
   
   console.log(key + ": " + I[key]);
}

for (let index = 1; index <= 10; index++) {
   if (index % 2 === 0) continue;
   console.log(index);
}

let g = 0;
for (let index = 1; index <= 5; index++) {
     
      g= g + index;
      console.log(g)


}



for (let index = 1; index <= 10; index++) {
     
     console.log("3 * ",index," = ", 3*index )


}


let stch = 0;
let hhhhh = "Ananas"
for (let leterh of hhhhh)
 {
     if (leterh === "a"){
         stch++
     }
     console.log(stch);
}

let n = 10;
for (let i = 0; i < array.length; i++) {
   console.log(i * i);
   
}


function showMwssage(from, text) { 
   alert(from +', '+ text);
}

showMwssage('Привет','пока');

function sum(a, b) {
  return a + b;
}

let result =sum(1, 2);
alert( result);

