page('/',
  dataController.loadAll,
  blogController.index);

page('/portfolio',
  dataController.loadAll,
  portfolioController.index);

page();
