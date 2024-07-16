// let arr = [1, 2, 3, 4, 3, 5, 7, 8, 4,8,8,8,8];

/* let a = arr.reduce((acc, curr) => {
  acc.push(curr * 2);
  return acc;
}, []);
console.log(a);
 */
/* 
let a = arr.reduce((acc, curVal) => {
  if (acc[curVal]) {
    acc[curVal]++
  }else{
    acc[curVal]=1
  }
  return acc
}, {});
console.log(a); */

let arr = [
  {
    name: "yasemen",
    category: "student",
  },
  {
    name: "elvin",
    category: "student",
  },
  {
    name: "emil",
    category: "student",
  },
  {
    name: "leyla",
    category: "teacher",
  },
  {
    name: "ibrahim",
    category: "teacher",
  },
  {
    name: "tamerlam",
    category: "student",
  },
];

let a = arr.reduce((acc, curVal) => {
  let b = curVal["category"];
  if (!acc[b]) {
    acc[b] = [];
  }
  acc[b].push(curVal);

  return acc;
}, {});
console.log(a);
