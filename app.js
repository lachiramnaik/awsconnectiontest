import express from 'express';
import console from 'console'
const app = express();
const PORT = 3000;

app.get('/hello', (req, res) => {
  res.send('Hello Malothu Lachiramnaik');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});