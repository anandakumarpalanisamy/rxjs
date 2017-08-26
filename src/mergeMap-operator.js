import $ from 'jquery';
import Rx from 'rxjs/Rx';

/* This isn't the right way to do it */
/*
Rx.Observable.of('Hello')
  .subscribe( v => {
    Rx.Observable.of(v + ' Everyone')
      .subscribe( x => {
        console.log(x);
      })
  });
*/

/* This is the correct way to do it */
Rx.Observable.of('Hello')
  .mergeMap(v => {
    return Rx.Observable.of(v + ' Everyone');
  })
  .subscribe(x => console.log(x));
