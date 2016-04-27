
/*
Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    tasks: function () {
      return Tasks.find({}, {sort: {createdAt: -1}});
    }
  });

  //event listener
  Template.body.events({
    //submit any element matches the css selector .new-task
    "submit .new-task": function(event){
      event.preventDefault();
      //get value from form element
      var text = event.target.text.value;

      Tasks.insert({
        text: text,
        createdAt: new Date()
      });

      //clear form
      event.target.text.value = "";
    }
  })
}
*/
