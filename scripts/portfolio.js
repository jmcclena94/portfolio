(function(){
  'use strict';
})();

var portfolios = [];

function portfolio (data) {
  this.name = data.name;
  this.url = data.url;
  this.description = data.description;
}

portfolio.prototype.toHtml = function() {
  var $newPortfolio = $('article.portfolio_template').clone();

  $newPortfolio.find('a').attr('href',this.url).text(this.name);
  $newPortfolio.find('p').text(this.description);
  $newPortfolio.append('<hr>');

  $newPortfolio.removeClass();
  $newPortfolio.addClass('portfolio_post');

  return $newPortfolio;
};

portfolioData.forEach(function(ele) {
  portfolios.push(new portfolio(ele));
});

portfolios.forEach(function(a){
  $('#portfolio').append(a.toHtml());
});
