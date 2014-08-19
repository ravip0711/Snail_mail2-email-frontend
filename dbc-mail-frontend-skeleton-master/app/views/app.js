var App = {
  init: function(){
    this.element = $("#content");
    this.messages = new MessageCollection();

    this.messages.fetch().done(function(){
      this.displayMessageInbox();
    }.bind(this));

  },

  // displayMessageInbox: function(){
    // var generalView = new MessageGeneralView(this.messages);
    // generalView.render(); //we have to make render(); It suppose to grab html from a template, insert information inside the template, then sends it back to ...?

    // this.element.html(generalView.element)
  // }
// }




$(document).ready(function() {
  App.init()
});
