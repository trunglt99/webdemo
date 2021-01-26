// // const student = {
// //     firstName: 'Monica'
// // }

// // // getting property
// // Object.defineProperty(student, "getName", {
// //     get : function () {
// //         return this.firstName;
// //     }
// // });

// // // setting property
// // Object.defineProperty(student, "changeName", {
// //     set : function (value) {
// //         this.firstName = value;
// //     }
// // });

// // console.log(student.firstName); // Monica

// // // changing the property value
// // student.changeName = 'Sarah';

// // console.log(student.firstName); // Sarah
// const array = ['a','b','c','d','e','f'];
// const array1 =[[1,2],[2,3],[3,4],[4,5]];
// let i ;
// // for(i=0;i<=array.length;i++)
// // {
// //    let as=array[i];
// // }
// // console.log(as);
// array.push('b');
// console.table(array);
// console.log(array1);
// let studentsData = [['Jack', 24], ['Sara', 23],];

// // looping outer array elements
// for(let i = 0; i < studentsData.length; i++){

//     // get the length of the inner array elements
//     let innerArrayLength = studentsData[i].length;
    
//     // looping inner array elements
//     for(let j = 0; j < innerArrayLength; j++) {
//         console.log(studentsData[i][j]);
//     }
// }
// const b= new String('Mai');
// const a='hello';
// const ghep= b.concat(" "+a);
// console.log(ghep);
// const adventure = 
// {
//     name: 'dsds',
//     class: 3,
//     age:8
// }
// for (let ids in adventure)
// {
//     console.log(`${ids}=>${adventure[ids]}`);
// }
let field='assest';
let objec = {name:'dsdsd',
             age:17,
             assest:'HaNoi'}
             objec.age=11;

console.log(objec[field]);