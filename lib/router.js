//Define route for main.html
Router.route('/', function () {
  this.render('Home');
});

//Define route for supplier.html
Router.route('/supplier', function () {
  this.render('Supplier');
});

/*
//to be fixed
Router.route('/productPage', {
  path: '/products/:_id',
  data: function() { return Products.findOne(this.params._id); }
});
*/
Router.route('/submit', function () {
  this.render('productSubmit');
});
