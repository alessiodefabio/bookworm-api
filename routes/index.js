var express = require('express');
var router = express.Router();

//import index from '../views/index.html';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*POST request*/
router.post('/api/auth', function (req, res) {
  res.status(400).json({errors:{global: "Invalid credentials"}});
});
module.exports = router;
