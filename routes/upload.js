var express = require('express');
var router = express.Router();

/* GET upload page. */
router.get('/', function(req, res, next) {
  res.render('pages/upload', { title: 'Upload Facility'} );
});

module.exports = router;
