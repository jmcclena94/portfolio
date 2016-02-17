(function(module) {
  var blogController = {},
      portfolioController = {};

  blogController.index = function() {
    $('.blog_entry').remove();
    $('.filter_value').remove();
    Database.fetchAll(viewer.initIndexPage);

    $('#content > section').hide();
    $('#blog').show();
  };

  portfolioController.index = function() {
    $('.filter_value').remove();
    $('.portfolio_entry').remove();
    Database.fetchAll(viewer.initIndexPage);

    $('#content > section').hide();
    $('#portfolio').show();
  };

  module.blogController = blogController;
  module.portfolioController = portfolioController;
})(window);
