(function(module) {
  var blogController = {},
      portfolioController = {};

  blogController.index = function() {
    $('.blog_entry').remove();
    Database.fetchAll(viewer.initIndexPage);

    $('#content > section').hide();
    $('#blog').show();

  };

  portfolioController.index = function() {
    $('.portfolio_entry').remove();
    Database.fetchAll(viewer.initIndexPage);

    $('#content > section').hide();
    $('#portfolio').show();

  };

  module.blogController = blogController;
  module.portfolioController = portfolioController;
})(window);
