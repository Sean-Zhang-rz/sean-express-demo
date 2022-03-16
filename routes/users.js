var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('user发送这句话吧');
});
router.get('/xxx', function (req, res, next) {
  res.send('xxx 发送这句话吧a');
});

module.exports = router;
