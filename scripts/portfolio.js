(function(){
  'use strict';
})();

var portfolios = [];

function portfolio (data) {
  this.title = data.title;
  this.url = data.url;
  this.description = data.description;
}

portfolio.prototype.toHtml = function() {
  var template = Handlebars.compile($('#portfolio_template').text());
  return template(this);
};

portfolioData.forEach(function(ele) {
  portfolios.push(new portfolio(ele));
});

portfolios.forEach(function(a){
  $('#portfolio').append(a.toHtml());
});
