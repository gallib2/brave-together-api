const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


const app = express();

const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.static("public"));
app.use(express.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());


app.get('/', function (req, res) {
  res.send('Hello World')
})


app.use(function (err, req, res, next) {
  console.error('err: ', err.stack);

  if(err.message) {
    return res.status(err.status).json({message: err.message});
  }

  return res.status(500).send('Something broke!')
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});