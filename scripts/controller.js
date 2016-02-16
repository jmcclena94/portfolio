(function(module) {
  var blogController = {},
      socialController = {},
      portfolioController = {};

  blogController.index = function() {
    Database.fetchAll(viewer.initIndexPage);

    $('#content > section').hide();
    $('#blog').show();

  };

  socialController.index = function() {
    Database.fetchAll(viewer.initIndexPage);

    $('#content > section').hide();
    $('#social').show();

  };

  portfolioController.index = function() {
    Database.fetchAll(viewer.initIndexPage);

    $('#content > section').hide();
    $('#portfolio').show();

  };

  module.blogController = blogController;
  module.socialController = socialController;
  module.portfolioController = portfolioController;
})(window);
