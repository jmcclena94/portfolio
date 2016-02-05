(function(){
  'use strict';
})();

var blogs = [];

function blog (data) {
  this.author = data.author;
  this.body = data.body;
  this.publishedOn = data.publishedOn;
  this.title = data.title;
  this.category = data.category;
}

blog.prototype.toHtml = function() {
  var template = Handlebars.compile($('#article_template').text());
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  return template(this);
};

blogData.forEach(function(ele) {
  blogs.push(new blog(ele));
});

blogs.forEach(function(a){
  $('#blog').append(a.toHtml());
});
