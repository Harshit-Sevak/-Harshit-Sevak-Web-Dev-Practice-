const http = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(` <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title> Height, width, borders, and backgrounds </title>
      <style>
          #firstpara {tut
              background-color: red;
              height: 100px;
              width: 455px;
              border: 4px solid green;
              /*esme ek sath 3 aa gaye ek line main width color style*/
              /*border-width: 4px;
               border-color: blue;
               border-style: solid;*/
              border-radius: 11px;
  
          }
  
          #secondtpara {
              background-color: rgb(184, 219, 11);
              height: 100px;
              width: 455px;
              border-top: 2px solid black;
              border-right: 2px solid rgb(201, 97, 5);
              border-left: 2px solid rgb(76, 17, 185);
              border-bottom: 2px solid rgb(19, 146, 27);
              border-top-left-radius: 8px;
              border-top-right-radius: 7px;
              border-top-right-radius: 6px;
              border-bottom-left-radius: 5px;
  
          }
          #thirdpara{
              height: 100px;
              width: 455px;
              background-image: url('https://www.codewithharry.com/img/logo-blue.png');
              
          }
      </style>
  </head>
  
  <body>
      <h3>this is a heading</h3>
      <p id="firstpara"> This is a paragraph </p>
  
      <h3>this is a secondt para heading</h3>
      <p id="secondtpara"> This is my second paragraph </p>
  
      <h3>this is a Third   heading</h3>
      <p id="thirdpara"> This is my Third paragraph </p>
  </body>
  
  </html>`);
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});