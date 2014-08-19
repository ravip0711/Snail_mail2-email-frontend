function MessageRowView(message){
  this.model = message;
  this.element = $("<div></div>");
  this.template = _.template($("#message-row-template").html());

  this.element.on('click', ".row", this.loadMessageDetail.bind(this));
// ask about the bind here
}

MessageRowView.prototype.render = function() {
  this.element.html(this.template(this.templateData()));

  return this.element
}

MessageRowView.prototype.templateData = function() {
  return{
    subject: this.model.subject,
    from: this.model.from,
    sentence: this.model.body.split(". ")[0] + ".",
    body: this.model.body
  };
}

MessageRowView.prototype.loadMessageDetail = function(row){
  App.displayMessageDetail(this.model.id);
  console.log(this.model)
  console.log(this.model.id)
}
