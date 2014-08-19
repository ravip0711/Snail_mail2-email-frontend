function MessageCollection() {
  this.model = Message;
  this.models = [];
}

MessageCollection.prototype.find = function(id){
  return _.find(this.models, function(message){
    return message.id === id
    // if(message.id === id){
    //   return message;
    // }
  });
}

MessageCollection.prototype.fetch = function(){

  var request = $.ajax({
    url: 'http://localhost:9393/users/bob@example.com/emails',
    type: "GET",
  });

  request.done(function(messages){
    _.each(messages, function(message){
      this.models.push(new this.model(message));
    }.bind(this));
  }.bind(this));

  return request;

};
