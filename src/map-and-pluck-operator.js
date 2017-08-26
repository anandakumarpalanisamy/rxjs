import $ from 'jquery';
import Rx from 'rxjs/Rx';

/* Map operable with data manipulation */
/*
const source$ = Rx.Observable
                  .interval(1000)
                  .take(10)
                  .map(v => v * 2);

source$.subscribe( v => console.log(v));
*/

/* Multiple Map operators */

/*
const source$ = Rx.Observable.from(['john', 'tom', 'bond'])
                  .map( v => v.toUpperCase())
                  .map( v => 'I am '+v);

source$.subscribe( v => console.log(v));
*/

/* Pluck Operator */

const users = [
  {name: 'Will', age: 24},
  {name: 'Bill', age: 33},
  {name: 'Kill', age: 55},
  {name: 'Jill', age: 31},
];

const users$ = Rx.Observable.from(users)
                  .pluck('age');

users$.subscribe(x => console.log(x));
