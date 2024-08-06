//Example 1

// function addTwo(num){
//     return num+10;
// }

// console.log(addTwo(2));

//Example 2
// function addS(word){
//     return word + "s";
// }

// console.log(addS("pizza"))

// function addTwo(element){
//     return element+2;
// }


//Example 3
// function mapping(arr, callback){
//     const newArr = [];
//     arr.forEach(element => {
//         newArr.push(callback(element));
//     });
//     return newArr;
// }

// console.log(mapping([1,2,3], addTwo));

//Example 4
// let alp = "";
// let arr = ['a', 'b', 'c', 'd'];

// function addStr(letter){
//     alp += letter;
// }

// function forEach(arr, callback) {
//     for(let i=0;i<arr.length;i++)
//         callback(arr[i]);

// }

// forEach(arr, addStr);
// console.log(alp);

// //Example 5
// function addTwo(num){
//     return num+2;
// }

// function forEach(arr, callback){
//     for(let i=0;i<arr.length;i++)
//         callback(arr[i]);
// }

// function mapWith(arr, callback){
//     const newArr = [];
//     forEach(arr,(item)=>{
//         newArr.push(callback(item));
//     })
//     return newArr;
// }

// console.log(mapWith([1,2,3],addTwo))

// Example 6
// const add = function add(num, sum){
//     return sum + num;
// }

// const reduce = function (arr, callback, initialValue){
//     let accumulator = initialValue;
//     for(let i=0;i<arr.length;i++)
//         accumulator = callback(accumulator,arr[i]);
//     return accumulator;
// }

// console.log(reduce([1,2,3], add, 0));

//Example 7
const commonArray=[];

function commonCheck(num, arr){
    
}

function intersection( callback, ...arrays){
    const arr = [...arrays];
    for(let i=0;i<arr.length;i++){
        commonArray = callback(arr[i],arr)
    }
}


console.log(intersection(commonCheck, [5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));