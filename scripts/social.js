(function(){
  'use strict';
})();

var soc = [];

function social (data) {
  this.name = data.name;
  this.link = data.link;
}

social.prototype.toHtml = function() {
  var template = Handlebars.compile($('#social_template').text());
  return template(this);
};

socData.forEach(function(ele) {
  soc.push(new social(ele));
});

soc.forEach(function(a){
  $('#social_list').append(a.toHtml());
});
