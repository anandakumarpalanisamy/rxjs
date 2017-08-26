import $ from 'jquery';
import Rx from 'rxjs/Rx';

const numbers = [33, 44, 55, 66];

const numbers$ = Rx.Observable.from(numbers);

numbers$.subscribe(v => {
  console.log(v);
},
err => {
  console.log(err);
},
complete => {
  console.log('Completed');
});


const posts = [
  {
    title: 'Post One',
    body: 'This is the Body'
  },
  {
    title: 'Post Two',
    body: 'This is the Body'
  },
  {
    title: 'Post Three',
    body: 'This is the Body'
  }
];

const posts$ = Rx.Observable.from(posts);

posts$.subscribe(v => {
  console.log(v);
  $('#posts').append('<li><h3>'+ v.title+'</h3><p>'+v.body+'</p></li>');
},
err => {
  console.log(err);
},
complete => {
  console.log('Completed');
});
