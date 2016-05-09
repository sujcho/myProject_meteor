Template.productItem.events({
  'click #delete-item':function(){
    alert('delet');
    Products.remove(this._id);
  }

});
