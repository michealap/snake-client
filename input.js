let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = function(key) {
  //check for ctrl + C to terminate conn
 
  switch (key) {
  case 'w':  //w
    connection.write("Move: up");
    connection.write("Say: you betcha!");
    console.log('up');
    break;
  case 's': //s
    connection.write("Move: down");
    connection.write("Say: listen to meeee!");
    console.log('down');
    break;
  case 'a': //a
    connection.write("Move: left");
    connection.write('Say: I am the inner');
    console.log('left');

    break;
  case 'd': //d
    connection.write("Move: right");
    connection.write("Say: Ahhhh that's how I feel about today");
    console.log('right');
    break;
  }
  if (key === '\u0003') {
    process.exit();
  }
};


module.exports = {setupInput};