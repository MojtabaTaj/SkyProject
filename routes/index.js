var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Mood Slider',
    helpers: {
  	 // throws in generated html code for image and title placeholders
     repeatTableCells: function(n, block){
        const imagesCell = '<th><img class ="movieimg"></th>',
              titleCell = '<th><p>No Content</p></th>',
              repeatPlaceholders = 
                '<tr>' + imagesCell.repeat(n) + '</tr>'
                +
                '<tr>' + titleCell.repeat(n) + '</tr>';

        // var cellHolders = new Object();
        // cellHolders = cellHolders = {'img': imagesCell.repeat(n), 'title': titleCell.repeat(n)};
        return repeatPlaceholders;
      }
    }

});
});
module.exports = router;