Template.Supplier.events({
  'click .category li':function(event){
    event.preventDefault();
    alert("selected");
  }
});

//to be fixed. To find products per each category
Template.Supplier.helpers({
  products: function(){
    return Products.find({ name : 'dfasdf' }).fetch();
  }
});
