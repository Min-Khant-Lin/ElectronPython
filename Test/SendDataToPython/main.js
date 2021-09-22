const {PythonShell} = require('python-shell');

let pyshell = new PythonShell('script.py');

pyshell.send(JSON.stringify([10]))

pyshell.on('message', function(message) {
  console.log(message);
})

pyshell.end(function (err) {
  if (err){
    throw err;
  };
  console.log('finished');
});