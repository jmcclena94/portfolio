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

  viewer.initIndexPage = function() {
    $('.blog_entry').remove();
    $('.portfolio_entry').remove();
    $('.filter_value').remove();
    Database.all.forEach(function(a){
      if (a.type === 'blogEntry') {
        $('#blog').append(a.blogToHtml());
        $('#blog_filter').append(a.populateFilter());
      }
    });
    Database.all.forEach(function(a){
      if (a.type === 'portfolioEntry') {
        $('#portfolio').append(a.portfolioToHtml());
        $('#portfolio_filter').append(a.populateFilter());
      }
    });
    Database.all.forEach(function(a){
      if (a.type === 'socialEntry') {
        $('#social_list').append(a.socialToHtml());
      }
    });
  };

  $(viewer.filterChangeFunctions());

  module.viewer = viewer;
})(window);
