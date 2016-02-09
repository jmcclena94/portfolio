'use strict';
/* jshint -W040 */
/* jshint -W117 */
/* jshint -W097 */

function portfolio (data) {
  this.title = data.title;
  this.url = data.url;
  this.description = data.description;
}

portfolio.all = [];

portfolio.prototype.toHtml = function() {
  var template = Handlebars.compile($('#portfolio_template').text());
  return template(this);
};

portfolio.fetchAll = function () {
  if (localStorage.portfolioData) {
    $.ajax({
      type: 'HEAD',
      url: 'data/portfolioData.json',
      success: function(data,message,xhr) {
        var eTag = xhr.getResponseHeader('eTag');
        if (!localStorage.eTag || eTag !== localStorage.eTag) {
          localStorage.eTag = eTag;
        } else {
          portfolio.loadAll(JSON.parse(localStorage.portfolioData));
        }
      }
    });
    portfolio.loadAll(JSON.parse(localStorage.portfolioData));
    viewer.initIndexPage();
  } else {
    $.getJSON('data/portfolioData.json', function(data) {
      var stringData = JSON.stringify(data);
      localStorage.setItem('portfolioData',stringData);
      portfolio.loadAll(JSON.parse(localStorage.portfolioData));
      viewer.initIndexPage();
    });
  }
};

portfolio.loadAll = function(blogData) {
  portfolioData.forEach(function(ele) {
    portfolio.all.push(new portfolio(ele));
  });
};
