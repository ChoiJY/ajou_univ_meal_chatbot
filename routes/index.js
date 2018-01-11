var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// home keyboard implementation
router.get('/keyboard', function (req, res) {
  res.json({
      "keyboard":{
        "type":"buttons",
        "buttons": ["ex1", "ex2", "ex3"]
      }
  })
})

module.exports = router;
