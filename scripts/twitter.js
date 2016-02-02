(function(){
  'use strict';
})();

var soc = [];

function social (data) {
  this.name = data.name;
  this.link = data.link;
}

social.prototype.toHtml = function() {
  var $newSoc = $('li.socialTemplate').clone();

  $newSoc.find('a').text(this.name);
  $newSoc.find('a').attr('href',this.link);

  $newSoc.removeClass();
  $newSoc.addClass('socialPost');

  return $newSoc;
};

socData.forEach(function(ele) {
  soc.push(new social(ele));
});

$('#socialLink').click(function(){
  soc.forEach(function(a){
    $('#social').append(a.toHtml());
  });
});
