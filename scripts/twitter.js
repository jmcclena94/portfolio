(function(){
  'use strict';
})();

var soc = [];

function social (data) {
  this.name = data.name;
  this.link = data.link;
}

social.prototype.toHtml = function() {
  var $newSoc = $('li.social_template').clone();

  $newSoc.find('a').text(this.name).attr('href',this.link).attr('id',this.name);

  $newSoc.removeClass();
  $newSoc.addClass('social_post');

  return $newSoc;
};

socData.forEach(function(ele) {
  soc.push(new social(ele));
});

soc.forEach(function(a){
  $('#social_list').append(a.toHtml());
});
