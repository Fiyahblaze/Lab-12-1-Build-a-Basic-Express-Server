import express from 'express'
import path from 'path'


const app = express();


const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  console.log('Incoming Request | Url: ' + req.url + ' | Method: ' + req.method);
  res.send('<h1>Welcome to the Express Server!</h1>');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});