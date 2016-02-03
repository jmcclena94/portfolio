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


$('#blog_link').one('click',function(){
  blogs.forEach(function(a){
    $('#blog').append(a.toHtml());
  });
  $(viewer.populateBlogFilter());
  $('.blog_filter').css('display','block');
});

$('#portfolio_link').one('click',function(){
  portfolios.forEach(function(a){
    $('#portfolio').append(a.toHtml());
  });
  $(viewer.populatePortfolioFilter());
  $('.portfolio_filter').css('display','block');
});

$('#social_link').click(function(){
  soc.forEach(function(a){
    $('#social_list').append(a.toHtml());
  });
});
