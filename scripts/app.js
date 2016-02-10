'use strict';
/* jshint -W040 */
/* jshint -W117 */
/* jshint -W097 */
/* jshint -W055 */

(function(module) {
  function blog (data) {
    this.author = data.author;
    this.body = data.body;
    this.publishedOn = data.publishedOn;
    this.title = data.title;
    this.category = data.category;
  }

  blog.all = [];

  blog.prototype.toHtml = function() {
    var template = Handlebars.compile($('#article_template').text());
    this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
    return template(this);
  };

  blog.fetchAll = function (viewer) {
    if (localStorage.blogData) {
      $.ajax({
        type: 'HEAD',
        url: 'data/blogData.json',
        success: function(data,message,xhr) {
          var eTag = xhr.getResponseHeader('eTag');
          if (!localStorage.eTag || eTag !== localStorage.eTag) {
            localStorage.eTag = eTag;
          } else {
            blog.loadAll(JSON.parse(localStorage.blogData));
          }
          viewer.initIndexPage(blog);
        }
      });
      blog.loadAll(JSON.parse(localStorage.blogData));
    } else {
      $.get('data/blogData.json', function(data){
        var stringData = JSON.stringify(data);
        localStorage.setItem('blogData',stringData);
        blog.loadAll(JSON.parse(localStorage.blogData));
        viewer.initIndexPage(blog);
      });
    }
  };

  blog.loadAll = function(blogData) {
    blogData.forEach(function(ele) {
      blog.all.push(new blog(ele));
    });
  };

  module.blog = blog;
})(window);
