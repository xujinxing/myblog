module.exports = function (app) {
  app.get('/', function (req, res) {
    res.redirect('/index');
  });
  app.use('/signup', require('./signup'));
  app.use('/signin', require('./signin'));
  app.use('/signout', require('./signout'));
  app.use('/posts', require('./posts'));
  app.use('/index', function(req, res, next) {
    res.render('index');
  });
  // 404 page
	app.use(function (req, res) {
	  if (!res.headersSent) {
	    res.status(404).render('404');
	  }
	});
};