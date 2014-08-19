function MessageDetailView(message){
  this.model = message;
  this.template = _.template($("#message-detail-template").html());
  this.element = $("<div></div>");

  this.element.on('click', '.left-nav', function(event){
    event.preventDefault();
    App.displayMessageInbox();
  });
}



MessageDetailView.prototype.render = function(){
  this.element.html(this.template(this.model));

  return this.element;
}
