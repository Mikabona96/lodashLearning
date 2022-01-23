var _ = require('lodash');

const a = _.chunk(['a', 'b', 'c', 'd'], 3) //[ [ 'a', 'b', 'c' ], [ 'd' ] ]
// console.log(a)

const falseyValsRemoved = _.compact([false, 1, '', 2, undefined, 3, null, 4, 0])
// console.log(falseyValsRemoved)


const arraytoConcat = [1];
const concated = _.concat(arraytoConcat, 2, [3], [[4]]) //[ 1, 2, 3, [ 4 ] ]
// console.log(concated) 

const difference = _.difference([7, 2], [2, 2]) // [ 2 ] check only on left arr
// console.log(difference)

const dropped = _.drop([1, 2, 3, 4, 5, 6, 7], 3) // [ 4, 5, 6, 7 ]
// console.log(dropped)


const fill = _.fill([2, 3, 4, 5, 1, 8, 9], 7, 2, 5) // [2, 3, 7, 7, 7, 8, 9]  // 7 - элемент, которым будут заполнять массивб 2 это стартовая позиция(по индексу т.к отсчет с 0), 5 - это конечная позиция (отсчет с 1)
// console.log(fill)

const flatten = _.flatten([1, [2, [3, [4]], 5]]) //[ 1, 2, [ 3, [ 4 ] ], 5 ]
// console.log(flatten)

const fromPairs = _.fromPairs([['a', 1], ['b', 2]]) //{ a: 1, b: 2 }
// console.log(fromPairs)

const intersected = _.intersection([2, 1], [2, 3]) // [2]
// console.log(intersected)

const pulled = ['a', 'b', 'c', 'a', 'b', 'c'];
_.pull(pulled, 'a', 'c'); // => ['b', 'b']
// console.log(pulled);



var users = [
    { 'user': 'barney', 'age': 36, 'active': false },
    { 'user': 'fred',   'age': 40, 'active': true }
  ];
   
//   const u = _.reject(users, function(o) { return !o.active; }); // [ { user: 'fred', age: 40, active: true } ]
  const u = _.reject(users, { 'age': 40, 'active': true }) // [ { user: 'barney', age: 36, active: false } ]
//   console.log(u)

const random = _.sample([1, 2, 3, 4]) // random element
// console.log(random)

const shuffled = _.shuffle([1, 2, 3, 4]);
// console.log(shuffled)
























































