(function(){
  'use strict';
})();

var viewer = {};

blog.prototype.populateBlogFilter = function() {
  var template = Handlebars.compile($('#filter_template').text());
  return template(this);
};

portfolio.prototype.populatePortfolioFilter = function() {
  var template = Handlebars.compile($('#filter_template').text());
  return template(this);
};

blogs.forEach(function(a){
  $('#blog_filter').append(a.populateBlogFilter());
});

portfolios.forEach(function(a){
  $('#portfolio_filter').append(a.populatePortfolioFilter());
});

viewer.clickFunctions = function() {
  $('#blog_link').on('click',function(){
    $('.blog_filter').css('display','block');
    $('#social').hide();
    $('#portfolio').hide();
    $('#blog').fadeIn();
  });

  $('#portfolio_link').on('click',function(){
    $('.portfolio_filter').css('display','block');
    $('#social').hide();
    $('#portfolio').fadeIn();
    $('#blog').hide();
  });

  $('#social_link').on('click',function(){
    $('#social').fadeIn();
    $('#portfolio').hide();
    $('#blog').hide();
  });

  $('#blog_link').click();
};

viewer.filterChangeFunctions = function () {
  $('#blog_filter').on('change', function() {
    if ($(this).val()) {
      $('.blog_entry').hide();
      $('article[data-title="' + $(this).val() + '"]').fadeIn();
    } else {
      $('.blog_entry').fadeIn();
    }
  });
  $('#portfolio_filter').on('change', function() {
    if ($(this).val()) {
      $('.portfolio_entry').hide();
      $('article[data-title="' + $(this).val() + '"]').fadeIn();
    } else {
      $('.portfolio_entry').fadeIn();
    }
  });
};

$(viewer.clickFunctions());
$(viewer.filterChangeFunctions());
