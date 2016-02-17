(function(module) {
  var repoView = {};

  var ui = function() {
    $('#repo_list').children().remove();
    var $gitList = $('#github_list');
    $gitList.find('ul').empty();
  };

  var render = function(repo) {
    return $('<li>').html('<a href="' + repo.html_url + '">' + repo.name + '</a>');
  };

  repoView.index = function() {
    ui();

    $('#repo_list').append(repos.with('name').map(render));
  };

  module.repoView = repoView;
})(window);
