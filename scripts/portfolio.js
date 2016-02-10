'use strict';
/* jshint -W040 */
/* jshint -W117 */
/* jshint -W097 */
/* jshint -W055 */

(function(module) {
  function portfolio (data) {
    this.title = data.title;
    this.url = data.url;
    this.description = data.description;
  }

  portfolio.all = [];

  // portfolioData = [];

  portfolio.prototype.toHtml = function() {
    var template = Handlebars.compile($('#portfolio_template').text());
    return template(this);
  };

  portfolio.fetchAll = function (viewer) {
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
          viewer.initIndexPage(portfolio);
        }
      });
      portfolio.loadAll(JSON.parse(localStorage.portfolioData));
    } else {
      $.getJSON('data/portfolioData.json', function(data) {
        var stringData = JSON.stringify(data);
        localStorage.setItem('portfolioData',stringData);
        portfolio.loadAll(JSON.parse(localStorage.portfolioData));
        viewer.initIndexPage(portfolio);
      });
    }
  };

  portfolio.loadAll = function(portfolioData) {
    portfolioData.forEach(function(ele) {
      portfolio.all.push(new portfolio(ele));
    });
  };

  module.portfolio = portfolio;
})(window);
