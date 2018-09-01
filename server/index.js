// const express = require('express');
// const bodyParser = require('body-parser');
// const PORT = process.env.PORT || 5000;

// const app = express();

// app.use(bodyParser.json());

// app.post('/api/v1/reversify', (req, res) => {
//   console.log(req.body);
//   const text = req.body.reversifyThis
//     .split('')
//     .reverse()
//     .join('');
//   res.json(text);
// });

// app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 5000;

const app = express();

// lets you use `req.body`
app.use(cors());
app.use(bodyParser.json());

app.post('/api/v1/reversify', (req, res) => {
  const text = req.body.reversifyThis
    .split('')
    .reverse()
    .join('');
  res.json(text);
});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
