(function(){
  'use strict';
})();

var viewer = {};

viewer.populateBlogFilter = function() {
  $('article.blog_post').each(function() {
    var val = $(this).find('.blog_title').text();
    var optionTag = '<option value="' + val + '">' + val + '</option>';
    $('#blog_filter').append(optionTag);
  });
};
$(viewer.populateBlogFilter());

viewer.populatePortfolioFilter = function() {
  $('article.portfolio_post').each(function() {
    var val = $(this).find('.portfolio_item a').text();
    var optionTag = '<option value="' + val + '">' + val + '</option>';
    $('#portfolio_filter').append(optionTag);
  });
};
$(viewer.populatePortfolioFilter());

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

$(viewer.clickFunctions());
