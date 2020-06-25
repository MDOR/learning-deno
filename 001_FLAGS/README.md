### Deno flags
Run the code using:
- `deno run --allow-net=the-one-api.herokuapp.com ./index.js` will throw an exception
- `deno run --allow-net=the-one-api.herokuapp.com,www.the-one-api.herokuapp.com ./index.js` will run with no issues
