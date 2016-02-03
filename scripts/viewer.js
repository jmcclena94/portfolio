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

viewer.populatePortfolioFilter = function() {
  $('article.portfolio_post').each(function() {
    var val = $(this).find('.portfolio_item a').text();
    var optionTag = '<option value="' + val + '">' + val + '</option>';
    $('#portfolio_filter').append(optionTag);
  });
};


$('#blog_link').on('click',function(){
  if ($('#blog').find('.blog_post').length === 0) {
    blogs.forEach(function(a){
      $('#blog').append(a.toHtml());
    });
  }
  $(viewer.populateBlogFilter());
  $('.blog_filter').css('display','block');
  $('#social').hide();
  $('#portfolio').hide();
  $('#blog').fadeIn();
});

$('#portfolio_link').on('click',function(){
  if ($('#portfolio').find('.portfolio_post').length === 0) {
    portfolios.forEach(function(a){
      $('#portfolio').append(a.toHtml());
    });
  }
  $(viewer.populatePortfolioFilter());
  $('.portfolio_filter').css('display','block');
  $('#social').hide();
  $('#portfolio').fadeIn();
  $('#blog').hide();
});

$('#social_link').on('click',function(){
  if ($('#social').find('.social_post').length === 0) {
    soc.forEach(function(a){
      $('#social_list').append(a.toHtml());
    });
  }
  $('#social').fadeIn();
  $('#portfolio').hide();
  $('#blog').hide();
});

$('#blog_link').click();
