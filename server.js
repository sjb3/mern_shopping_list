import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const items = require('./routes/api/items');

const port = process.env.PORT || 5000;

const app = express();
// bodyParser/jsonParser
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;
// connect to mongoDB
mongoose
  .connect(db)
  .then(() => {
    console.log('>>>>> Connected to mongoDB');
  })
  .catch((err) => {
    console.log(err, ' :Failed to connect to mongoDB ');
  });

// Use Routes
app.use('/api/items', items);

app.listen(port, () => {
  console.log(`>>>>> Server up n running port: ${port}`);
});
