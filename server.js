const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = module.exports = express();
app.use(bodyParser.json());

app.use(express.static(__dirname));

app.use(cors());


app.listen(8081, ()=>{
  console.log("Successfully listening on : 8081")
})
