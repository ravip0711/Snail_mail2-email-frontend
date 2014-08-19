function MessageGeneralView(message_collection){
  this.message_collection = message_collection;
  this.template = _.template($("#message-general-template").html());
  this.element = $("<div></div>");
}

MessageGeneralView.prototype.render = function(){
  this.element.html(this.template());

  _.each(this.message_collection.models, function(message){
    var messageView = new MessageRowView(message);
    this.element.find("#messages").append(messageView.render());
  }, this);

  return this.element
}
