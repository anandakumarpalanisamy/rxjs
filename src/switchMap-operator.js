
function getUser(username){
  return $.ajax({
    url: 'https://api.github.com/users'+username,
    dataType: 'jsonp'
  }).promise();
}

/*
const inputSource$ = Rx.Observable.fromEvent($('#input'), 'keyup');

inputSource$.subscribe(e => {
  return Rx.Observable.fromPromise(getUser(e.target.value))
    .subscribe(x => {
      $('name').text(x.data.name);
      $('#repos').text(x.data.public_repos);
    })
})

*/

const inputSource$ = Rx.Observable.fromEvent($('#input'), 'keyup')
  .map(e => e.target.value)
  .switchMap(v => {
    return Rx.Observable.fromPromise(getUser(v));
  });

inputSource$.subscribe(x => {
    $('name').text(x.data.name);
    $('#repos').text(x.data.public_repos);
});
