// // const a = prompt('enter the value of a')
// // const b =prompt('enter the value of b')

// // let result = a+b>4?'below':'over';
// // alert(result)
// // alert(Boolean(0))


// // alert(true||undefined||0)

// // let x;
// // alert(true||(x=1));
// // alert(x);

// // alert( null || 2 || undefined );

// // alert( Boolean(alert(1)));

// // alert( alert(1) || 1 )

// // alert( alert(1) && alert(2) );

// // let name = prompt('Who is there?');
// // if(name.toUpperCase() == 'ADMIN'){
// //   let password =  prompt("What's the password?")
// //         if(password == 'TheMaster'){
// //             alert('welcome');
// //         }
// //         else if(password == null){
// //             alert('cancelled');
// //         }
// //         else{
// //             alert('Wrong password');
// //         }

// // }
// // else if(name.toUppercase() == null){
// //     alert('cancelled');
// // }

// // else{alert('I dont know you');}
// // let i = 0;
// // while (i<100){
// //     console.log(i+1);
// //     i++;
// // }
// // let sum = 0;
// // while(true){
// //     let value = +prompt('Enter a number:');
// //     if(!value) break;
// //     sum += value;
// // }
// // alert('sum:'+sum);

// // for(let i=0;i<100;i++){
// //     if(i%2 != 0) continue;
// //     console.log(i+2);
// // }



// // label_name: for(let i=0;i<100;i++){
// //                 for(let j=0;j<100;j++){
// //                     let input = prompt(`Value of coordinates(${i},${j}):`,'');
// //                     console.log(input);
// //                     console.log(typeof input);
// //                     if (!input) break label_name;
// //                 }
    
// //             }

// // alert('done');





// // let i = 3;
// // while (i) {
// //     alert( i-- );
// //   }

// // let i = 0;
// // while (++i < 5) alert( i );


// // let i = 0;
// // while (i++ < 5) alert( i );


// //function

// // function callingName(name,message){
// //     message = message || 'hello'
// //     alert(`${name}:${message}`);
// // }
// //   function ifTextIsNotGiven(){
// //     return  ;
// // }
// // callingName('nabin','hey');
// // callingName('khanal');
// // let valueOfFunction = ifTextIsNotGiven();
// // console.log(valueOfFunction);







// // a program to calculate list of prime numbers
// // showPrimes(50); 
// // function showPrimes(n)
// // {
// //     for(let i=2;i<n;i++)
// //     {
// //         if(!isPrime(i))
// //         {
// //             continue;
// //         }
// //         console.log(i);
// //     }
// // }
// // function isPrime(n){
// //     for(let i=2;i<n;i++)
// //     {
// //         if (n%i == 0) return false;
// //     }
// //     return true;
// // }

// // function checkAge(age){
// //    return age>18 || false;
// // }

// // let answer = checkAge(16);
// // alert(answer);




// // function findMinimum(a,b){
// //     return a<b?a:b;
// // }
// //  let minimumNumber = findMinimum(1,1);
// //  alert(minimumNumber);







// // function powerFunction (base,exp){
// //     return base ** exp;
// // }
// // alert(powerFunction(5,2));

















// // let add = (a,b) => a+b;
// // alert(add(5,2));


// // let age = prompt("What is your age?");
// // let welcome = (age<18)?
// //     () => alert('hello'):
// //     () => alert('greetings');

// //     welcome();

// // let ask = (question,yes,no)=>{
// //     if(confirm(question)) yes();
// //     else no();}
// // ask('Do you agree?',()=>alert('you agreed'),()=>alert('you cancelled the execution'));

// let a=30,b=60;
// let age = 35;
// let varriable = (age>b)?
//     () => alert('you are old'):
//     (age>a)?
//     () => alert('middle'):
//     () => alert('young');

// varriable();



// let details = {
//     firstName:"Ramchandra",
//     lastName:'Khanal',
//     age:19,
//     sex:"male",
//     'curent location':'resunga municipality 5 gulmi',
// }

// details.fatherName = "chabilal khanal";
// console.log(details);
// delete details.fatherName;
// console.log(details);
// details['permanent location']='tamghas';
// console.log(details);






// let fruit = prompt('which fruit do you want to buy','mango');

// let newObject ={
//     [fruit]:5,
// }

// console.log(newObject[fruit]);













// function makeUser(name,age){
//     return {
//         name,
//         age,
//     }
// }

// var details = makeUser("nabin",18);
// console.log(details);




// let name = 'Nabin Khanal';
// let age = 18;
// let address = 'Resunga Municipality -5- Gulmi'
// let userDetails ={
//     name,
//     age,
//     address,
// }

// console.log(userDetails);
 












// let obj ={
//     for:'hi',
//     let:'how are',
//     return:'you',
// }
// console.log(obj.for + obj.let + obj.return);

// let obj = {};
// obj._proto_ = 5;
// alert(obj._proto_);

































// let obj={};
// let key1 = prompt('Enter the first key ');
// obj[key1] = prompt('enter the value');
// console.log(obj);
// alert("name" in obj);
// alert("address" in obj);



// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//   };
  
//   for (let name in user) {
//     // keys
//     alert( name );  // name, age, isAdmin
//     // values for the keys
//     alert( user[name] ); // John, 30, true
//   }


// let userDetails ={
//     name: prompt('Hey Dude,What is your name?'),
//     age: prompt('Can you tell me your age?'),
//     grade: prompt('In which class do you study?'),

// }
// let key;
// for( key in userDetails){
//     console.log(key);
//     console.log(userDetails[key]);
// }


// let newUser = {
//     name:'Nabin',
//     sayHi(){
//         let arrow = () => alert(this.name)
//     } 
// }
// newUser.sayHi();
// console.log('a');
// let obj, method;

// obj = {
//   go: function() { alert(this);},
//   }

//   (method = obj.go)(); 


// let calculator = {
//     read(){
//         this.value1 = prompt('enter the first number');
//         this.value2 = prompt('Enter the second value');
//     },
//     sum(){
//         return +this.value1 + +this.value2;
//     },
//     multiply(){
//         return this.value1 * this.value2;
//     }

// }
// calculator.read();
// alert(`The sum is ${calculator.sum()}.`);
// alert(`The product is ${calculator.multiply()}.`);

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function() { // shows the current step
//     alert( this.step );
//     return this;
//   }
// };
// ladder.up().up().up().showStep(); 

// let id = Symbol('what');
// console.log(typeof id);
// alert(id.description)


// let user = { // belongs to another code
//     name: "John"
//   };
  
//   let id = Symbol("address");
  
//   user[id] = 'Gulmi';
  
//   console.log( user); // we can access the data using the symbol as the key


// let id = Symbol("id");
// let newUser = {
//     name:'Nabin',
//     [id]:112
// }
// console.log(newUser);
// for(let key in newUser){
//     console.log(key,newUser[key]);
// }


// let id = Symbol("id")

// let client = {
//     name:'Nabin Khanal',
//     [id]:111,    
// }
// let clone = Object.assign({},client);
// console.log(clone);

// let id = Symbol.for('id');
// let anotherId = Symbol.for('id');
// alert(Symbol.keyFor(id));


// let globalSymbol = Symbol.for('name');
// let localSymbol = Symbol('name');
// alert(Symbol.keyFor(globalSymbol));
// alert(Symbol.keyFor(localSymbol));


// let anotherObject={}
// anotherObject['obj'] = 123;

// alert(anotherObject);







// let newUser={
//     name:'nabin',
//     value:500,
//     [Symbol.toPrimitive](hint){
//         alert(`hint:${hint}`);
//         return hint=='string'?`Name:${this.name}`:this.value;
//     }
// }
// alert(+newUser);



// let user = {name:'John'};
// alert(user);
// alert(user.toString() == user)

// let user = {
//     name:"Nabin",
//     class:10,

//     valueOf:function (){
//         return this.class;
//     }
//     ,
//     toString:function(){
//         return this.name;
//     }
// }
// alert(Boolean(user) + 10);


// function User(name)
// {
//     this.name=name;
//     this.isAdmin = true;
// }
//  let user = new User('jack');

//  alert(user.name);
//  alert(user.isAdmin);


// function NewUser(address){
//     this.name = "Nabin",
//     this.address = address
// }

// let newUser1 =new  NewUser('Gulmi');
// alert(`He is ${newUser1.name} and he lives in ${newUser1.address}`)


// let user = new function(){
//     this.name="Nabin";
//     this.address="Gulmi";
// }
// console.log(user.name);



// function NewConstructorFunction(){
//     key = 1;
//     value = 1;
//     alert(new.target);
// }
// let user = new NewConstructorFunction()
// function aser(name){
//     if(!new.target){
//         return new aser(name);
//     }
//     this.name = name;
//     return 'nabin';
// }

// let nabin = new aser('Nabin');
// alert(nabin.name);
// let khanal = new aser('khanal');
// console.log(khanal.name)



// let str = "nabin";
// alert(str.toUpperCase());

// let n = "nabin";
// alert (n.test)

// let str = "Hello";

// str.test = 5;

// alert(str.test);

// alert (0xef);

// let num = 255;
// alert(num.toString(16))
// alert(num.toString(8))

// alert(255..toString(16))


// let num = -123.556;
// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// console.log(Math.round(num));
// console.log(Math.trunc(num));
// alert(0.1 + 0.2);
// alert( 9999999999999999 );

// alert(!isNaN(11

// let newValue = +prompt('Please enter a number');
// if(isFinite(newValue)){
//     alert('good');
// }

// value = Math.trunc(Math.random() * 50);
// alert(value)

// var value1 = +prompt("Enter the first number");
// var value2 = +prompt("Enter the second number");
// alert((value1 + value2).toFixed(5))
// alert ((6.35).toFixed(1))

// let num;
// function readNumber(){
//     do{
//         num = prompt('Enter a number');
//     }
//     while(!isFinite(num));

//     if(num == '' || num == null){return null;}
//     return num;
// }
// let value = readNumber();
// alert(value);

// function random(min,max){
    
//     return Math.round((Math.random() * (max - min) + min));

// }
// let min = prompt('ENter the lower value');
// let max = prompt('ENter the higher value');
// for(let i = 1; i< 100;i++)
// console.log(random(min,max))


// let value = '\u{1F60D}';
// console.log(value);
// console.log(value.length);

// let str = `Hello`;
// alert(str[0])
// alert(str[str.length])
// alert(str.charAt(0))

// let str = `Nabin Khanal`;
// for(let char of str){
//     console.log(char);
// }

// let number = 4;
// number = number.toString(2);
// console.log(number);

// let str = "newString";
// str = 'h';
// alert(str[0]);

// alert('NABIN'.toLowerCase())

// let str = `my  is nabin name khanal`;
// alert(str.indexOf('name'));
// alert(str.indexOf('name'));

// let str = 'Widget with id';

// alert( str.indexOf('id', 2) );
// alert( str.indexOf('id') );

// let str = 'As sly as a fox, as strong as an ox';

// let target = 'as'; // let's look for it

// let pos = 0;
// while (true) {
//   let foundPos = str.indexOf(target, pos);
//   if (foundPos == -1) break;

//   alert( `Found at ${foundPos}` );
//   pos = foundPos + 1; // continue the search from the next position
// }

// let str = "as sly as fox,as strong as ox";
// let target = 'as';
// // let pos = -1;
// // while((pos = str.indexOf(target,pos+1)) != -1){
// //     alert(pos);
// // } 
// alert(str.lastIndexOf('fox'))

// alert(~2);

// let str = "stringfy";
// console.log(str.slice(0,5));
// console.log(str.slice(5,0));
// console.log(str.substring(5,0));

// alert('z'.codePointAt(0));
// alert(String.fromCodePoint(22));
// console.log(String.fromCodePoint(44))

// let string1 = "Nabin";
// let string2 = "Khanal";
// alert(string1.localeCompare(string2));

// alert( '😂'.length)
// console.log( '𝒳'[0] ); // strange symbols...
// console.log( '𝒳'[1] );

// let arr = ['apples','mangoes','plum'];
// alert(arr);
// let array = new Array();
// function Array(){
//     'apple','ball','cat'
// }
// // arr[arr.length - 1] = 'strawberry';
// // alert(arr);

// // let mixedArray = ["apple",45,{name:'Nabin'},true,() => {alert('Hello')}, ["apple",45,{name:'Nabin'},true,() => {alert('Hello')}]]

// // console.log(mixedArray)

// console.log(array);

// let fruits = [1,2,3,4,5,6,7,8,9,];
// console.log(fruits.pop());
// console.log (fruits)
// console.log(fruits.push(10));
// console.log(fruits);

// console.log(fruits.shift())
// console.log(fruits);
// console.log(fruits.unshift(1))
// console.log(fruits)

// let newArray = [1,2,3,4,5,6,7,8,9,];
// // for(let element of newArray){
// //     console.log(element);
// // }
// alert (newArray[5]);
// newArray.length=5;
// alert (newArray[5]);

// let multiDimensionalArray = [[1,2,3],[4,5,6],[7,8,9]];
// console.log(multiDimensionalArray);
// console.log(multiDimensionalArray[1]);
// console.log(multiDimensionalArray[1][1]);

// let arr = [1,2,3];
// console.log(arr);
// console.log(arr.toString());
// // console.log(String(arr));

// let arr = ['i','go','home'];
// // delete arr[1];
// // console.log(arr);
// // console.log(arr.length)

// // console.log(arr.splice(1,2,'dont','go'));
// // console.log(arr)

// let newArray = arr.slice(0,2)
// console.log(arr);
// console.log(newArray)
// console.log(arr.concat([1,2]));
// console.log(arr)

// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//     alert(`${item} is at index ${index} in ${array}`);
//   });

// let array = [1,2,3,4,5,6,7,8,9];
// array.forEach((item) => {
//     console.log(`the square of ${item} is ${item ** 2}`);
// });

// let arr = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
// arr.splice(2, 0, "complex", "language");

// alert( arr ); // "I", "study", "complex", "language", "JavaScript"

// arr.forEach(function(item,index,arr){
//     console.log(item)
// });
// arr.forEach(alert)

// let users = [{id:1,name:'john'},
//              {id:2,name:'Pete'},
//              {id:3,name:'Mary'}
//             ]
// let user = users.find((item) => item.id == 1);
// alert(user.name);

// let students = [{name:'Anil Thapa',class:10,roll:1},
//                 {name:'Mahesh Khanal',class:10,roll:2},
//                 {name:'Nabin Khanal',class:10,roll:3}
//             ]

// let student = students.filter(item => item.class==10);
// console.log(student);

// let newArray = [{name:'john',id:1,class:11},
//                 {name:'peter',id:1,class:11},
//                 {name:'mary',id:1,class:11},
//             ]
// let array = newArray.map(item => item.name)
// console.log(array)


// let arrayOfNumbers = [45,23,2,15,27,3]
// // console.log(arrayOfNumbers.sort((a,b) => a-b))
// arrayOfNumbers.sort(function(a,b){alert(a + ' <> ' + b)});

// let names = 'Bilbo,Gandalf,Nazgul';
// let arr = names.split(',');
// console.log(arr)
// for(let name of arr){
//     alert(`A message to ${name}`)
// }

// let string = 'Nabin';
// for(let letter of string){
//     console.log(letter)
// }

// let arr = [1,2,3,4,5];
// let result = arr.reduce((sum,current) => sum + current);
// console.log(result)

// let camelize = (string) => string.split('-').map((word,index) => index == 0 ? word:word[0].toUpperCase() +word.slice(1)).join('');
// alert(camelize(prompt("Enter the css property")));

// let rangr = {
//     from:1,
//     to:100
// }
// for(let num of rangr){
//     console.log(num)
// }

// let range = {
//     from: 1,
//     to: 100
//   };
  
//   // 1. call to for..of initially calls this
//   range[Symbol.iterator] = function() {
  
//     // ...it returns the iterator object:
//     // 2. Onward, for..of works only with this iterator, asking it for next values
//     return {
//       current: this.from,
//       last: this.to,
  
//       // 3. next() is called on each iteration by the for..of loop
//       next() {
//         // 4. it should return the value as an object {done:.., value :...}
//         if (this.current <= this.last) {
//           return { done: false, value: this.current++ };
//         } else {
//           return { done: true };
//         }
//       }
//     };
//   };
  
//   // now it works!
//   for (let num of range) {
//     console.log(num); // 1, then 2, 3, 4, 5
//   }

// let range = {
//     from : 1,
//     to : 100
// }

// range[Symbol.iterator] = function() {
//     return {
//     current:this.from,
//     last:this.to,
    

//     next () {
//         if (this.current <= this.last) {
//             return { done: false, value: this.current++ };
//           } else {
//             return { done: true };
//           }
//     }
// }
// }

// for (let num of range) {
//    console.log(num); // 1, then 2, 3, 4, 5
//   }

// let map = new Map();
// map.set("name",'Nabin');
// console.log(map.get('name'));
// console.log(map.has('name'));
// console.log(map.size);
// console.log(map.clear());

// let newMap = new Map();
// newMap.set(1,'Nabin').set(2,'Anil').set(3,'Mahesh');
// console.log(newMap)

// let recipeMap = new Map([['cucumber',500],['tomatoes',350],['onion',50]]);
// console.log(recipeMap)

// for(let vegetables of recipeMap.entries()){
//     alert(vegetables)
// }

// let newArray = ['cucumber','tomatoes','onion'];
// newArray.forEach((value,index) => alert(`value:${index}`))

// let recipeMap = new Map([['cucumber',500],['tomatoes',350],['onion',50]]);
// recipeMap.forEach((value,key) => console.log(`${value}`))

// let obj = {
//     name:'John',
//     agr:30
// }

// let map = new Map (Object.entries(obj));
// console.log(map);

// let prices = Object.fromEntries([['banana',1],['orange',2],['meat',4]]);

// console.log(typeof prices)

// let map = new Map();
// map.set('name','nabin')
// map.set('age', 18)
// map.set('address','Gulmi')

// let prices = Object.fromEntries(map.entries());
// console.log(prices);

// let newobject = {
//     name:'Nabin',
//     class:10
// }

// let map = new Map(Object.entries(newobject))
// console.log(map)

// let map = new Map([['name','Nabin'],['age',18],['class',13]]);

// let newObject = Object.fromEntries(map);
// console.log(newObject)

// let map = new Map();
// map.set('name','Nabin');
// map.set('age',18);
// map.set('class',13);
// let newObject = Object.fromEntries(map)
// console.log(newObject)

// let set = new Set();
// let john = {name:'john'}
// let mary = {name:'mary'}
// let pete = {name:'pete'}

// set.add(john)
// set.add(mary);
// set.add(pete)
// for(let user of set){
//     console.log(user.name)
// }

// let set = new Set(['oranges','apples','bananas']);
// // set.forEach((value,valueAgain,set) => console.log(set))
//  for( let values of set.entries()){
//      console.log(values)
//  }

// let values =  ["Hare", "Krishna", "Hare", "Krishna",
// "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
//  let set = new Set(values)
//  console.log(set)

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// function aclean(array){
//     let map = new Map();
//     for(let word of array)
//     {
//         let sorted = word.toLowerCase().split('').sort().join('');
//         map.set(sorted,word);
//     }
//     console.log(map.keys())
//     return Array.from(map.values())


// }

//     console.log(aclean(arr));


// let map = new Map();
// map.set('name','John');
// let keys = Array.from(map.keys());
// keys.push('more')













































































