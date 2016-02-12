'use strict';
/* jshint -W040 */
/* jshint -W117 */
/* jshint -W097 */
/* jshint -W055 */

(function(module){

  function Database (opts) {
    Object.keys(opts).forEach(function(element, index, keys) {
      this[element] = opts[element];
    },this);
  }
  Database.all = [];

  Database.prototype.blogToHtml = function() {
    var template = Handlebars.compile($('#article_template').text());
    this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
    return template(this);
  };

  Database.prototype.portfolioToHtml = function() {
    var template = Handlebars.compile($('#portfolio_template').text());
    return template(this);
  };

  Database.prototype.socialToHtml = function() {
    var template = Handlebars.compile($('#social_template').text());
    return template(this);
  };

  Database.prototype.populateFilter = function() {
    var template;
    if (this.type === 'blogEntry') {
      template = Handlebars.compile($('#filter_template').text());
      return template(this);
    } else {
      template = Handlebars.compile($('#filter_template').text());
      return template(this);
    }
  };

  Database.loadAll = function(dataset) {
    dataset.forEach(function(ele) {
      Database.all.push(new Database(ele));
    });
  };

  Database.fetchAll = function(viewer) {
    if (localStorage.blogData) {
      $.ajax({
        type: 'HEAD',
        url: 'data/blogData.json',
        success: function(data,message,xhr) {
          var eTag = xhr.getResponseHeader('eTag');
          if (!localStorage.eTag || eTag !== localStorage.eTag) {
            localStorage.eTag = eTag;
            $.get(('data/blogData.json'), function(data){
              var stringData = JSON.stringify(data);
              localStorage.setItem('blogData',stringData);
              Database.loadAll(JSON.parse(localStorage.blogData));
            });
            $.get(('data/portfolioData.json'), function(data){
              var stringData = JSON.stringify(data);
              localStorage.setItem('portfolioData',stringData);
              Database.loadAll(JSON.parse(localStorage.portfolioData));
            });
            $.get(('data/socialData.json'), function(data){
              var stringData = JSON.stringify(data);
              localStorage.setItem('socialData',stringData);
              Database.loadAll(JSON.parse(localStorage.socialData));
              viewer();
            });
          } else {
            Database.loadAll(JSON.parse(localStorage.blogData));
            Database.loadAll(JSON.parse(localStorage.portfolioData));
            Database.loadAll(JSON.parse(localStorage.socialData));
            viewer();
          }
        }
      });
    } else {
      $.get(('data/blogData.json'), function(data){
        var stringData = JSON.stringify(data);
        localStorage.setItem('blogData',stringData);
        Database.loadAll(JSON.parse(localStorage.blogData));
      });
      $.get(('data/portfolioData.json'), function(data){
        var stringData = JSON.stringify(data);
        localStorage.setItem('portfolioData',stringData);
        Database.loadAll(JSON.parse(localStorage.portfolioData));
      });
      $.get(('data/socialData.json'), function(data){
        var stringData = JSON.stringify(data);
        localStorage.setItem('socialData',stringData);
        Database.loadAll(JSON.parse(localStorage.socialData));
        viewer();
      });
    }
  };

module.Database = Database;
})(window);
