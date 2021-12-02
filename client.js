const net = require("net");
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
    console.log("Connected to server successfully");
    conn.write("Name: MP");
    conn.write("Say: Step by step");
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 4000);
    // setInterval(() => {
    //   conn.write("Move: right");
    // }, 4000);
  });

  return conn;
  
};

module.exports = {connect};
