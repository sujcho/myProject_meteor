Template.productSubmit.events({
  'submit .submit-form':function(event){
    event.preventDefault();

  //  console.log(event);

    var product =  {
      name:$(event.target).find('[name=name]').val(),
      material:$(event.target).find('[name=material]').val(),
      dimension:$(event.target).find('[name=dimension]').val(),
      color:$(event.target).find('[name=color]').val(),
    }

    product._id = Products.insert(product);

    $('#submitModal').modal('hide');
  }
});
