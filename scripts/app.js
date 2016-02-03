(function(){
  'use strict';
})();

var blogs = [];

function blog (data) {
  this.author = data.author;
  this.bio = data.bio;
  this.publishedOn = data.publishedOn;
  this.title = data.title;
  this.category = data.category;
}

blog.prototype.toHtml = function() {
  var $newBlog = $('article.blog_template').clone();

  $newBlog.attr('data-category',this.category);

  $newBlog.find('h1').text(this.title);
  $newBlog.find('h3').text(this.author);
  $newBlog.find('time[pubdate]').attr('title',this.publishedOn);
  $newBlog.find('p').text(this.bio);

  $newBlog.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago.');

  $newBlog.append('<hr>');

  $newBlog.removeClass();
  $newBlog.addClass('blog_post');

  return $newBlog;
};

blogData.forEach(function(ele) {
  blogs.push(new blog(ele));
});
