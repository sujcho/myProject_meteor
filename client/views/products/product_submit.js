Template.productSubmit.events({
  'submit .submit-form':function(event){
    event.preventDefault();

  //  console.log(event);

    var product =  {
      url:$(event.target).find('[name=url]').val(),
      title:$(event.target).find('[name=title]').val()
    }

    product._id = Products.insert(product);
  }
});
