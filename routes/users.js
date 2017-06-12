var express = require('express');
var router = express.Router();

router.get('/:name', function(req, res) {
  res.render('users', {
    name: req.params.name,
    supplies: ['mop', 'broom', 'duster']
  });
});

module.exports = router;