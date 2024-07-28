// // const hobbies = ["coding", "reading", "cycling"];

// // console.log(hobbies[0]);
// // console.log(hobbies[1]);
// // console.log(hobbies[2]);
// // console.log(hobbies[3]);

// // hobbies[3] = "swimming";
// // console.log(hobbies[3]);

// // console.log(hobbies);

// // const nums = [10,2,3,5,7,4];

// // let x2 = 3n;
// // const y2 = x2++;

// // console.log(x2,y2);

// // const a = new String("1");
// // const b = 2;

// // if(a<b)
// //     console.log(true);
// // else
// //     console.log(false);

// // const string1 = "Hello            my           name           is          shashwat           tewari          ";
// // console.log(string1.trim());

// // let mydate= new Date();
// // console.log(mydate.toDateString());
// // console.log(mydate.toISOString());
// // console.log(mydate.toJSON());
// // console.log(mydate.toLocaleDateString());
// // console.log(mydate.toLocaleString());
// // console.log(mydate.toLocaleTimeString());
// // console.log(mydate.toString());
// // console.log(mydate.toUTCString());
// // console.log(mydate.getTimezoneOffset());

// // const alp=["a","b","c","d","e"]
// // const vowels =["a","e","i","o","u"]

// // alp.push(vowels)
// // console.log(alp);

// // alp.concat(vowels);
// // console.log(alp);
// // const letter = [alp,vowels]
// // console.log(letter)

// let arr1 = [1,2,3,4,5];

// // function printElem(num){
// //     console.log(num);
// // }

// // arr1.forEach(printElem)

// //For each element of array print square

// // let newArr = arr1.map((item)=>{
// //     return item*item*item;
// // });

// // console.log(newArr);

// // let newArr = arr1.filter((item)=>{
// //     return item%2===1;
// // }).map((elem)=>{
// //     return elem*elem;
// // }).filter((digit)=>{
// //     return digit<10;
// // });
// // console.log(newArr);

// //Set in Js
// // let setNumber = new Set();

// const map1 = new Map();
// map1.set('a', 1);
// map1.set('b', 2);

// console.log(map1.get(2));

// const arr1 = ['html', 'css', 'javascript', 'react', 'node', 'postgres'];

// console.log(arr1.length);
// console.log(arr1[2]);

// arr1.pop();
// console.log(arr1);

// arr1.push('sql');
// console.log(arr1);

// arr1.shift();
// console.log(arr1);

// const languages = arr1.join(" ");
// console.log(languages);

// const copiedArray = Array.from(arr1);
// console.log(copiedArray);

// const sortedArray = arr1.sort();
// console.log(sortedArray);

const arr1 = [1,2,3,4,5,6,7,8,9,0];

const cubedOdd = arr1.filter((item)=>{
    return item%2===1;
}).map((elem)=>{
    return elem*elem*elem;
});

console.log(cubedOdd)