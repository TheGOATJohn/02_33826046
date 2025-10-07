//My Page app

var http = require("http");
const port = 8000;

http.createServer((req, res) => {

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>John Oladosu - My Page</title>
    </head>
    <body>
        <header>
            <h1>John Oladosu</h1>
            <h2>Goldsmiths Cybersecurity Student</h2>
        </header>
        <main>
          <p>Hello! I’m John, a final year cybersecurity student at Goldsmiths and the President of the Christian Union.</p>
          <p>In my free time, I love playing basketball, In my second year, I played for the Goldsmiths Basketball Team</p>
        </main>
    </body>
    </html>
  `);
    }).listen(port, function() { 
        console.log(`Node server is running on port ${port}...`); 
}); 
