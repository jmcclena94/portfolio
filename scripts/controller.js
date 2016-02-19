(function(module) {
  var blogController = {},
      portfolioController = {};
      dataController = {};

  blogController.index = function() {
    $('.blog_entry').remove();
    $('.filter_value').remove();
    viewer.initIndexPage();

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

  dataController.loadAll = function(ctx, next) {
    var databaseData = function() {
      ctx.database = Database.all;
      next();
    };

    if (Database.all.length) {
      ctx.database = Database.all;
      next();
    } else {
      Database.fetchAll(databaseData);
    }
  };

  module.dataController = dataController;
  module.blogController = blogController;
  module.portfolioController = portfolioController;
})(window);
