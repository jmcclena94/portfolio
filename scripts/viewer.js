'use strict';
/* jshint -W040 */
/* jshint -W117 */
/* jshint -W097 */

var viewer = {};

blog.prototype.populateBlogFilter = function() {
  var template = Handlebars.compile($('#filter_template').text());
  return template(this);
};

portfolio.prototype.populatePortfolioFilter = function() {
  var template = Handlebars.compile($('#filter_template').text());
  return template(this);
};

// blog.all.forEach(function(a){
//   $('#blog_filter').append(a.populateBlogFilter());
// });
//
// portfolio.all.forEach(function(a){
//   $('#portfolio_filter').append(a.populatePortfolioFilter());
// });

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

viewer.initIndexPage = function() {
  $('.blog_entry').remove();
  $('.portfolio_entry').remove();
  $('#social_list li').remove();
  $('.filter_value').remove();
  blog.all.forEach(function(a){
    $('#blog').append(a.toHtml());
    $('#blog_filter').append(a.populateBlogFilter());
  });
  portfolio.all.forEach(function(a){
    $('#portfolio').append(a.toHtml());
    $('#portfolio_filter').append(a.populatePortfolioFilter());
  });
  social.all.forEach(function(a){
    $('#social_list').append(a.toHtml());
  });
};

$(viewer.clickFunctions());
$(viewer.filterChangeFunctions());
