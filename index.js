const express = require("express");
const { mongoose } = require('mongoose');
const  cors  = require('cors');
const app = express();
const { router } = require('./src/routes/index');

app.use(express.json());
app.use('/', router);

app.use(cors());

app.get('/', (req, res) => {
    res.json("This is what i have");

});

const PORT = 3004

const uri = "mongodb+srv://simeon:19Ana156@cluster0.golqhml.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


// Options
const options = {
  useNewUrlParser: true,
};

mongoose.connect(uri, options)
  .then(() => {
    console.log('Successfully connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

app.listen(3004, () => {
    console.log('Its working');
});
