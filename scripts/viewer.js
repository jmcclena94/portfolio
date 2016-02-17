'use strict';
/* jshint -W040 */
/* jshint -W117 */
/* jshint -W097 */

(function(module) {
  var viewer = {};

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

  viewer.hoverFunctions = function() {
    $('.repo_list').slideUp();
    $('#github').mouseenter(function() {
      $('.repo_list').slideDown();
    });
    $('.repo_list').mouseleave(function() {
      $('.repo_list').slideUp();
    });
  };

  viewer.initIndexPage = function() {
    Database.all.forEach(function(a){
      if (a.type === 'blogEntry') {
        $('#blog').append(a.blogToHtml());
        $('#blog_filter').append(a.populateFilter());
      } else if (a.type === 'portfolioEntry') {
        $('#portfolio_items').append(a.portfolioToHtml());
        $('#portfolio_filter').append(a.populateFilter());
      }
    });
    repos.requestRepos(repoView.index);
  };
  $(viewer.hoverFunctions());
  $(viewer.filterChangeFunctions());

  module.viewer = viewer;
})(window);
