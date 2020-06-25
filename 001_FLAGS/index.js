function wrapper(url) {
  const date = new Date().toLocaleString();
  const group = date + ' ' + url;
  fetch(url)
    .then(data => console.group(group) || data.json())
    .then(data => console.log(data.docs))
    .catch(error => console.log('This is fine 🔥🐕🔥', error))
    .finally(() => console.groupEnd(group));
}

/*
  Using --allow-net=the-one-api.herokuapp.com
  Will send request using https and http

  In addition, allowing the domain you can hit any part of the domain, API, etc
*/
wrapper('https://the-one-api.herokuapp.com/v1/book');
wrapper('http://the-one-api.herokuapp.com/v1/book');

/*
This will not work, wwww or any subdomainis not defined
Project will crash
*/
try {
  var a = new Promise(function (res) {
    wrapper('http://www.the-one-api.herokuapp.com/v1/');
    res(true);
  })
    .catch(function (e) {
      console.log('This is fine 🔥🐕🔥', e);
    })
    .finally((...args) => console.log(...args));

  setTimeout(() => wrapper('http://www.the-one-api.herokuapp.com/v1'), 3000);
} catch (e) {
  console.log('This is fine 🔥🐕🔥', e);
}
