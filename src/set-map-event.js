import $ from 'jquery';
import Rx from 'rxjs/Rx';

const set = new Set(['Hello', '44', { title: 'My title'}]);

const set$ = Rx.Observable.from(set);

set$.subscribe(v => {
  console.log(v);
},
err => {
  console.log(err);
},
complete => {
  console.log('Completed');
});

const map = new Map([[1,2], [2,3]]);

const map$ = Rx.Observable.from(map);

map$.subscribe(v => {
  console.log(v);
},
err => {
  console.log(err);
},
complete => {
  console.log('Completed');
});
