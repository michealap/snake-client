const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });
  //handling incoming data
  conn.on('data', (data)=> {
    console.log(data.toString());
    //received you ded cuz you idled
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  //when connect to the server, it will listen to event and trigger that callback
  conn.on('connect', () => {
    console.log("Connected to server");
    //conn.write(data);
  });

  return conn;
  
};

console.log("Connecting ...");
connect();
