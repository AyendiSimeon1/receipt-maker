const express = require("express");



const app = express();


app.use(express.json());

app.get('/', (req, res) => {
    res.json("This is what i have");

});

const PORT = 3004

app.listen(3004, () => {
    console.log('Its working');
});